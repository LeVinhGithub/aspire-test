
import { TargetList } from "entities/target_lists";
import { NumberField, StringFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";
import { StorageFile } from "entities/storage_files";
import { ListingClassificationEnum as CompanyListingClassificationEnum } from "entities/companies";
import { AvailabilityEnum as ApplicantAvailabilityEnum, GenderEnum as ApplicantGenderEnum } from "entities/applicants";

export class ShowTargetListParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class ShowTargetListRequest {
  @StringFieldOptional({})
  title?: string;

}
export class ShowTargetListRequestDTO {
  @ObjectFieldOptional(ShowTargetListRequest)
  target_lists?: ShowTargetListRequest;

}
export class CompanyShowTargetListResponse {
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
listing_classification: `${CompanyListingClassificationEnum}`;
representative_name: string;
slug: string;
image: StorageFile;
capital: string;
ipo: boolean;
business_id: string;
name_furigana: string;

}
export class IndustryApplicantIndustryApplicantTargetListApplicantShowTargetListResponse {
  name: string;

}
export class ApplicantIndustryApplicantTargetListApplicantShowTargetListResponse {
  id: number;
created_at: Date;
updated_at: Date;
industry_id: number;
industry: IndustryApplicantIndustryApplicantTargetListApplicantShowTargetListResponse;

}
export class SchoolTypeApplicantSchoolApplicantTargetListApplicantShowTargetListResponse {
  name: string;

}
export class ApplicantSchoolApplicantTargetListApplicantShowTargetListResponse {
  id: number;
created_at: Date;
updated_at: Date;
graduation_date: Date;
name: string;
degree: string;
major: string;
school_type_id: number;
school_type: SchoolTypeApplicantSchoolApplicantTargetListApplicantShowTargetListResponse;

}
export class IncomeRangeApplicantTargetListApplicantShowTargetListResponse {
  name: string;

}
export class ApplicantTargetListApplicantShowTargetListResponse {
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
is_onboarded: boolean;
notes: string;
current_company_name: string;
current_company_department: string;
current_company_position: string;
number_of_companies: number;
is_suspended: boolean;
applicant_industries: ApplicantIndustryApplicantTargetListApplicantShowTargetListResponse[];
applicant_schools: ApplicantSchoolApplicantTargetListApplicantShowTargetListResponse[];
income_range: IncomeRangeApplicantTargetListApplicantShowTargetListResponse;

}
export class TargetListApplicantShowTargetListResponse {
  applicant: ApplicantTargetListApplicantShowTargetListResponse;

}
export class ShowTargetListResponse {
  id: number;
created_at: Date;
updated_at: Date;
title: string;
company_id: number;
company: CompanyShowTargetListResponse;
target_list_applicants: TargetListApplicantShowTargetListResponse[];

}

export class ShowTargetListResponseDTO {
  
  target_list: ShowTargetListResponse
  
  
  constructor(
    target_list: TargetList,
      ) {
    this.target_list = { ...target_list, id: target_list?.id,
created_at: target_list?.created_at,
updated_at: target_list?.updated_at,
title: target_list?.title,
company_id: target_list?.company_id,
company: {
            id: target_list?.company?.id,
created_at: target_list?.company?.created_at,
updated_at: target_list?.company?.updated_at,
name: target_list?.company?.name,
logo: target_list?.company?.logo,
location: target_list?.company?.location,
launched_year: target_list?.company?.launched_year,
business_details: target_list?.company?.business_details,
number_of_employees: target_list?.company?.number_of_employees,
industry_id: target_list?.company?.industry_id,
mission: target_list?.company?.mission,
vision: target_list?.company?.vision,
value: target_list?.company?.value,
representative_photo: target_list?.company?.representative_photo,
representative_profile: target_list?.company?.representative_profile,
listing_classification: target_list?.company?.listing_classification,
representative_name: target_list?.company?.representative_name,
slug: target_list?.company?.slug,
image: target_list?.company?.image,
capital: target_list?.company?.capital,
ipo: target_list?.company?.ipo,
business_id: target_list?.company?.business_id,
name_furigana: target_list?.company?.name_furigana
          },
target_list_applicants: target_list?.target_list_applicants?.map((target_list_applicant) => ({
            ...target_list_applicant,
            applicant: {
            id: target_list_applicant?.applicant?.id,
created_at: target_list_applicant?.applicant?.created_at,
updated_at: target_list_applicant?.applicant?.updated_at,
full_name: target_list_applicant?.applicant?.full_name,
furigana: target_list_applicant?.applicant?.furigana,
phone_number: target_list_applicant?.applicant?.phone_number,
birthdate: target_list_applicant?.applicant?.birthdate,
location_id: target_list_applicant?.applicant?.location_id,
address: target_list_applicant?.applicant?.address,
income_range_id: target_list_applicant?.applicant?.income_range_id,
availability: target_list_applicant?.applicant?.availability,
resume_file: target_list_applicant?.applicant?.resume_file,
description: target_list_applicant?.applicant?.description,
management_experience_id: target_list_applicant?.applicant?.management_experience_id,
email: target_list_applicant?.applicant?.email,
gender: target_list_applicant?.applicant?.gender,
is_onboarded: target_list_applicant?.applicant?.is_onboarded,
notes: target_list_applicant?.applicant?.notes,
current_company_name: target_list_applicant?.applicant?.current_company_name,
current_company_department: target_list_applicant?.applicant?.current_company_department,
current_company_position: target_list_applicant?.applicant?.current_company_position,
number_of_companies: target_list_applicant?.applicant?.number_of_companies,
is_suspended: target_list_applicant?.applicant?.is_suspended,
applicant_industries: target_list_applicant?.applicant?.applicant_industries?.map((applicant_industry) => ({
            ...applicant_industry,
            id: applicant_industry?.id,
created_at: applicant_industry?.created_at,
updated_at: applicant_industry?.updated_at,
industry_id: applicant_industry?.industry_id,
industry: {
            name: applicant_industry?.industry?.name
          }
          })),
applicant_schools: target_list_applicant?.applicant?.applicant_schools?.map((applicant_school) => ({
            ...applicant_school,
            id: applicant_school?.id,
created_at: applicant_school?.created_at,
updated_at: applicant_school?.updated_at,
graduation_date: applicant_school?.graduation_date,
name: applicant_school?.name,
degree: applicant_school?.degree,
major: applicant_school?.major,
school_type_id: applicant_school?.school_type_id,
school_type: {
            name: applicant_school?.school_type?.name
          }
          })),
income_range: {
            name: target_list_applicant?.applicant?.income_range?.name
          }
          }
          })) };
      }
  }
