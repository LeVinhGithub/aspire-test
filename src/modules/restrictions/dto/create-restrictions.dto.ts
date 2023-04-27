
import { Restriction, ReasonEnum as RestrictionReasonEnum } from "entities/restrictions";
import { NumberField, EnumField, ObjectField } from "src/decorators/field.decorator";
import { StorageFile } from "entities/storage_files";
import { ListingClassificationEnum as CompanyListingClassificationEnum } from "entities/companies";
import { AvailabilityEnum as ApplicantAvailabilityEnum, GenderEnum as ApplicantGenderEnum } from "entities/applicants";

export class CreateRestrictionRequest {
  @NumberField({ int: true})
  company_id: number;
@NumberField({ int: true})
  applicant_id: number;
@EnumField(() => RestrictionReasonEnum)
  reason: RestrictionReasonEnum;

}
export class CreateRestrictionRequestDTO {
  @ObjectField(CreateRestrictionRequest)
  restrictions: CreateRestrictionRequest;

}
export class CompanyCreateRestrictionResponse {
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
export class RestrictionApplicantRestrictionApplicantCreateRestrictionResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_id: number;
applicant_id: number;

}
export class ApplicantRestrictionApplicantCreateRestrictionResponse {
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
restrictions: RestrictionApplicantRestrictionApplicantCreateRestrictionResponse[];

}
export class RestrictionApplicantCreateRestrictionResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_id: number;
applicant_id: number;
applicant: ApplicantRestrictionApplicantCreateRestrictionResponse;

}
export class ApplicantCreateRestrictionResponse {
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
restrictions: RestrictionApplicantCreateRestrictionResponse[];

}
export class CreateRestrictionResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_id: number;
company: CompanyCreateRestrictionResponse;
applicant_id: number;
applicant: ApplicantCreateRestrictionResponse;
reason: `${RestrictionReasonEnum}`;

}
export class CreateErrorObjectResponse {
  
}

export class CreateRestrictionResponseDTO {
  
  restriction: CreateRestrictionResponse
    error_object: Object;
  
  
  constructor(
    restriction: Restriction,
    error_object?: Object  ) {
    this.restriction = { ...restriction, id: restriction?.id,
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
reason: restriction?.reason };
        this.error_object = error_object;
      }
  }
