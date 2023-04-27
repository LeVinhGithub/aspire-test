
import { CompanyEmployee } from "entities/company_employees";
import { NumberField, StringField, StringFieldOptional, FileFieldOptional, BooleanFieldOptional, FileField, ObjectField } from "src/decorators/field.decorator";
import { FileSystemStoredFile } from "nestjs-form-data";
import { StorageFile } from "entities/storage_files";
import { ListingClassificationEnum as CompanyListingClassificationEnum } from "entities/companies";

export class CreateCompanyEmployeeRequest {
  @NumberField({ int: true})
  company_id: number;
@StringField({ maxLength: 255, minLength: 0})
  full_name: string;
@StringFieldOptional({ maxLength: 255, minLength: 0})
  profile?: string;
@FileFieldOptional({ fileTypes: ["image"]})
  photo?: FileSystemStoredFile;
@BooleanFieldOptional({})
  is_high_rank_employee?: boolean;

}
export class CreateCompanyRequest {
  @StringField({})
  name: string;
@FileField({})
  logo: FileSystemStoredFile;
@StringField({})
  location: string;
@StringField({})
  launched_year: string;
@StringField({})
  business_details: string;
@NumberField({})
  number_of_employees: number;
@NumberField({})
  industry_id: number;
@StringField({})
  mission: string;
@StringField({})
  vision: string;
@StringField({})
  value: string;
@FileField({})
  representative_photo: FileSystemStoredFile;
@StringField({})
  representative_profile: string;
@StringField({})
  ipo: string;
@StringField({})
  representative_name: string;
@StringField({})
  slug: string;
@FileField({})
  image: FileSystemStoredFile;
@StringField({})
  capital: string;

}
export class CreateCompanyEmployeeRequestDTO {
  @ObjectField(CreateCompanyEmployeeRequest)
  company_employees: CreateCompanyEmployeeRequest;
@ObjectField(CreateCompanyRequest)
  companies: CreateCompanyRequest;

}
export class CompanyCreateCompanyEmployeeResponse {
  id: number;
created_at: Date;
updated_at: Date;
name: string;
logo: StorageFile;
location: string;
launched_year: string;
business_details: string;
number_of_employees: number;
industry_id: number;
mission: string;
vision: string;
value: string;
representative_photo: StorageFile;
representative_profile: string;
ipo: `${CompanyListingClassificationEnum}`;
representative_name: string;
slug: string;
image: StorageFile;
capital: string;

}
export class CreateCompanyEmployeeResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_id: number;
company: CompanyCreateCompanyEmployeeResponse;
full_name: string;
profile: string;
photo: StorageFile;
is_high_rank_employee: boolean;

}
export class CreateErrorObjectResponse {
  
}

export class CreateCompanyEmployeeResponseDTO {
  
  company_employee: CreateCompanyEmployeeResponse
    error_object: Object;
  
  
  constructor(
    company_employee: CompanyEmployee,
    error_object?: Object  ) {
    this.company_employee = { ...company_employee, id: company_employee?.id,
created_at: company_employee?.created_at,
updated_at: company_employee?.updated_at,
company_id: company_employee?.company_id,
company: {
            id: company_employee?.company?.id,
created_at: company_employee?.company?.created_at,
updated_at: company_employee?.company?.updated_at,
name: company_employee?.company?.name,
logo: company_employee?.company?.logo,
location: company_employee?.company?.location,
launched_year: company_employee?.company?.launched_year,
business_details: company_employee?.company?.business_details,
number_of_employees: company_employee?.company?.number_of_employees,
industry_id: company_employee?.company?.industry_id,
mission: company_employee?.company?.mission,
vision: company_employee?.company?.vision,
value: company_employee?.company?.value,
representative_photo: company_employee?.company?.representative_photo,
representative_profile: company_employee?.company?.representative_profile,
ipo: company_employee?.company?.listing_classification,
representative_name: company_employee?.company?.representative_name,
slug: company_employee?.company?.slug,
image: company_employee?.company?.image,
capital: company_employee?.company?.capital
          },
full_name: company_employee?.full_name,
profile: company_employee?.profile,
photo: company_employee?.photo,
is_high_rank_employee: company_employee?.is_high_rank_employee };
        this.error_object = error_object;
      }
  }
