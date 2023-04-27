
import { CompanyEmployee } from "entities/company_employees";
import { NumberFieldOptional, StringFieldOptional, BooleanFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";
import { StorageFile } from "entities/storage_files";
import { ListingClassificationEnum as CompanyListingClassificationEnum } from "entities/companies";

export class FilterCompanyEmployeeRequest {
  @NumberFieldOptional({ int: true})
  company_id?: number;
@StringFieldOptional({ maxLength: 255, minLength: 0})
  full_name?: string;
@StringFieldOptional({ maxLength: 255, minLength: 0})
  profile?: string;
@BooleanFieldOptional({})
  is_high_rank_employee?: boolean;

}
export class FilterCompanyRequest {
  @StringFieldOptional({})
  name?: string;
@StringFieldOptional({})
  location?: string;
@StringFieldOptional({})
  launched_year?: string;
@StringFieldOptional({})
  business_details?: string;
@NumberFieldOptional({})
  number_of_employees?: number;
@NumberFieldOptional({})
  industry_id?: number;
@StringFieldOptional({})
  mission?: string;
@StringFieldOptional({})
  vision?: string;
@StringFieldOptional({})
  value?: string;
@StringFieldOptional({})
  representative_profile?: string;
@StringFieldOptional({})
  ipo?: string;
@StringFieldOptional({})
  representative_name?: string;
@StringFieldOptional({})
  slug?: string;
@StringFieldOptional({})
  capital?: string;

}
export class FilterCompanyEmployeeRequestDTO {
  @ObjectFieldOptional(FilterCompanyEmployeeRequest)
  company_employees?: FilterCompanyEmployeeRequest;
@NumberFieldOptional({ int: true})
  pagination_page?: number;
@NumberFieldOptional({ int: true})
  pagination_limit?: number;
@ObjectFieldOptional(FilterCompanyRequest)
  companies?: FilterCompanyRequest;

}
export class CompanyFilterCompanyEmployeeResponse {
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
export class FilterCompanyEmployeeResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_id: number;
company: CompanyFilterCompanyEmployeeResponse;
full_name: string;
profile: string;
photo: StorageFile;
is_high_rank_employee: boolean;

}


export class FilterCompanyEmployeeResponseDTO {
  company_employees: FilterCompanyEmployeeResponse[];
    total_pages?: number;
    total_count: number;
  
  constructor(
    company_employees: (CompanyEmployee)[],
    total_count: number,
    total_pages?: number  ) {
    this.company_employees = company_employees.map((company_employee) => ({
          ...company_employee,
          id: company_employee?.id,
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
is_high_rank_employee: company_employee?.is_high_rank_employee
        }));
        this.total_pages = total_pages;
        this.total_count = total_count;
  }
}
