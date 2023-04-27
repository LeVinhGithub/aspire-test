import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import TokenStrategy from './strategies/token.strategy';
import { ConfigService } from '@nestjs/config';
import { Applicant } from 'entities/applicants';
import { CompanyUser } from 'entities/company_users';

import { TwilioLoginModule } from "features/twilio-login/twilio-login.module";

import { AccessToken } from 'entities/access_tokens';
import { OAuthService } from './auth.service';
import { OAuthController } from './auth.controller';
import RefreshTokenStrategy from './strategies/refresh-token.strategy';

@Module({
  imports: [
        TypeOrmModule.forFeature([
              Applicant,
              CompanyUser,
            AccessToken,
    ]),
    PassportModule,
        TwilioLoginModule,
        JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get('jwt.accessSecret'),
          signOptions: {
            expiresIn: configService.get('jwt.expiresIn'),
          },
        };
      },
      inject: [ConfigService],
    })
  ],
  controllers: [OAuthController],
  providers: [
    TokenStrategy,
    RefreshTokenStrategy,
    OAuthService
  ],
})
export class AuthModule {}
