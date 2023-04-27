import { Injectable } from "@nestjs/common";
import { randomInt } from "crypto";
import { TwilioService } from "nestjs-twilio";
import { ConfigService } from "@nestjs/config";
import { VerificationStatus } from "./twilio-login.constants";

@Injectable()
export class TwilioLoginService {
  private serviceSid: string;

  constructor(
    private readonly twilioService: TwilioService,
    private readonly configService: ConfigService
  ) {
    this.serviceSid = this.configService.get("twilio.verificationServiceSid");
  }

  async sendOtp(phoneNumber: string) {
    await this.twilioService.client.verify
      .services(this.serviceSid)
      .verifications.create({
        to: `${phoneNumber}`,
        channel: "sms",
        customCode: this.generateOTP(4),
      });
  }

  async verifyPhoneNumber(phoneNumber: string, verificationCode: string) {
    const response = await this.twilioService.client.verify
      .services(this.serviceSid)
      .verificationChecks.create({
        to: `${phoneNumber}`,
        code: verificationCode,
      });

    return response.status === VerificationStatus.APPROVED;
  }

  generateOTP(length = 4) {
    let OTP = "";
    for (let i = 0; i < length; i++) {
      OTP += `${randomInt(0, 9)}`;
    }
    return OTP;
  }
}

