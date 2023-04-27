
import { NumberField, StringField, EnumField, ObjectField } from "src/decorators/field.decorator";

  enum DeleteCompanyUserRoleEnum {}; 
export class DeleteCompanyUserParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class DeleteCompanyUserRequest {
  @StringField({})
  full_name: string;
@NumberField({})
  company_id: number;
@StringField({})
  email: string;
@EnumField(() => DeleteCompanyUserRoleEnum)
  role: DeleteCompanyUserRoleEnum;
@StringField({})
  phone_number: string;

}
export class DeleteCompanyUserRequestDTO {
  @ObjectField(DeleteCompanyUserRequest)
  company_users: DeleteCompanyUserRequest;

}

export class DeleteCompanyUserResponseDTO {
  }
