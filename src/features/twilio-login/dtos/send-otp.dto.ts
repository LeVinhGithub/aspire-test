import { StringField } from 'decorators/field.decorator';

export class SendOtpDto {
  @StringField()
  phone_number: string;
}
