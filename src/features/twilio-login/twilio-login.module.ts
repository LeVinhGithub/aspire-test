import { Module } from "@nestjs/common";
import { TwilioModule } from "nestjs-twilio";

import { ConfigService } from "@nestjs/config";
import { TwilioLoginService } from "./twilio-login.service";

@Module({
  imports: [
    TwilioModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        accountSid: configService.get("twilio.accountSid"),
        authToken: configService.get("twilio.authToken"),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [TwilioLoginService],
  exports: [TwilioLoginService],
})
export class TwilioLoginModule {}

