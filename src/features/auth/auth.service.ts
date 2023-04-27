import {
BadRequestException,
Injectable,
  ForbiddenException,
} from '@nestjs/common';
  import * as bcrypt from 'bcryptjs';
  import * as crypto from 'crypto'
import * as dayjs from 'dayjs'
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { I18nService } from 'nestjs-i18n';
import { JWTConfig } from 'src/configs';
import { JwtDto } from './dtos/jwt.dto';
import * as SignUpDto from './dtos/sign-up.dto';
import { GrantTokenDto } from './dtos/grant-token.dto';
import { ScopeEnum } from './dtos/scope.dto'
  import { Testing } from 'entities/testings';
import { AccessToken } from 'entities/access_tokens';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as ms from 'ms';
  import { MailService } from 'src/shared/mail/mail.service';
  import { VerifyResetPasswordDTO } from './dtos/verify-reset-password.dto';
import { TokenResponseDTO } from './dtos/token-response.dto';
import { OAUTH_GRANT_TYPE } from 'src/constants';


@Injectable()
export class OAuthService {
  private jwtConfig: JWTConfig;

  constructor(
        @InjectRepository(Testing) private testingRepo: Repository<Testing>,
    @InjectRepository(AccessToken)
  private accessTokenRepo: Repository<AccessToken>,
  private readonly configService: ConfigService,
  private readonly jwtService: JwtService,
      private readonly mailService: MailService,
    private readonly i18n: I18nService,
      ) {
    this.jwtConfig = this.configService.get<JWTConfig>('jwt');
  }

  async login(grantTokenDto: GrantTokenDto) {
    switch(grantTokenDto.scope) {
        case "testings":
    const actionTestingByGrantTypes = {
    [OAUTH_GRANT_TYPE.PASSWORD]: () => {
              return this.loginTesting(grantTokenDto)
        },
    [OAUTH_GRANT_TYPE.REFRESH_TOKEN]: () =>
      this.refreshToken(grantTokenDto.refresh_token),
    };
    return await actionTestingByGrantTypes[grantTokenDto.grant_type]();
      default:
      throw new BadRequestException(`scope ${grantTokenDto.scope} is not supported.`);
    }
  }


async refreshToken(refreshToken: string) {
  if (
    !(await this.accessTokenRepo.findOneBy({
      refresh_token: refreshToken
    }))
  ) {
    throw new BadRequestException(
      await this.i18n.translate("app.refresh_token.invalid")
    );
  }

  try {
    const {
      userId,
      scope,
      resourceOwner
    } =
    await this.jwtService.verifyAsync<JwtDto>(refreshToken, {
      secret: this.jwtConfig.refreshSecret,
    });

    this.accessTokenRepo.delete({
      refresh_token: refreshToken,
    });

    const accessToken = await this._generateAccessToken({
      userId,
      scope,
      resourceOwner,
    });

    const accessTokenParams = {
      token: accessToken,
      refresh_token: refreshToken,
      resource_owner_type: resourceOwner,
      resource_owner_id: userId,
    };
    const newAccessToken = await this.accessTokenRepo.save(accessTokenParams);

    return {
      access_token: newAccessToken.token,
      refresh_token: refreshToken,
      resource_owner: resourceOwner,
      resource_id: userId,
      expires_in: ms(this.jwtConfig.expiresIn),
      token_type: 'Bearer',
      scope: scope,
      create_at: newAccessToken.created_at,
      refresh_token_expires_in: ms(this.jwtConfig.refreshIn),
    };
  } catch (e) {
    throw new BadRequestException(
      await this.i18n.translate("app.refresh_token.invalid")
    );
  }
}

    isAuthenticateTesting(user: Testing, password: string) {
    return bcrypt.compareSync(password, user?.encrypted_password || '');
  }

  async incrementFailedAttemptsTesting(user: Testing) {
    user.failed_attempts += 1;
    await this.testingRepo.save(user, { reload: true });
  }

  async lockAccessTesting(user: Testing) {
    user.locked_at = dayjs().toDate();
    user.unlock_token = crypto.randomUUID();
    if (['email', 'both'].includes(
      this.configService.get('authentication.unlockStrategy')
    )) {
      await this.sendUnlockInstructionsTesting(user);
    }
    await this.testingRepo.save(user, { reload: true });
  }

  async sendUnlockInstructionsTesting(user: Testing) {
    return this.mailService.sendMail({
      to: user.email,
      subject: 'Unlock email instructions',
      template: 'unlock-email-instructions',
      context: {
        url: this.configService.get('authentication.unlockAccessUrl'),
        email: user.email,
        token: user.unlock_token,
      }
    });
  }

  async unlockTestingByToken(unlockToken: string) {
    const user = await this.testingRepo.findOneBy({
      unlock_token: unlockToken,
    });
    if (!user) {
      throw new BadRequestException(
        await this.i18n.translate("app.unlock_token.invalid")
      );
    }

    await this.unlockAccessTesting(user);
    return { success: true };
  }

  async unlockAccessTesting(user: Testing) {
    user.locked_at = null;
    user.failed_attempts = 0;
    user.unlock_token = null;
    await this.testingRepo.save(user, { reload: true });
  }

  async resetFailedAttemptsTesting(user: Testing) {
    if (user.failed_attempts !== 0) {
      user.failed_attempts = 0;
      await this.testingRepo.save(user, { reload: true });
    }
  }

  protected isAttemptsExceededTesting(user: Testing) {
    return (
      user.failed_attempts >=
      this.configService.get('authentication.maximumAttempts')
    );
  }

  protected isLockExpiredTesting(user: Testing) {
    if (['time', 'both'].includes(this.configService.get('authentication.unlockStrategy'))) {
      return user.locked_at
        ? dayjs(user.locked_at).add(
            ms(this.configService.get('authentication.unlockIn')),
          'ms',
          ) < dayjs()
        : false;
    }
    return false;
  }

  protected isAccessLockedTesting(user: Testing) {
    return user.locked_at && !this.isLockExpiredTesting(user);
  }

  async loginTesting(grantTokenDto: GrantTokenDto) {
    const user = await this.testingRepo.findOneBy({ email: grantTokenDto.email });
    if (!user) {
      throw new ForbiddenException(
        await this.i18n.translate('app.users.wrong_credentials'),
      );
    }

    if (this.configService.get('authentication.sendConfirmationEmail') && !user.confirmed_at) {
      throw new ForbiddenException(
        await this.i18n.translate('app.users.unconfirmed'),
      );
    }

          if (!user.confirmed_at) {
        throw new ForbiddenException(
        await this.i18n.translate('app.users.unconfirmed'),
      );
      }
    
    if (this.isLockExpiredTesting(user)) {
      await this.unlockAccessTesting(user);
    }

    if (this.isAccessLockedTesting(user)) {
      throw new ForbiddenException(
        await this.i18n.translate('app.users.locked'),
      );
    }
    if (!this.isAuthenticateTesting(
      user,
      grantTokenDto.password,
    )) {
      await this.incrementFailedAttemptsTesting(user);
      if (this.isAttemptsExceededTesting(user)) {
        await this.lockAccessTesting(user);
      }
      throw new ForbiddenException(
        await this.i18n.translate('app.users.wrong_credentials'),
      );
    }

    this.resetFailedAttemptsTesting(user);
    return this._generateTokenResponse({
      userId: user.id,
      scope: grantTokenDto.scope,
      resourceOwner: "Testing",
    });
  }


      
    async signUpTesting(signUpDto: SignUpDto.AuthRegistrationTestingRequestDto) {
    try{
      const params = {
                password: signUpDto.testing.password,
                password_confirmation: signUpDto.testing.password_confirmation,
                email: signUpDto.testing.email,
                    };
      const user = this.testingRepo.create(params);

      const result = await this.testingRepo.save(user);

      if (this.configService.get('authentication.sendConfirmationEmail')) {
        user.confirmation_token = crypto.randomUUID();
        user.confirmation_sent_at = new Date()
        await this.sendTestingConfirmationEmail(user)
        await this.testingRepo.save(user)
      }

      return { id: result.id };
    } catch(e) {
      if (e.detail.includes("already exists")) {
        throw new BadRequestException(
          await this.i18n.translate("app.users.already_exists")
        );
      }
      throw new BadRequestException(
        await this.i18n.translate("app.something_went_wrong")
      );
    }
  }

  async sendTestingConfirmationEmail(user: Testing) {    
    return this.mailService.sendMail({ 
      to: user.email,
      subject: 'Confirmation instructions',
      template: 'email-confirmation',
      context: {
        url: this.configService.get('authentication.confirmationUrl'),        
        email: user.email,
        token: user.confirmation_token
      }
    })    
  }



  async verifyTestingConfirmationEmail(token: string) {
    const user = await this.testingRepo.findOneBy({ confirmation_token: token })

    if (!user) {
      throw new BadRequestException(
        await this.i18n.translate("app.confirmation_token.invalid")
      );
    }

    const confirmTokenExpireTime = dayjs(user.confirmation_sent_at).add(this.configService.get('authentication.confirmationIn'), 'h')

    if (dayjs().isAfter(confirmTokenExpireTime)) {
      await this.sendTestingConfirmationEmail(user)
      throw new BadRequestException(
        await this.i18n.translate('app.confirmation_token_expired'),
      );
    }

    user.confirmed_at = new Date()
    user.confirmation_token = null
    user.confirmation_sent_at = null

    await this.testingRepo.save(user)

    return this._generateTokenResponse({
      userId: user.id,
      scope: ScopeEnum.testings,
      resourceOwner: "Testing",
    });

  }

  async resetTestingPassword(email: string) {
    const user = await this.testingRepo.findOneBy({ email })

    if(user){
      user.reset_password_token = crypto.randomUUID();
      user.reset_password_sent_at = new Date();
      await this.testingRepo.save(user)

      const result = await this.mailService.sendMail({ 
        to: user.email,
        subject: 'Change my password',
        template: 'reset-password',
        context: {
          url: this.configService.get('authentication.resetPasswordUrl'),       
          email: user.email, 
          token: user.reset_password_token
        }
      })    
    }
    return { success: true }
  }

  async verifyTestingResetPassword(data: VerifyResetPasswordDTO) {
    const { reset_token, password } = data

    const user = await this.testingRepo.findOneBy({ reset_password_token: reset_token })

    if (!user) {
      throw new BadRequestException(
        await this.i18n.translate("app.reset_token.invalid")
      );
    }

    const resetTokenExpireTime = dayjs(user.reset_password_sent_at).add(this.configService.get('authentication.resetPasswordIn'), 'h')

    if (dayjs().isAfter(resetTokenExpireTime)) {
      throw new BadRequestException(
        await this.i18n.translate("app.reset_token.expired")
      );
    }

    user.reset_password_token = ''
    user.reset_password_sent_at = null
    user.password = password
    await this.testingRepo.save(user)

    return { success: true }
  }
  

  async revokeToken(token: string, tokenTypeHint ? : string) {
    try {
      this.accessTokenRepo.delete({
        ...(tokenTypeHint === 'refresh_token' ?
          {
            refresh_token: token
          } :
          {
            token: token
          }),
      });
      return {
        success: true
      };
    } catch (e) {
      throw new BadRequestException(
        await this.i18n.translate("app.token.invalid")
      );
    }
  }

  private async _generateAccessToken(
    payload: Pick <JwtDto, 'userId' | 'scope' | 'resourceOwner'> ,
  ): Promise <string> {
    return await this.jwtService.signAsync(payload, {
      expiresIn: this.jwtConfig.expiresIn,
    });
  }

  private async _generateTokenResponse(
    payload: Pick <JwtDto, 'userId' | 'scope' | 'resourceOwner'> ,
  ): Promise <TokenResponseDTO> {
    const accessTokenParams = {
      token: await this._generateAccessToken(payload),
      refresh_token: await this.jwtService.signAsync(payload, {
        secret: this.jwtConfig.refreshSecret,
        expiresIn: this.jwtConfig.refreshIn,
      }),
      resource_owner_type: payload.resourceOwner,

      resource_owner_id: payload.userId,
      expires_in: ms(this.jwtConfig.expiresIn),
    };
    const accessToken = await this.accessTokenRepo.save(accessTokenParams);

    return {
      access_token: accessToken.token,
      refresh_token: accessToken.refresh_token,
      resource_owner: accessToken.resource_owner_type,
      resource_id: accessToken.resource_owner_id,
      expires_in: accessToken.expires_in / 1000,
      token_type: 'Bearer',
      scope: payload.scope,
      create_at: accessToken.created_at,
      refresh_token_expires_in: ms(this.jwtConfig.refreshIn) / 1000,

    };
  }
}
