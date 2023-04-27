
import { CompanyUser, RoleEnum as CompanyUserRoleEnum } from "entities/company_users";
import { NumberField, StringField, StringFieldOptional, FileFieldOptional, EnumField, ObjectField } from "src/decorators/field.decorator";
import { FileSystemStoredFile } from "nestjs-form-data";
import { StorageFile } from "entities/storage_files";

export class CreateCompanyUserRequest {
  @NumberField({ int: true})
  company_id: number;
@StringField({ maxLength: 255, minLength: 0})
  full_name: string;
@StringFieldOptional({ maxLength: 255, minLength: 0})
  position?: string;
@FileFieldOptional({ fileSize: 10, fileTypes: ["image"]})
  photo?: FileSystemStoredFile;
@StringField({ email: true, maxLength: 255, minLength: 0})
  email: string;
@EnumField(() => CompanyUserRoleEnum)
  role: CompanyUserRoleEnum;
@StringField({ maxLength: 255, minLength: 0})
  phone_number: string;

}
export class CreateCompanyUserRequestDTO {
  @ObjectField(CreateCompanyUserRequest)
  company_users: CreateCompanyUserRequest;

}
export class CreateCompanyUserResponse {
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
export class CreateErrorObjectResponse {
  
}

export class CreateCompanyUserResponseDTO {
  
  company_user: CreateCompanyUserResponse
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
