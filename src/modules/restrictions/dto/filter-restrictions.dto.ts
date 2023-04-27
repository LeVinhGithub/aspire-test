
import { Restriction, ReasonEnum as RestrictionReasonEnum } from "entities/restrictions";
import { NumberFieldOptional, EnumFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";
import { StorageFile } from "entities/storage_files";
import { ListingClassificationEnum as CompanyListingClassificationEnum } from "entities/companies";
import { AvailabilityEnum as ApplicantAvailabilityEnum, GenderEnum as ApplicantGenderEnum } from "entities/applicants";

export class FilterRestrictionRequest {
  @NumberFieldOptional({ int: true})
  company_id?: number;
@NumberFieldOptional({ int: true})
  applicant_id?: number;
@EnumFieldOptional(() => RestrictionReasonEnum)
  reason?: RestrictionReasonEnum;

}
export class FilterRestrictionRequestDTO {
  @ObjectFieldOptional(FilterRestrictionRequest)
  restrictions?: FilterRestrictionRequest;
@NumberFieldOptional({ int: true})
  pagination_page?: number;
@NumberFieldOptional({ int: true})
  pagination_limit?: number;

}
export class CompanyFilterRestrictionResponse {
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
export class RestrictionApplicantRestrictionApplicantFilterRestrictionResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_id: number;
applicant_id: number;

}
export class ApplicantRestrictionApplicantFilterRestrictionResponse {
  id: number;
created_at: Date;
updated_at: Date;
full_name: string;
furigana: string;
phone_number: string;
birthdate: Date;
location_id: number;
address: string;
income_range_id: number;
availability: `${ApplicantAvailabilityEnum}`;
resume_file: StorageFile;
description: string;
management_experience_id: number;
email: string;
gender: `${ApplicantGenderEnum}`;
restrictions: RestrictionApplicantRestrictionApplicantFilterRestrictionResponse[];

}
export class RestrictionApplicantFilterRestrictionResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_id: number;
applicant_id: number;
applicant: ApplicantRestrictionApplicantFilterRestrictionResponse;

}
export class ApplicantFilterRestrictionResponse {
  id: number;
created_at: Date;
updated_at: Date;
full_name: string;
furigana: string;
phone_number: string;
birthdate: Date;
location_id: number;
address: string;
income_range_id: number;
availability: `${ApplicantAvailabilityEnum}`;
resume_file: StorageFile;
description: string;
management_experience_id: number;
email: string;
gender: `${ApplicantGenderEnum}`;
restrictions: RestrictionApplicantFilterRestrictionResponse[];

}
export class FilterRestrictionResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_id: number;
company: CompanyFilterRestrictionResponse;
applicant_id: number;
applicant: ApplicantFilterRestrictionResponse;
reason: `${RestrictionReasonEnum}`;

}


export class FilterRestrictionResponseDTO {
  restrictions: FilterRestrictionResponse[];
    total_pages?: number;
    total_count: number;
  
  constructor(
    restrictions: (Restriction)[],
    total_count: number,
    total_pages?: number  ) {
    this.restrictions = restrictions.map((restriction) => ({
          ...restriction,
          id: restriction?.id,
created_at: restriction?.created_at,
updated_at: restriction?.updated_at,
company_id: restriction?.company_id,
company: {
            id: restriction?.company?.id,
created_at: restriction?.company?.created_at,
updated_at: restriction?.company?.updated_at,
name: restriction?.company?.name,
logo: restriction?.company?.logo,
location: restriction?.company?.location,
launched_year: restriction?.company?.launched_year,
business_details: restriction?.company?.business_details,
number_of_employees: restriction?.company?.number_of_employees,
industry_id: restriction?.company?.industry_id,
mission: restriction?.company?.mission,
vision: restriction?.company?.vision,
value: restriction?.company?.value,
representative_photo: restriction?.company?.representative_photo,
representative_profile: restriction?.company?.representative_profile,
ipo: restriction?.company?.listing_classification,
representative_name: restriction?.company?.representative_name,
slug: restriction?.company?.slug,
image: restriction?.company?.image,
capital: restriction?.company?.capital
          },
applicant_id: restriction?.applicant_id,
applicant: {
            id: restriction?.applicant?.id,
created_at: restriction?.applicant?.created_at,
updated_at: restriction?.applicant?.updated_at,
full_name: restriction?.applicant?.full_name,
furigana: restriction?.applicant?.furigana,
phone_number: restriction?.applicant?.phone_number,
birthdate: restriction?.applicant?.birthdate,
location_id: restriction?.applicant?.location_id,
address: restriction?.applicant?.address,
income_range_id: restriction?.applicant?.income_range_id,
availability: restriction?.applicant?.availability,
resume_file: restriction?.applicant?.resume_file,
description: restriction?.applicant?.description,
management_experience_id: restriction?.applicant?.management_experience_id,
email: restriction?.applicant?.email,
gender: restriction?.applicant?.gender,
restrictions: restriction?.applicant?.restrictions?.map((restriction) => ({
            ...restriction,
            id: restriction?.id,
created_at: restriction?.created_at,
updated_at: restriction?.updated_at,
company_id: restriction?.company_id,
applicant_id: restriction?.applicant_id,
applicant: {
            id: restriction?.applicant?.id,
created_at: restriction?.applicant?.created_at,
updated_at: restriction?.applicant?.updated_at,
full_name: restriction?.applicant?.full_name,
furigana: restriction?.applicant?.furigana,
phone_number: restriction?.applicant?.phone_number,
birthdate: restriction?.applicant?.birthdate,
location_id: restriction?.applicant?.location_id,
address: restriction?.applicant?.address,
income_range_id: restriction?.applicant?.income_range_id,
availability: restriction?.applicant?.availability,
resume_file: restriction?.applicant?.resume_file,
description: restriction?.applicant?.description,
management_experience_id: restriction?.applicant?.management_experience_id,
email: restriction?.applicant?.email,
gender: restriction?.applicant?.gender,
restrictions: restriction?.applicant?.restrictions?.map((restriction) => ({
            ...restriction,
            id: restriction?.id,
created_at: restriction?.created_at,
updated_at: restriction?.updated_at,
company_id: restriction?.company_id,
applicant_id: restriction?.applicant_id
          }))
          }
          }))
          },
reason: restriction?.reason
        }));
        this.total_pages = total_pages;
        this.total_count = total_count;
  }
}
