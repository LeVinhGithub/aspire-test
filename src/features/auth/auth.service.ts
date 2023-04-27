import {
BadRequestException,
Injectable,
  ForbiddenException,
  CACHE_MANAGER,
  Inject,
} from '@nestjs/common';
  import * as bcrypt from 'bcryptjs';
  import * as crypto from 'crypto'
import * as dayjs from 'dayjs'
  import { Cache } from "cache-manager";
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { I18nContext } from "nestjs-i18n";
import { JWTConfig } from 'src/configs';
import { JwtDto } from './dtos/jwt.dto';
import * as SignUpDto from './dtos/sign-up.dto';
import { GrantTokenDto } from './dtos/grant-token.dto';
import { ScopeEnum } from './dtos/scope.dto'
  import { Applicant } from 'entities/applicants';
  import { CompanyUser } from 'entities/company_users';
import { AccessToken } from 'entities/access_tokens';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as ms from 'ms';
  import { MailService } from 'src/shared/mail/mail.service';
  import { VerifyResetPasswordDTO } from './dtos/verify-reset-password.dto';
import { TokenResponseDTO } from './dtos/token-response.dto';
import { OAUTH_GRANT_TYPE } from 'src/constants';
  import { TwilioLoginService } from "features/twilio-login/twilio-login.service";


@Injectable()
export class OAuthService {
  private jwtConfig: JWTConfig;

  constructor(
      @Inject(CACHE_MANAGER) private cacheService: Cache,
        @InjectRepository(Applicant) private applicantRepo: Repository<Applicant>,
      @InjectRepository(CompanyUser) private companyUserRepo: Repository<CompanyUser>,
    @InjectRepository(AccessToken)
  private accessTokenRepo: Repository<AccessToken>,
  private readonly configService: ConfigService,
  private readonly jwtService: JwtService,
      private readonly mailService: MailService,
        private readonly twilioService: TwilioLoginService,
      ) {
    this.jwtConfig = this.configService.get<JWTConfig>('jwt');
  }

  async login(grantTokenDto: GrantTokenDto) {
    switch(grantTokenDto.scope) {
        case "applicants":
    const actionApplicantByGrantTypes = {
    [OAUTH_GRANT_TYPE.PASSWORD]: () => {
          if (grantTokenDto.phone_number && grantTokenDto.otp_code) {
        return this.loginSmsApplicant(
          grantTokenDto.phone_number,
          grantTokenDto.otp_code,
          grantTokenDto.scope
        );
      } 
              return this.loginApplicant(grantTokenDto)
        },
    [OAUTH_GRANT_TYPE.REFRESH_TOKEN]: () =>
      this.refreshToken(grantTokenDto.refresh_token),
    };
    return await actionApplicantByGrantTypes[grantTokenDto.grant_type]();
      case "company_users":
    const actionCompanyUserByGrantTypes = {
    [OAUTH_GRANT_TYPE.PASSWORD]: () => {
          if (grantTokenDto.phone_number && grantTokenDto.otp_code) {
        return this.loginSmsCompanyUser(
          grantTokenDto.phone_number,
          grantTokenDto.otp_code,
          grantTokenDto.scope
        );
      } 
              return this.loginCompanyUser(grantTokenDto)
        },
    [OAUTH_GRANT_TYPE.REFRESH_TOKEN]: () =>
      this.refreshToken(grantTokenDto.refresh_token),
    };
    return await actionCompanyUserByGrantTypes[grantTokenDto.grant_type]();
      default:
      throw new BadRequestException(`scope ${grantTokenDto.scope} is not supported.`);
    }
  }

            async loginSmsApplicant(
        phoneNumber: string,
        otpCode: string,
        scope: ScopeEnum
      ): Promise<TokenResponseDTO> {
      if (await this.twilioService.verifyPhoneNumber(phoneNumber, otpCode)) {
        const user = await this.applicantRepo.findOneBy({ phone_number: phoneNumber });
        if (user) {
          return this._generateTokenResponse({
            userId: user.id,
            scope: scope,
            resourceOwner: "Applicant",
          });
        }
      }
      throw new BadRequestException(await I18nContext.current().translate("app.users.wrong_credentials"));
    }
    
        

            async loginSmsCompanyUser(
        phoneNumber: string,
        otpCode: string,
        scope: ScopeEnum
      ): Promise<TokenResponseDTO> {
      if (await this.twilioService.verifyPhoneNumber(phoneNumber, otpCode)) {
        const user = await this.companyUserRepo.findOneBy({ phone_number: phoneNumber });
        if (user) {
          return this._generateTokenResponse({
            userId: user.id,
            scope: scope,
            resourceOwner: "CompanyUser",
          });
        }
      }
      throw new BadRequestException(await I18nContext.current().translate("app.users.wrong_credentials"));
    }
    
        

  
  async sendOtp(phoneNumber: string, action: "login") {
    const keyCount = `phoneNumber_${phoneNumber}_${action}_count`;
    const sentCount = (await this.cacheService.get(keyCount)) || 0;

    const keySent = `phoneNumber_${phoneNumber}_${action}_sentAt`;
    const sentAt = (await this.cacheService.get(keySent)) as number;

    if (sentCount > 5) {
      if (dayjs() < dayjs(sentAt).add(30, "m")) {
        throw new BadRequestException(
        await I18nContext.current().translate("app.otp.block_in_30_minutes")
      );
      } else {
        await this.cacheService.set(keyCount, 0, { ttl: 0 });
      }
  }

  if (
  sentAt &&
  dayjs() < dayjs(await this.cacheService.get(keySent)).add(30, "s")
  ) {
    throw new BadRequestException(
      await I18nContext.current().translate("app.otp.send_too_frequently")
    );
    } else {
      await this.cacheService.set(keySent, new Date().valueOf(), { ttl: 0 });
      await this.cacheService.set(keyCount, Number(sentCount) + 1, { ttl: 0 });

      this.twilioService.sendOtp(phoneNumber);
      return { success: true };
    }
  }

async refreshToken(refreshToken: string) {
  if (
    !(await this.accessTokenRepo.findOneBy({
      refresh_token: refreshToken
    }))
  ) {
    throw new BadRequestException(
      await I18nContext.current().translate("app.refresh_token.invalid")
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
      await I18nContext.current().translate("app.refresh_token.invalid")
    );
  }
}

    isAuthenticateApplicant(user: Applicant, password: string) {
    return bcrypt.compareSync(password, user?.encrypted_password || '');
  }

  async incrementFailedAttemptsApplicant(user: Applicant) {
    user.failed_attempts += 1;
    await this.applicantRepo.save(user, { reload: true });
  }

  async lockAccessApplicant(user: Applicant) {
    user.locked_at = dayjs().toDate();
    user.unlock_token = crypto.randomUUID();
    if (['email', 'both'].includes(
      this.configService.get('authentication.unlockStrategy')
    )) {
      await this.sendUnlockInstructionsApplicant(user);
    }
    await this.applicantRepo.save(user, { reload: true });
  }

  async sendUnlockInstructionsApplicant(user: Applicant) {
    return this.mailService.sendMail({
      to: user.email,
      subject: await I18nContext.current().translate(
        "mail.unlock_email.unlock_email"
      ),
      template: "unlock-email-instructions",
      context: {
        url: this.configService.get("authentication.unlockAccessUrl"),
        email: user.email,
        token: user.unlock_token,
        header: await I18nContext.current().translate(
          "mail.unlock_email.header",
          { args: { email: user.email } }
        ),
        body: await I18nContext.current().translate("mail.unlock_email.body"),
        link: await I18nContext.current().translate("mail.unlock_email.link"),
      },
    });
  }

  async unlockApplicantByToken(unlockToken: string) {
    const user = await this.applicantRepo.findOneBy({
      unlock_token: unlockToken,
    });
    if (!user) {
      throw new BadRequestException(
        await I18nContext.current().translate("app.unlock_token.invalid")
      );
    }

    await this.unlockAccessApplicant(user);
    return { success: true };
  }

  async unlockAccessApplicant(user: Applicant) {
    user.locked_at = null;
    user.failed_attempts = 0;
    user.unlock_token = null;
    await this.applicantRepo.save(user, { reload: true });
  }

  async resetFailedAttemptsApplicant(user: Applicant) {
    if (user.failed_attempts !== 0) {
      user.failed_attempts = 0;
      await this.applicantRepo.save(user, { reload: true });
    }
  }

  protected isAttemptsExceededApplicant(user: Applicant) {
    return (
      user.failed_attempts >=
      this.configService.get('authentication.maximumAttempts')
    );
  }

  protected isLockExpiredApplicant(user: Applicant) {
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

  protected isAccessLockedApplicant(user: Applicant) {
    return user.locked_at && !this.isLockExpiredApplicant(user);
  }

  async loginApplicant(grantTokenDto: GrantTokenDto) {
    const user = await this.applicantRepo.findOneBy({ email: grantTokenDto.email });
    if (!user) {
      throw new ForbiddenException(
        await I18nContext.current().translate('app.users.wrong_credentials'),
      );
    }

    if (this.configService.get('authentication.sendConfirmationEmail') && !user.confirmed_at) {
      throw new ForbiddenException(
        await I18nContext.current().translate('app.users.unconfirmed'),
      );
    }

          if (!user.confirmed_at) {
        throw new ForbiddenException(
        await I18nContext.current().translate('app.users.unconfirmed'),
      );
      }
    
    if (this.isLockExpiredApplicant(user)) {
      await this.unlockAccessApplicant(user);
    }

    if (this.isAccessLockedApplicant(user)) {
      throw new ForbiddenException(
        await I18nContext.current().translate('app.users.locked'),
      );
    }
    if (!this.isAuthenticateApplicant(
      user,
      grantTokenDto.password,
    )) {
      await this.incrementFailedAttemptsApplicant(user);
      if (this.isAttemptsExceededApplicant(user)) {
        await this.lockAccessApplicant(user);
      }
      throw new ForbiddenException(
        await I18nContext.current().translate('app.users.wrong_credentials'),
      );
    }

    this.resetFailedAttemptsApplicant(user);
    return this._generateTokenResponse({
      userId: user.id,
      scope: grantTokenDto.scope,
      resourceOwner: "Applicant",
    });
  }


      
    async signUpApplicant(signUpDto: SignUpDto.AuthRegistrationApplicantRequestDto) {
    try{
      const params = {
                password: signUpDto.applicant.password,
                password_confirmation: signUpDto.applicant.password_confirmation,
                income_range_id: signUpDto.applicant.income_range_id,
                management_experience_id: signUpDto.applicant.management_experience_id,
                email: signUpDto.applicant.email,
                    };
      const user = this.applicantRepo.create(params);

      const result = await this.applicantRepo.save(user);

      if (this.configService.get('authentication.sendConfirmationEmail')) {
        user.confirmation_token = crypto.randomUUID();
        user.confirmation_sent_at = new Date()
        await this.sendApplicantConfirmationEmail(user)
        await this.applicantRepo.save(user)
      }

      return { id: result.id };
    } catch(e) {
      if (e.detail.includes("already exists")) {
        throw new BadRequestException(
          await I18nContext.current().translate("app.users.already_exists")
        );
      }
      throw new BadRequestException(
        await I18nContext.current().translate("app.something_went_wrong")
      );
    }
  }

  async sendApplicantConfirmationEmail(user: Applicant) {    
    return this.mailService.sendMail({
      to: user.email,
      subject: await I18nContext.current().translate(
        "mail.email_confirmation.confirmation_instructions"
      ),
      template: "email-confirmation",
      context: {
        url: this.configService.get("authentication.confirmationUrl"),
        email: user.email,
        token: user.confirmation_token,
        welcome: await I18nContext.current().translate(
          "mail.email_confirmation.welcome",
          { args: { email: user.email } }
        ),
        body: await I18nContext.current().translate(
          "mail.email_confirmation.body"
        ),
        link: await I18nContext.current().translate(
          "mail.email_confirmation.link"
        ),
      },
    });
  }



  async verifyApplicantConfirmationEmail(token: string) {
    const user = await this.applicantRepo.findOneBy({ confirmation_token: token })

    if (!user) {
      throw new BadRequestException(
        await I18nContext.current().translate("app.confirmation_token.invalid")
      );
    }

    const confirmTokenExpireTime = dayjs(user.confirmation_sent_at).add(this.configService.get('authentication.confirmationIn'), 'h')

    if (dayjs().isAfter(confirmTokenExpireTime)) {
      await this.sendApplicantConfirmationEmail(user)
      throw new BadRequestException(
        await I18nContext.current().translate('app.confirmation_token_expired'),
      );
    }

    user.confirmed_at = new Date()
    user.confirmation_token = null
    user.confirmation_sent_at = null

    await this.applicantRepo.save(user)

    return this._generateTokenResponse({
      userId: user.id,
      scope: ScopeEnum.applicants,
      resourceOwner: "Applicant",
    });

  }

  async resetApplicantPassword(email: string) {
    const user = await this.applicantRepo.findOneBy({ email })

    if(user){
      user.reset_password_token = crypto.randomUUID();
      user.reset_password_sent_at = new Date();
      await this.applicantRepo.save(user)

      const result = await this.mailService.sendMail({ 
        to: user.email,
        subject: await I18nContext.current().translate(
          "mail.reset_password.change_my_password"
        ),
        template: "reset-password",
        context: {
          url: this.configService.get("authentication.resetPasswordUrl"),
          email: user.email,
          token: user.reset_password_token,
          header: await I18nContext.current().translate(
            "mail.reset_password.header",
            { args: { email: user.email } }
          ),
          body: await I18nContext.current().translate(
            "mail.reset_password.body"
          ),
          link: await I18nContext.current().translate(
            "mail.reset_password.link"
          ),
          footer: await I18nContext.current().translate(
            "mail.reset_password.footer"
          ),
        },
      })    
    }
    return { success: true }
  }

  async verifyApplicantResetPassword(data: VerifyResetPasswordDTO) {
    const { reset_token, password } = data

    const user = await this.applicantRepo.findOneBy({ reset_password_token: reset_token })

    if (!user) {
      throw new BadRequestException(
        await I18nContext.current().translate("app.reset_token.invalid")
      );
    }

    const resetTokenExpireTime = dayjs(user.reset_password_sent_at).add(this.configService.get('authentication.resetPasswordIn'), 'h')

    if (dayjs().isAfter(resetTokenExpireTime)) {
      throw new BadRequestException(
        await I18nContext.current().translate("app.reset_token.expired")
      );
    }

    user.reset_password_token = ''
    user.reset_password_sent_at = null
    user.password = password
    await this.applicantRepo.save(user)

    return { success: true }
  }
    isAuthenticateCompanyUser(user: CompanyUser, password: string) {
    return bcrypt.compareSync(password, user?.encrypted_password || '');
  }

  async incrementFailedAttemptsCompanyUser(user: CompanyUser) {
    user.failed_attempts += 1;
    await this.companyUserRepo.save(user, { reload: true });
  }

  async lockAccessCompanyUser(user: CompanyUser) {
    user.locked_at = dayjs().toDate();
    user.unlock_token = crypto.randomUUID();
    if (['email', 'both'].includes(
      this.configService.get('authentication.unlockStrategy')
    )) {
      await this.sendUnlockInstructionsCompanyUser(user);
    }
    await this.companyUserRepo.save(user, { reload: true });
  }

  async sendUnlockInstructionsCompanyUser(user: CompanyUser) {
    return this.mailService.sendMail({
      to: user.email,
      subject: await I18nContext.current().translate(
        "mail.unlock_email.unlock_email"
      ),
      template: "unlock-email-instructions",
      context: {
        url: this.configService.get("authentication.unlockAccessUrl"),
        email: user.email,
        token: user.unlock_token,
        header: await I18nContext.current().translate(
          "mail.unlock_email.header",
          { args: { email: user.email } }
        ),
        body: await I18nContext.current().translate("mail.unlock_email.body"),
        link: await I18nContext.current().translate("mail.unlock_email.link"),
      },
    });
  }

  async unlockCompanyUserByToken(unlockToken: string) {
    const user = await this.companyUserRepo.findOneBy({
      unlock_token: unlockToken,
    });
    if (!user) {
      throw new BadRequestException(
        await I18nContext.current().translate("app.unlock_token.invalid")
      );
    }

    await this.unlockAccessCompanyUser(user);
    return { success: true };
  }

  async unlockAccessCompanyUser(user: CompanyUser) {
    user.locked_at = null;
    user.failed_attempts = 0;
    user.unlock_token = null;
    await this.companyUserRepo.save(user, { reload: true });
  }

  async resetFailedAttemptsCompanyUser(user: CompanyUser) {
    if (user.failed_attempts !== 0) {
      user.failed_attempts = 0;
      await this.companyUserRepo.save(user, { reload: true });
    }
  }

  protected isAttemptsExceededCompanyUser(user: CompanyUser) {
    return (
      user.failed_attempts >=
      this.configService.get('authentication.maximumAttempts')
    );
  }

  protected isLockExpiredCompanyUser(user: CompanyUser) {
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

  protected isAccessLockedCompanyUser(user: CompanyUser) {
    return user.locked_at && !this.isLockExpiredCompanyUser(user);
  }

  async loginCompanyUser(grantTokenDto: GrantTokenDto) {
    const user = await this.companyUserRepo.findOneBy({ email: grantTokenDto.email });
    if (!user) {
      throw new ForbiddenException(
        await I18nContext.current().translate('app.users.wrong_credentials'),
      );
    }

    if (this.configService.get('authentication.sendConfirmationEmail') && !user.confirmed_at) {
      throw new ForbiddenException(
        await I18nContext.current().translate('app.users.unconfirmed'),
      );
    }

          if (!user.confirmed_at) {
        throw new ForbiddenException(
        await I18nContext.current().translate('app.users.unconfirmed'),
      );
      }
    
    if (this.isLockExpiredCompanyUser(user)) {
      await this.unlockAccessCompanyUser(user);
    }

    if (this.isAccessLockedCompanyUser(user)) {
      throw new ForbiddenException(
        await I18nContext.current().translate('app.users.locked'),
      );
    }
    if (!this.isAuthenticateCompanyUser(
      user,
      grantTokenDto.password,
    )) {
      await this.incrementFailedAttemptsCompanyUser(user);
      if (this.isAttemptsExceededCompanyUser(user)) {
        await this.lockAccessCompanyUser(user);
      }
      throw new ForbiddenException(
        await I18nContext.current().translate('app.users.wrong_credentials'),
      );
    }

    this.resetFailedAttemptsCompanyUser(user);
    return this._generateTokenResponse({
      userId: user.id,
      scope: grantTokenDto.scope,
      resourceOwner: "CompanyUser",
    });
  }


      
    async signUpCompanyUser(signUpDto: SignUpDto.AuthRegistrationCompanyUserRequestDto) {
    try{
      const params = {
                password: signUpDto.company_user.password,
                password_confirmation: signUpDto.company_user.password_confirmation,
                company_id: signUpDto.company_user.company_id,
                full_name: signUpDto.company_user.full_name,
                email: signUpDto.company_user.email,
                role: signUpDto.company_user.role,
                phone_number: signUpDto.company_user.phone_number,
                    };
      const user = this.companyUserRepo.create(params);

      const result = await this.companyUserRepo.save(user);

      if (this.configService.get('authentication.sendConfirmationEmail')) {
        user.confirmation_token = crypto.randomUUID();
        user.confirmation_sent_at = new Date()
        await this.sendCompanyUserConfirmationEmail(user)
        await this.companyUserRepo.save(user)
      }

      return { id: result.id };
    } catch(e) {
      if (e.detail.includes("already exists")) {
        throw new BadRequestException(
          await I18nContext.current().translate("app.users.already_exists")
        );
      }
      throw new BadRequestException(
        await I18nContext.current().translate("app.something_went_wrong")
      );
    }
  }

  async sendCompanyUserConfirmationEmail(user: CompanyUser) {    
    return this.mailService.sendMail({
      to: user.email,
      subject: await I18nContext.current().translate(
        "mail.email_confirmation.confirmation_instructions"
      ),
      template: "email-confirmation",
      context: {
        url: this.configService.get("authentication.confirmationUrl"),
        email: user.email,
        token: user.confirmation_token,
        welcome: await I18nContext.current().translate(
          "mail.email_confirmation.welcome",
          { args: { email: user.email } }
        ),
        body: await I18nContext.current().translate(
          "mail.email_confirmation.body"
        ),
        link: await I18nContext.current().translate(
          "mail.email_confirmation.link"
        ),
      },
    });
  }



  async verifyCompanyUserConfirmationEmail(token: string) {
    const user = await this.companyUserRepo.findOneBy({ confirmation_token: token })

    if (!user) {
      throw new BadRequestException(
        await I18nContext.current().translate("app.confirmation_token.invalid")
      );
    }

    const confirmTokenExpireTime = dayjs(user.confirmation_sent_at).add(this.configService.get('authentication.confirmationIn'), 'h')

    if (dayjs().isAfter(confirmTokenExpireTime)) {
      await this.sendCompanyUserConfirmationEmail(user)
      throw new BadRequestException(
        await I18nContext.current().translate('app.confirmation_token_expired'),
      );
    }

    user.confirmed_at = new Date()
    user.confirmation_token = null
    user.confirmation_sent_at = null

    await this.companyUserRepo.save(user)

    return this._generateTokenResponse({
      userId: user.id,
      scope: ScopeEnum.company_users,
      resourceOwner: "CompanyUser",
    });

  }

  async resetCompanyUserPassword(email: string) {
    const user = await this.companyUserRepo.findOneBy({ email })

    if(user){
      user.reset_password_token = crypto.randomUUID();
      user.reset_password_sent_at = new Date();
      await this.companyUserRepo.save(user)

      const result = await this.mailService.sendMail({ 
        to: user.email,
        subject: await I18nContext.current().translate(
          "mail.reset_password.change_my_password"
        ),
        template: "reset-password",
        context: {
          url: this.configService.get("authentication.resetPasswordUrl"),
          email: user.email,
          token: user.reset_password_token,
          header: await I18nContext.current().translate(
            "mail.reset_password.header",
            { args: { email: user.email } }
          ),
          body: await I18nContext.current().translate(
            "mail.reset_password.body"
          ),
          link: await I18nContext.current().translate(
            "mail.reset_password.link"
          ),
          footer: await I18nContext.current().translate(
            "mail.reset_password.footer"
          ),
        },
      })    
    }
    return { success: true }
  }

  async verifyCompanyUserResetPassword(data: VerifyResetPasswordDTO) {
    const { reset_token, password } = data

    const user = await this.companyUserRepo.findOneBy({ reset_password_token: reset_token })

    if (!user) {
      throw new BadRequestException(
        await I18nContext.current().translate("app.reset_token.invalid")
      );
    }

    const resetTokenExpireTime = dayjs(user.reset_password_sent_at).add(this.configService.get('authentication.resetPasswordIn'), 'h')

    if (dayjs().isAfter(resetTokenExpireTime)) {
      throw new BadRequestException(
        await I18nContext.current().translate("app.reset_token.expired")
      );
    }

    user.reset_password_token = ''
    user.reset_password_sent_at = null
    user.password = password
    await this.companyUserRepo.save(user)

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
        await I18nContext.current().translate("app.token.invalid")
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
