
import { CompanyUser, RoleEnum as CompanyUserRoleEnum } from "entities/company_users";
import { NumberField, NumberFieldOptional, StringFieldOptional, FileFieldOptional, EnumFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";
import { FileSystemStoredFile } from "nestjs-form-data";
import { StorageFile } from "entities/storage_files";

export class UpdateCompanyUserParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class UpdateCompanyUserRequest {
  @NumberFieldOptional({ int: true})
  company_id?: number;
@StringFieldOptional({ maxLength: 255, minLength: 0})
  full_name?: string;
@StringFieldOptional({ maxLength: 255, minLength: 0})
  position?: string;
@FileFieldOptional({ fileSize: 10, fileTypes: ["image"]})
  photo?: FileSystemStoredFile;
@StringFieldOptional({ email: true, maxLength: 255, minLength: 0})
  email?: string;
@EnumFieldOptional(() => CompanyUserRoleEnum)
  role?: CompanyUserRoleEnum;
@StringFieldOptional({ maxLength: 255, minLength: 0})
  phone_number?: string;

}
export class UpdateCompanyUserRequestDTO {
  @ObjectFieldOptional(UpdateCompanyUserRequest)
  company_users?: UpdateCompanyUserRequest;

}
export class UpdateCompanyUserResponse {
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
export class UpdateErrorObjectResponse {
  
}

export class UpdateCompanyUserResponseDTO {
  
  company_user: UpdateCompanyUserResponse
    error_object: Object;
  
  
  constructor(
    company_user: CompanyUser,
    error_object?: Object  ) {
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
        this.error_object = error_object;
      }
  }
