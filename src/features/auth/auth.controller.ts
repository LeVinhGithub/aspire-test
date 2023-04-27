import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { OAuthService } from './auth.service';
import * as SignUpDto from './dtos/sign-up.dto';
import { GrantTokenDto } from './dtos/grant-token.dto';
import { RevokeTokenDto } from './dtos/revoke-token.dto';
import { TokenResponseDTO } from './dtos/token-response.dto';
import { ResetPasswordDTO } from './dtos/reset-password.dto';
import { VerifyResetPasswordDTO } from './dtos/verify-reset-password.dto';
import { VerifyConfirmationDTO } from './dtos/verify-conformation.dto';
import { SuccessResponseDTO } from './dtos/success-response.dto';
import { UnlockDTO } from './dtos/unlock.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Auth')
export class OAuthController {
  constructor(private readonly oauthService: OAuthService) {}

      
  @Post('api/applicants_registrations')
  @HttpCode(HttpStatus.OK)
    

  async signUpApplicant(@Body() body: SignUpDto.AuthRegistrationApplicantRequestDto): Promise<{id: number}> {
    return this.oauthService.signUpApplicant(body);
  }
    

  
    

    @Post('api/applicants_verify_confirmation_token')
  @HttpCode(HttpStatus.OK)
  async verifyApplicantConfirmationEmail(@Body() body: VerifyConfirmationDTO): Promise<TokenResponseDTO> {
    return this.oauthService.verifyApplicantConfirmationEmail(body.confirmation_token);
  }
   

    @Post('api/applicants_reset_password_requests')
  @HttpCode(HttpStatus.OK)
  async resetApplicantPassword(@Body() body: ResetPasswordDTO): Promise<SuccessResponseDTO> {
    return this.oauthService.resetApplicantPassword(body.email);
  }
   

    @Post('api/applicants_verify_reset_password_requests')
  @HttpCode(HttpStatus.OK)
  async verifyApplicantResetPassword(@Body() body: VerifyResetPasswordDTO): Promise<SuccessResponseDTO> {
    return this.oauthService.verifyApplicantResetPassword(body);
  }
   

    @Post('api/applicants_unlock')
  @HttpCode(HttpStatus.OK)
  async unlockApplicant(@Body() body: UnlockDTO): Promise<SuccessResponseDTO> {
    return this.oauthService.unlockApplicantByToken(body.unlock_token);
  }
   
  
      
  @Post('api/company_users_registrations')
  @HttpCode(HttpStatus.OK)
    

  async signUpCompanyUser(@Body() body: SignUpDto.AuthRegistrationCompanyUserRequestDto): Promise<{id: number}> {
    return this.oauthService.signUpCompanyUser(body);
  }
    

  
    

    @Post('api/company_users_verify_confirmation_token')
  @HttpCode(HttpStatus.OK)
  async verifyCompanyUserConfirmationEmail(@Body() body: VerifyConfirmationDTO): Promise<TokenResponseDTO> {
    return this.oauthService.verifyCompanyUserConfirmationEmail(body.confirmation_token);
  }
   

    @Post('api/company_users_reset_password_requests')
  @HttpCode(HttpStatus.OK)
  async resetCompanyUserPassword(@Body() body: ResetPasswordDTO): Promise<SuccessResponseDTO> {
    return this.oauthService.resetCompanyUserPassword(body.email);
  }
   

    @Post('api/company_users_verify_reset_password_requests')
  @HttpCode(HttpStatus.OK)
  async verifyCompanyUserResetPassword(@Body() body: VerifyResetPasswordDTO): Promise<SuccessResponseDTO> {
    return this.oauthService.verifyCompanyUserResetPassword(body);
  }
   

    @Post('api/company_users_unlock')
  @HttpCode(HttpStatus.OK)
  async unlockCompanyUser(@Body() body: UnlockDTO): Promise<SuccessResponseDTO> {
    return this.oauthService.unlockCompanyUserByToken(body.unlock_token);
  }
   
  
  
    @Post("api/send_otp_codes")
  @HttpCode(HttpStatus.OK)
  async sendOtpCodes(
    @Body() body: { phone_number: string }
  ): Promise<SuccessResponseDTO> {
    return this.oauthService.sendOtp(body.phone_number, "login");
  }
   



  @Post('oauth/token')
  @HttpCode(HttpStatus.OK)
  async grantToken(@Body() body: GrantTokenDto): Promise<TokenResponseDTO> {
    return this.oauthService.login(body);
  }

  @Post('oauth/revoke')
  @HttpCode(HttpStatus.OK)
  async revoke(@Body() body: RevokeTokenDto): Promise<SuccessResponseDTO> {
    return this.oauthService.revokeToken(body.token, body.token_type_hint);
  }
}
