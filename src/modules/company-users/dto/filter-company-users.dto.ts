
import { CompanyUser, RoleEnum as CompanyUserRoleEnum } from "entities/company_users";
import { NumberFieldOptional, StringFieldOptional, EnumFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";
import { StorageFile } from "entities/storage_files";

export class FilterCompanyUserRequest {
  @NumberFieldOptional({ int: true})
  company_id?: number;
@StringFieldOptional({ maxLength: 255, minLength: 0})
  full_name?: string;
@StringFieldOptional({ maxLength: 255, minLength: 0})
  position?: string;
@StringFieldOptional({ email: true, maxLength: 255, minLength: 0})
  email?: string;
@EnumFieldOptional(() => CompanyUserRoleEnum)
  role?: CompanyUserRoleEnum;
@StringFieldOptional({ maxLength: 255, minLength: 0})
  phone_number?: string;

}
export class FilterCompanyUserRequestDTO {
  @ObjectFieldOptional(FilterCompanyUserRequest)
  company_users?: FilterCompanyUserRequest;
@NumberFieldOptional({ int: true})
  pagination_page?: number;
@NumberFieldOptional({ int: true})
  pagination_limit?: number;

}
export class FilterCompanyUserResponse {
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


export class FilterCompanyUserResponseDTO {
  company_users: FilterCompanyUserResponse[];
    total_pages?: number;
    total_count: number;
  
  constructor(
    company_users: (CompanyUser)[],
    total_count: number,
    total_pages?: number  ) {
    this.company_users = company_users.map((company_user) => ({
          ...company_user,
          id: company_user?.id,
created_at: company_user?.created_at,
updated_at: company_user?.updated_at,
company_id: company_user?.company_id,
full_name: company_user?.full_name,
position: company_user?.position,
photo: company_user?.photo,
email: company_user?.email,
role: company_user?.role,
phone_number: company_user?.phone_number
        }));
        this.total_pages = total_pages;
        this.total_count = total_count;
  }
}
