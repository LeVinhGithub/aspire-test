
import { CompanyUser, RoleEnum as CompanyUserRoleEnum } from "entities/company_users";
import { NumberField, NumberFieldOptional, StringFieldOptional, EnumFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";
import { StorageFile } from "entities/storage_files";

  enum ShowCompanyUserRoleEnum {}; 
export class ShowCompanyUserParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class ShowCompanyUserRequest {
  @NumberFieldOptional({})
  company_id?: number;
@StringFieldOptional({})
  email?: string;
@EnumFieldOptional(() => ShowCompanyUserRoleEnum)
  role?: ShowCompanyUserRoleEnum;
@StringFieldOptional({})
  phone_number?: string;

}
export class ShowCompanyUserRequestDTO {
  @ObjectFieldOptional(ShowCompanyUserRequest)
  company_users?: ShowCompanyUserRequest;

}
export class ShowCompanyUserResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_id: number;
full_name: string;
position: string;
photo: StorageFile;
email: string;
role: `${CompanyUserRoleEnum}`;
phone_number: string;

}

export class ShowCompanyUserResponseDTO {
  
  company_user: ShowCompanyUserResponse
  
  
  constructor(
    company_user: CompanyUser,
      ) {
    this.company_user = { ...company_user, id: company_user?.id,
created_at: company_user?.created_at,
updated_at: company_user?.updated_at,
company_id: company_user?.company_id,
full_name: company_user?.full_name,
position: company_user?.position,
photo: company_user?.photo,
email: company_user?.email,
role: company_user?.role,
phone_number: company_user?.phone_number };
      }
  }
