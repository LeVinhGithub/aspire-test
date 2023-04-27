

import { ConfigService } from '@nestjs/config';
import { getRepository } from 'typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import * as request from 'supertest';
import * as bcrypt from 'bcryptjs';
import { advanceBy } from 'jest-date-mock';

import { testingFactory } from './factories';
import { setupBeforeAndAfter } from './setupBeforeAndAfter';

setupBeforeAndAfter();

describe('Auth Controller', () => {
  let httpServer: request.SuperTest<request.Test>;
  let app: INestApplication;
  let config: ConfigService;

  let testingToken;
  let testing;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    config = moduleFixture.get<ConfigService>(ConfigService);

    app = moduleFixture.createNestApplication();
    await app.init();

    httpServer = request(app.getHttpServer());
  });

  beforeEach(async () => {
      testing = {
      ...testingFactory(),
      email: 'testing@example.com',
      password: 'Letmein123@',
      
        confirmed_at: new Date(),
          }
    const testingParams = {
      email: testing.email,
      password: testing.password,
      grant_type: 'password',
      scope: 'testings',
    };
    const testing_encrypted_password = bcrypt.hashSync(testingParams.password, 10);
    await getRepository('testings').insert({
      ...testing,
      encrypted_password: testing_encrypted_password,
    });

    testingToken = await httpServer
      .post('/oauth/token')
      .send(testingParams)
      .then((res) => res.body);
    });

  describe('testing register', () => {
    it('testing register success', async () => {
      await httpServer
        .post('/api/testings_registrations')
        .send({ ...testingFactory(), email: 'testing_registration@example.com' })
        .expect(200);
    });

    it('register failure because duplicate email', async () => {
      const user = testingFactory();
      const params = { ...user, email: 'test@example.com' };
      await getRepository('testings').insert({ ...params });
      await httpServer
        .post('/api/testings_registrations')
        .send(params)
        .expect(400)
        .expect(({ body }) => {
          expect(body.message).toEqual('app.users.already_exists');
        });
    });
  });

  describe('testing login', () => {
    describe('success', () => {
      it('testing login success', async () => {
        const user = {
          ...testingFactory(),
          email: 'testing_login@example.com',
          password: 'Letmein123@',
          
            confirmed_at: new Date(),
                  };
        const params = {
          email: user.email,
          password: user.password,
          grant_type: 'password',
          scope: 'testings',
        };
        const encrypted_password = bcrypt.hashSync(params.password, 10);
        await getRepository('testings').insert({
          ...user,
          encrypted_password: encrypted_password,
        });

        await httpServer
          .post('/oauth/token')
          .send(params)
          .expect(200)
          .expect(({ body }) => {
            expect(body.access_token).toBeDefined();
            expect(body.refresh_token).toBeDefined();
          });
      });
    });
    describe('failure', () => {
      it('invalid credentials', async () => {
        await httpServer
          .post('/oauth/token')
          .send({
            email: 'fake@example.com',
            password: 'Letmein123@',
            scope: 'testings',
            grant_type: 'password',
          })
          .expect(403)
          .expect(({ body }) => {
            expect(body.message).toEqual('app.users.wrong_credentials');
          });
      });

      
      it('email unconfirmed', async () => {
        const user = {
          ...testingFactory(),
          email: 'testing_login@example.com',
          password: 'Letmein123@',
        };
        const params = {
          email: user.email,
          password: user.password,
          grant_type: 'password',
          scope: 'testings',
        };
        const encrypted_password = bcrypt.hashSync(params.password, 10);
        await getRepository('testings').insert({
          ...user,
          encrypted_password: encrypted_password,
          confirmed_at: null,
        });

        await httpServer
          .post('/oauth/token')
          .send(params)
          .expect(403)
          .expect(({ body }) => {
            expect(body.message).toEqual('app.users.unconfirmed');
          });
      });
            it('testing locked', async () => {
        const user = {
          ...testingFactory(),
          email: 'testing_login@example.com',
          password: 'Letmein123@',
          
            confirmed_at: new Date(),
                  };
        const params = {
          email: user.email,
          password: user.password,
          grant_type: 'password',
          scope: 'testings',
        };
        const encrypted_password = bcrypt.hashSync(params.password, 10);
        await getRepository('testings').insert({
          ...user,
          encrypted_password: encrypted_password,
          failed_attempts: 9,
        });

        // 10th attempt
        await httpServer
          .post('/oauth/token')
          .send({ ...params, password: 'wrong_password' })
          .expect(403)
          .expect(({ body }) => {
            expect(body.message).toEqual('app.users.wrong_credentials');
          });

        // 11th attempt
        await httpServer
          .post('/oauth/token')
          .send({ ...params, password: 'wrong_password' })
          .expect(403)
          .expect(({ body }) => {
            expect(body.message).toEqual('app.users.locked');
          });
      });
    });
  });

  describe('testing refresh token', () => {
    describe('success', () => {
      it('refresh token success', async () => {
        const refreshTokenParams = {
          grant_type: 'refresh_token',
          refresh_token: testingToken.refresh_token,
          scope: 'testings',
        };
        await httpServer
          .post('/oauth/token')
          .send(refreshTokenParams)
          .expect(200)
          .expect(({ body }) => {
            expect(body.access_token).toBeDefined();
            expect(body.refresh_token).toBeDefined();
          });
      });
    });
    describe('failure', () => {
      it('refresh token expired', async () => {
        const refreshTokenParams = {
          grant_type: 'refresh_token',
          refresh_token: testingToken.refresh_token,
          scope: 'testings',
        };
        advanceBy(testingToken.refresh_token_expires_in);
        await httpServer
          .post('/oauth/token')
          .send(refreshTokenParams)
          .expect(400)
          .expect(({ body }) => {
            expect(body.message).toEqual('app.refresh_token.invalid');
          });
      });
    });
  });

  describe('testing revoke token', () => {
    describe('success', () => {
      it('revoke access token success', async () => {
        const revokeTokenParams = {
        token: testingToken.access_token,
        };
        await httpServer
          .post('/oauth/revoke')
          .send(revokeTokenParams)
          .expect(200);
      });
      it('revoke refresh token success', async () => {
        const revokeTokenParams = {
          token: testingToken.refresh_token,
          token_type_hint: 'refresh_token',
        };
        await httpServer
          .post('/oauth/revoke')
          .send(revokeTokenParams)
          .expect(200);
      });
    });
  });

  describe('testing request send reset password', () => {
    describe('success', () => {
      it('response success with valid email', async () => {
        const resetPasswordParams = {
        email: testing.email,
        };
        await httpServer
          .post('/api/testings_reset_password_requests')
          .send(resetPasswordParams)
          .expect(200);
      });
      it('response success with invalid email', async () => {
        const resetPasswordParams = {
          email: 'invalid_email@example.com',
        };
        await httpServer
          .post('/api/testings_reset_password_requests')
          .send(resetPasswordParams)
          .expect(200);
      });
    });
  });

  describe('testing verify reset password token', () => {
    describe('success', () => {
      it('verify success', async () => {
        const resetToken = 'SampleToken!@#';
        await getRepository('testings').save({
          id: testingToken.resource_id,
          reset_password_sent_at: new Date(),
          reset_password_token: resetToken,
        });
        const params = {
          reset_token: resetToken,
          password: 'Letmein1234@',
          password_confirmation: 'Letmein1234@',
        };
        await httpServer
          .post('/api/testings_verify_reset_password_requests')
          .send(params)
          .expect(200);
      });
    });
    describe('failure', () => {
      it('wrong token', async () => {
        const resetToken = 'SampleToken!@#';
        await getRepository('testings').save({
          id: testingToken.resource_id,
          reset_password_sent_at: new Date(),
          reset_password_token: resetToken,
        });
        const params = {
          reset_token: 'wrongToken123@',
          password: 'Letmein1234@',
          password_confirmation: 'Letmein1234@',
        };
        await httpServer
          .post('/api/testings_verify_reset_password_requests')
          .send(params)
          .expect(400)
          .expect(({ body }) => {
            expect(body.message).toEqual('app.reset_token.invalid');
          });
      });
      it('expired token', async () => {
        const resetToken = 'SampleToken!@#';
        await getRepository('testings').save({
          id: testingToken.resource_id,
          reset_password_sent_at: new Date(),
          reset_password_token: resetToken,
        });
        const params = {
          reset_token: resetToken,
          password: 'Letmein1234@',
          password_confirmation: 'Letmein1234@',
        };
        advanceBy(
          config.get('authentication.resetPasswordIn') * 3600 * 1000 + 3000,
        );
        await httpServer
          .post('/api/testings_verify_reset_password_requests')
          .send(params)
          .expect(400)
          .expect(({ body }) => {
            expect(body.message).toEqual('app.reset_token.expired');
          });
      });
    });
  });
});
