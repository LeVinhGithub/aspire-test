
import { ObjectField, StringField, NumberField, EnumField } from "decorators/field.decorator";
import { RoleEnum as CompanyUserRoleEnum } from "entities/company_users";

export class AuthRegistrationCompanyUserRequest {
  
  @StringField({"maxLength":255,"minLength":0,"password":true} )
  password: string;
  
  @StringField({"maxLength":255,"minLength":0,"equalTo":"password"} )
  password_confirmation: string;
  
  @NumberField({"int":true} )
  company_id: number;
  
  @StringField({"maxLength":255,"minLength":0} )
  full_name: string;
  
  @StringField({"email":true,"maxLength":255,"minLength":0} )
  email: string;
  
  @EnumField(() => CompanyUserRoleEnum )
  role: CompanyUserRoleEnum;
  
  @StringField({"maxLength":255,"minLength":0} )
  phone_number: string;
  
}

export class AuthRegistrationCompanyUserRequestDto {
  
  @ObjectField(AuthRegistrationCompanyUserRequest )
  company_user: AuthRegistrationCompanyUserRequest;
  
}

export class AuthRegistrationApplicantRequest {
  
  @StringField({"maxLength":255,"minLength":0,"password":true} )
  password: string;
  
  @StringField({"maxLength":255,"minLength":0,"equalTo":"password"} )
  password_confirmation: string;
  
  @NumberField( )
  income_range_id: number;
  
  @NumberField( )
  management_experience_id: number;
  
  @StringField({"email":true,"maxLength":255,"minLength":0} )
  email: string;
  
}

export class AuthRegistrationApplicantRequestDto {
  
  @ObjectField(AuthRegistrationApplicantRequest )
  applicant: AuthRegistrationApplicantRequest;
  
}

