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

      
  @Post('api/testings_registrations')
  @HttpCode(HttpStatus.OK)
    

  async signUpTesting(@Body() body: SignUpDto.AuthRegistrationTestingRequestDto): Promise<{id: number}> {
    return this.oauthService.signUpTesting(body);
  }
    

  
    

    @Post('api/testings_verify_confirmation_token')
  @HttpCode(HttpStatus.OK)
  async verifyTestingConfirmationEmail(@Body() body: VerifyConfirmationDTO): Promise<TokenResponseDTO> {
    return this.oauthService.verifyTestingConfirmationEmail(body.confirmation_token);
  }
   

    @Post('api/testings_reset_password_requests')
  @HttpCode(HttpStatus.OK)
  async resetTestingPassword(@Body() body: ResetPasswordDTO): Promise<SuccessResponseDTO> {
    return this.oauthService.resetTestingPassword(body.email);
  }
   

    @Post('api/testings_verify_reset_password_requests')
  @HttpCode(HttpStatus.OK)
  async verifyTestingResetPassword(@Body() body: VerifyResetPasswordDTO): Promise<SuccessResponseDTO> {
    return this.oauthService.verifyTestingResetPassword(body);
  }
   

    @Post('api/testings_unlock')
  @HttpCode(HttpStatus.OK)
  async unlockTesting(@Body() body: UnlockDTO): Promise<SuccessResponseDTO> {
    return this.oauthService.unlockTestingByToken(body.unlock_token);
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
