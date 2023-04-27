import { StringField } from 'decorators/field.decorator';

export class VerifyOtpDto {
  @StringField()
  phone_number: string;

  @StringField()
  otp: string;
}
