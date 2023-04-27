
import { ManagementExperience } from "entities/management_experiences";
import { StringFieldOptional, ObjectFieldOptional, NumberFieldOptional } from "src/decorators/field.decorator";
import { ProficiencyEnum as ApplicantLanguageProficiencyEnum } from "entities/applicant_languages";
import { AvailabilityEnum as ApplicantAvailabilityEnum } from "entities/applicants";
import { StorageFile } from "entities/storage_files";

export class FilterManagementExperienceRequest {
  @StringFieldOptional({ maxLength: 255, minLength: 0})
  name?: string;

}
export class FilterManagementExperienceRequestDTO {
  @ObjectFieldOptional(FilterManagementExperienceRequest)
  management_experiences?: FilterManagementExperienceRequest;
@NumberFieldOptional({ int: true})
  pagination_page?: number;
@NumberFieldOptional({ int: true})
  pagination_limit?: number;

}
export class ApplicantLanguageApplicantFilterManagementExperienceResponse {
  id: number;
created_at: Date;
updated_at: Date;
proficiency: `${ApplicantLanguageProficiencyEnum}`;
language_id: number;
other_language: string;

}
export class ApplicantSchoolApplicantFilterManagementExperienceResponse {
  id: number;
created_at: Date;
updated_at: Date;
graduation_date: Date;
name: string;
degree: string;
major: string;
school_type_id: number;
applicant_id: number;

}
export class ApplicantFilterManagementExperienceResponse {
  id: number;
created_at: Date;
updated_at: Date;
full_name: string;
furigana: string;
phone_number: string;
dob: Date;
overseas_territory_id: number;
address: string;
income_range_id: number;
availability: `${ApplicantAvailabilityEnum}`;
resume_file: StorageFile;
description: string;
management_experience_id: number;
applicant_languages: ApplicantLanguageApplicantFilterManagementExperienceResponse[];
applicant_schools: ApplicantSchoolApplicantFilterManagementExperienceResponse[];
email: string;
is_onboarded: boolean;
notes: string;
current_company_name: string;
current_company_department: string;
current_company_position: string;
confirmation_email_resent_count: number;

}
export class FilterManagementExperienceResponse {
  id: number;
created_at: Date;
updated_at: Date;
name: string;
applicants: ApplicantFilterManagementExperienceResponse[];
management_experience_id: number;

}


export class FilterManagementExperienceResponseDTO {
  management_experiences: FilterManagementExperienceResponse[];
    total_pages?: number;
    total_count: number;
  
  constructor(
    management_experiences: (ManagementExperience & { management_experience_id?: number })[],
    total_count: number,
    total_pages?: number  ) {
    this.management_experiences = management_experiences.map((management_experience) => ({
          ...management_experience,
          id: management_experience?.id,
created_at: management_experience?.created_at,
updated_at: management_experience?.updated_at,
name: management_experience?.name,
applicants: management_experience?.applicants?.map((applicant) => ({
            ...applicant,
            id: applicant?.id,
created_at: applicant?.created_at,
updated_at: applicant?.updated_at,
full_name: applicant?.full_name,
furigana: applicant?.furigana,
phone_number: applicant?.phone_number,
dob: applicant?.birthdate,
overseas_territory_id: applicant?.location_id,
address: applicant?.address,
income_range_id: applicant?.income_range_id,
availability: applicant?.availability,
resume_file: applicant?.resume_file,
description: applicant?.description,
management_experience_id: applicant?.management_experience_id,
applicant_languages: applicant?.applicant_languages?.map((applicant_language) => ({
            ...applicant_language,
            id: applicant_language?.id,
created_at: applicant_language?.created_at,
updated_at: applicant_language?.updated_at,
proficiency: applicant_language?.proficiency,
language_id: applicant_language?.language_id,
other_language: applicant_language?.other_language
          })),
applicant_schools: applicant?.applicant_schools?.map((applicant_school) => ({
            ...applicant_school,
            id: applicant_school?.id,
created_at: applicant_school?.created_at,
updated_at: applicant_school?.updated_at,
graduation_date: applicant_school?.graduation_date,
name: applicant_school?.name,
degree: applicant_school?.degree,
major: applicant_school?.major,
school_type_id: applicant_school?.school_type_id,
applicant_id: applicant_school?.applicant_id
          })),
email: applicant?.email,
is_onboarded: applicant?.is_onboarded,
notes: applicant?.notes,
current_company_name: applicant?.current_company_name,
current_company_department: applicant?.current_company_department,
current_company_position: applicant?.current_company_position,
confirmation_email_resent_count: applicant?.confirmation_email_resent_count
          })),
management_experience_id: management_experience?.management_experience_id
        }));
        this.total_pages = total_pages;
        this.total_count = total_count;
  }
}
