

import { ConfigService } from '@nestjs/config';
import { getRepository } from 'typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import * as request from 'supertest';
import * as bcrypt from 'bcryptjs';
import { advanceBy } from 'jest-date-mock';

import { applicantFactory } from './factories';
import { companyUserFactory } from './factories';
import { setupBeforeAndAfter } from './setupBeforeAndAfter';

setupBeforeAndAfter();

describe('Auth Controller', () => {
  let httpServer: request.SuperTest<request.Test>;
  let app: INestApplication;
  let config: ConfigService;

  let applicantToken;
  let applicant;
  let companyUserToken;
  let companyUser;

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
      applicant = {
      ...applicantFactory(),
      email: 'applicant@example.com',
      password: 'Letmein123@',
      
        confirmed_at: new Date(),
          }
    const applicantParams = {
      email: applicant.email,
      password: applicant.password,
      grant_type: 'password',
      scope: 'applicants',
    };
    const applicant_encrypted_password = bcrypt.hashSync(applicantParams.password, 10);
    await getRepository('applicants').insert({
      ...applicant,
      encrypted_password: applicant_encrypted_password,
    });

    applicantToken = await httpServer
      .post('/oauth/token')
      .send(applicantParams)
      .then((res) => res.body);
      companyUser = {
      ...companyUserFactory(),
      email: 'companyUser@example.com',
      password: 'Letmein123@',
      
        confirmed_at: new Date(),
          }
    const companyUserParams = {
      email: companyUser.email,
      password: companyUser.password,
      grant_type: 'password',
      scope: 'company_users',
    };
    const companyUser_encrypted_password = bcrypt.hashSync(companyUserParams.password, 10);
    await getRepository('company_users').insert({
      ...companyUser,
      encrypted_password: companyUser_encrypted_password,
    });

    companyUserToken = await httpServer
      .post('/oauth/token')
      .send(companyUserParams)
      .then((res) => res.body);
    });

  describe('applicant register', () => {
    it('applicant register success', async () => {
      await httpServer
        .post('/api/applicants_registrations')
        .send({ ...applicantFactory(), email: 'applicant_registration@example.com' })
        .expect(200);
    });

    it('register failure because duplicate email', async () => {
      const user = applicantFactory();
      const params = { ...user, email: 'test@example.com' };
      await getRepository('applicants').insert({ ...params });
      await httpServer
        .post('/api/applicants_registrations')
        .send(params)
        .expect(400)
        .expect(({ body }) => {
          expect(body.message).toEqual('app.users.already_exists');
        });
    });
  });

  describe('applicant login', () => {
    describe('success', () => {
      it('applicant login success', async () => {
        const user = {
          ...applicantFactory(),
          email: 'applicant_login@example.com',
          password: 'Letmein123@',
          
            confirmed_at: new Date(),
                  };
        const params = {
          email: user.email,
          password: user.password,
          grant_type: 'password',
          scope: 'applicants',
        };
        const encrypted_password = bcrypt.hashSync(params.password, 10);
        await getRepository('applicants').insert({
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
            scope: 'applicants',
            grant_type: 'password',
          })
          .expect(403)
          .expect(({ body }) => {
            expect(body.message).toEqual('app.users.wrong_credentials');
          });
      });

      
      it('email unconfirmed', async () => {
        const user = {
          ...applicantFactory(),
          email: 'applicant_login@example.com',
          password: 'Letmein123@',
        };
        const params = {
          email: user.email,
          password: user.password,
          grant_type: 'password',
          scope: 'applicants',
        };
        const encrypted_password = bcrypt.hashSync(params.password, 10);
        await getRepository('applicants').insert({
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
            it('applicant locked', async () => {
        const user = {
          ...applicantFactory(),
          email: 'applicant_login@example.com',
          password: 'Letmein123@',
          
            confirmed_at: new Date(),
                  };
        const params = {
          email: user.email,
          password: user.password,
          grant_type: 'password',
          scope: 'applicants',
        };
        const encrypted_password = bcrypt.hashSync(params.password, 10);
        await getRepository('applicants').insert({
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

  describe('applicant refresh token', () => {
    describe('success', () => {
      it('refresh token success', async () => {
        const refreshTokenParams = {
          grant_type: 'refresh_token',
          refresh_token: applicantToken.refresh_token,
          scope: 'applicants',
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
          refresh_token: applicantToken.refresh_token,
          scope: 'applicants',
        };
        advanceBy(applicantToken.refresh_token_expires_in);
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

  describe('applicant revoke token', () => {
    describe('success', () => {
      it('revoke access token success', async () => {
        const revokeTokenParams = {
        token: applicantToken.access_token,
        };
        await httpServer
          .post('/oauth/revoke')
          .send(revokeTokenParams)
          .expect(200);
      });
      it('revoke refresh token success', async () => {
        const revokeTokenParams = {
          token: applicantToken.refresh_token,
          token_type_hint: 'refresh_token',
        };
        await httpServer
          .post('/oauth/revoke')
          .send(revokeTokenParams)
          .expect(200);
      });
    });
  });

  describe('applicant request send reset password', () => {
    describe('success', () => {
      it('response success with valid email', async () => {
        const resetPasswordParams = {
        email: applicant.email,
        };
        await httpServer
          .post('/api/applicants_reset_password_requests')
          .send(resetPasswordParams)
          .expect(200);
      });
      it('response success with invalid email', async () => {
        const resetPasswordParams = {
          email: 'invalid_email@example.com',
        };
        await httpServer
          .post('/api/applicants_reset_password_requests')
          .send(resetPasswordParams)
          .expect(200);
      });
    });
  });

  describe('applicant verify reset password token', () => {
    describe('success', () => {
      it('verify success', async () => {
        const resetToken = 'SampleToken!@#';
        await getRepository('applicants').save({
          id: applicantToken.resource_id,
          reset_password_sent_at: new Date(),
          reset_password_token: resetToken,
        });
        const params = {
          reset_token: resetToken,
          password: 'Letmein1234@',
          password_confirmation: 'Letmein1234@',
        };
        await httpServer
          .post('/api/applicants_verify_reset_password_requests')
          .send(params)
          .expect(200);
      });
    });
    describe('failure', () => {
      it('wrong token', async () => {
        const resetToken = 'SampleToken!@#';
        await getRepository('applicants').save({
          id: applicantToken.resource_id,
          reset_password_sent_at: new Date(),
          reset_password_token: resetToken,
        });
        const params = {
          reset_token: 'wrongToken123@',
          password: 'Letmein1234@',
          password_confirmation: 'Letmein1234@',
        };
        await httpServer
          .post('/api/applicants_verify_reset_password_requests')
          .send(params)
          .expect(400)
          .expect(({ body }) => {
            expect(body.message).toEqual('app.reset_token.invalid');
          });
      });
      it('expired token', async () => {
        const resetToken = 'SampleToken!@#';
        await getRepository('applicants').save({
          id: applicantToken.resource_id,
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
          .post('/api/applicants_verify_reset_password_requests')
          .send(params)
          .expect(400)
          .expect(({ body }) => {
            expect(body.message).toEqual('app.reset_token.expired');
          });
      });
    });
  });
  describe('company user register', () => {
    it('companyUser register success', async () => {
      await httpServer
        .post('/api/company_users_registrations')
        .send({ ...companyUserFactory(), email: 'companyUser_registration@example.com' })
        .expect(200);
    });

    it('register failure because duplicate email', async () => {
      const user = companyUserFactory();
      const params = { ...user, email: 'test@example.com' };
      await getRepository('company_users').insert({ ...params });
      await httpServer
        .post('/api/company_users_registrations')
        .send(params)
        .expect(400)
        .expect(({ body }) => {
          expect(body.message).toEqual('app.users.already_exists');
        });
    });
  });

  describe('company user login', () => {
    describe('success', () => {
      it('companyUser login success', async () => {
        const user = {
          ...companyUserFactory(),
          email: 'companyUser_login@example.com',
          password: 'Letmein123@',
          
            confirmed_at: new Date(),
                  };
        const params = {
          email: user.email,
          password: user.password,
          grant_type: 'password',
          scope: 'company_users',
        };
        const encrypted_password = bcrypt.hashSync(params.password, 10);
        await getRepository('company_users').insert({
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
            scope: 'company_users',
            grant_type: 'password',
          })
          .expect(403)
          .expect(({ body }) => {
            expect(body.message).toEqual('app.users.wrong_credentials');
          });
      });

      
      it('email unconfirmed', async () => {
        const user = {
          ...companyUserFactory(),
          email: 'companyUser_login@example.com',
          password: 'Letmein123@',
        };
        const params = {
          email: user.email,
          password: user.password,
          grant_type: 'password',
          scope: 'company_users',
        };
        const encrypted_password = bcrypt.hashSync(params.password, 10);
        await getRepository('company_users').insert({
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
            it('companyUser locked', async () => {
        const user = {
          ...companyUserFactory(),
          email: 'companyUser_login@example.com',
          password: 'Letmein123@',
          
            confirmed_at: new Date(),
                  };
        const params = {
          email: user.email,
          password: user.password,
          grant_type: 'password',
          scope: 'company_users',
        };
        const encrypted_password = bcrypt.hashSync(params.password, 10);
        await getRepository('company_users').insert({
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

  describe('company user refresh token', () => {
    describe('success', () => {
      it('refresh token success', async () => {
        const refreshTokenParams = {
          grant_type: 'refresh_token',
          refresh_token: companyUserToken.refresh_token,
          scope: 'company_users',
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
          refresh_token: companyUserToken.refresh_token,
          scope: 'company_users',
        };
        advanceBy(companyUserToken.refresh_token_expires_in);
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

  describe('company user revoke token', () => {
    describe('success', () => {
      it('revoke access token success', async () => {
        const revokeTokenParams = {
        token: companyUserToken.access_token,
        };
        await httpServer
          .post('/oauth/revoke')
          .send(revokeTokenParams)
          .expect(200);
      });
      it('revoke refresh token success', async () => {
        const revokeTokenParams = {
          token: companyUserToken.refresh_token,
          token_type_hint: 'refresh_token',
        };
        await httpServer
          .post('/oauth/revoke')
          .send(revokeTokenParams)
          .expect(200);
      });
    });
  });

  describe('company user request send reset password', () => {
    describe('success', () => {
      it('response success with valid email', async () => {
        const resetPasswordParams = {
        email: companyUser.email,
        };
        await httpServer
          .post('/api/company_users_reset_password_requests')
          .send(resetPasswordParams)
          .expect(200);
      });
      it('response success with invalid email', async () => {
        const resetPasswordParams = {
          email: 'invalid_email@example.com',
        };
        await httpServer
          .post('/api/company_users_reset_password_requests')
          .send(resetPasswordParams)
          .expect(200);
      });
    });
  });

  describe('company user verify reset password token', () => {
    describe('success', () => {
      it('verify success', async () => {
        const resetToken = 'SampleToken!@#';
        await getRepository('company_users').save({
          id: companyUserToken.resource_id,
          reset_password_sent_at: new Date(),
          reset_password_token: resetToken,
        });
        const params = {
          reset_token: resetToken,
          password: 'Letmein1234@',
          password_confirmation: 'Letmein1234@',
        };
        await httpServer
          .post('/api/company_users_verify_reset_password_requests')
          .send(params)
          .expect(200);
      });
    });
    describe('failure', () => {
      it('wrong token', async () => {
        const resetToken = 'SampleToken!@#';
        await getRepository('company_users').save({
          id: companyUserToken.resource_id,
          reset_password_sent_at: new Date(),
          reset_password_token: resetToken,
        });
        const params = {
          reset_token: 'wrongToken123@',
          password: 'Letmein1234@',
          password_confirmation: 'Letmein1234@',
        };
        await httpServer
          .post('/api/company_users_verify_reset_password_requests')
          .send(params)
          .expect(400)
          .expect(({ body }) => {
            expect(body.message).toEqual('app.reset_token.invalid');
          });
      });
      it('expired token', async () => {
        const resetToken = 'SampleToken!@#';
        await getRepository('company_users').save({
          id: companyUserToken.resource_id,
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
          .post('/api/company_users_verify_reset_password_requests')
          .send(params)
          .expect(400)
          .expect(({ body }) => {
            expect(body.message).toEqual('app.reset_token.expired');
          });
      });
    });
  });
});
