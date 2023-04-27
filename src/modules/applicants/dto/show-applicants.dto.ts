
import { Applicant, AvailabilityEnum as ApplicantAvailabilityEnum, GenderEnum as ApplicantGenderEnum } from "entities/applicants";
import { NumberField, StringFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";
import { ProficiencyEnum as ApplicantLanguageProficiencyEnum } from "entities/applicant_languages";
import { StorageFile } from "entities/storage_files";
import { StatusEnum as JobApplicationStatusEnum } from "entities/job_applications";
import { ReasonEnum as RestrictionReasonEnum } from "entities/restrictions";

export class ShowApplicantParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class ShowApplicantRequest {
  @StringFieldOptional({})
  email?: string;

}
export class ShowApplicantRequestDTO {
  @ObjectFieldOptional(ShowApplicantRequest)
  applicants?: ShowApplicantRequest;

}
export class ApplicantLanguageShowApplicantResponse {
  id: number;
created_at: Date;
updated_at: Date;
proficiency: `${ApplicantLanguageProficiencyEnum}`;
language_id: number;
applicant_id: number;

}
export class ApplicantSchoolShowApplicantResponse {
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
export class ApplicantIndustryShowApplicantResponse {
  id: number;
created_at: Date;
updated_at: Date;
industry_id: number;
applicant_id: number;

}
export class MessageShowApplicantResponse {
  id: number;
created_at: Date;
updated_at: Date;
applicant_id: number;
text: string;
attachment: StorageFile;
reply_to_message_id: number;
company_id: number;

}
export class JobApplicationShowApplicantResponse {
  id: number;
created_at: Date;
updated_at: Date;
applicant_id: number;
job_opening_id: number;
status: `${JobApplicationStatusEnum}`;

}
export class JobOpeningFavoriteShowApplicantResponse {
  id: number;
created_at: Date;
updated_at: Date;
job_opening_id: number;

}
export class JobExperienceShowApplicantResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_name: string;
start_date: Date;
end_date: Date;
applicant_id: number;
job_title_id: number;

}
export class ApplicantRestrictionApplicantRestrictionShowApplicantResponse {
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

}
export class RestrictionApplicantRestrictionShowApplicantResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_id: number;
applicant_id: number;
applicant: ApplicantRestrictionApplicantRestrictionShowApplicantResponse;

}
export class ApplicantRestrictionShowApplicantResponse {
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
restrictions: RestrictionApplicantRestrictionShowApplicantResponse[];

}
export class RestrictionShowApplicantResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_id: number;
applicant_id: number;
applicant: ApplicantRestrictionShowApplicantResponse;
reason: `${RestrictionReasonEnum}`;

}
export class TargetListShowApplicantResponse {
  target_list_id: number;

}
export class ShowApplicantResponse {
  id: number;
created_at: Date;
updated_at: Date;
full_name: string;
furigana: string;
phone_number: string;
birthdate: Date;
applicant_languages: ApplicantLanguageShowApplicantResponse[];
address: string;
income_range_id: number;
availability: `${ApplicantAvailabilityEnum}`;
applicant_schools: ApplicantSchoolShowApplicantResponse[];
resume_file: StorageFile;
description: string;
management_experience_id: number;
applicant_industries: ApplicantIndustryShowApplicantResponse[];
messages: MessageShowApplicantResponse[];
location_id: number;
job_applications: JobApplicationShowApplicantResponse[];
job_opening_favorites: JobOpeningFavoriteShowApplicantResponse[];
email: string;
gender: `${ApplicantGenderEnum}`;
job_experiences: JobExperienceShowApplicantResponse[];
restrictions: RestrictionShowApplicantResponse[];
target_lists: TargetListShowApplicantResponse[];

}

export class ShowApplicantResponseDTO {
  
  applicant: ShowApplicantResponse
  
  
  constructor(
    applicant: Applicant,
      ) {
    this.applicant = { ...applicant, id: applicant?.id,
created_at: applicant?.created_at,
updated_at: applicant?.updated_at,
full_name: applicant?.full_name,
furigana: applicant?.furigana,
phone_number: applicant?.phone_number,
birthdate: applicant?.birthdate,
applicant_languages: applicant?.applicant_languages?.map((applicant_language) => ({
            ...applicant_language,
            id: applicant_language?.id,
created_at: applicant_language?.created_at,
updated_at: applicant_language?.updated_at,
proficiency: applicant_language?.proficiency,
language_id: applicant_language?.language_id,
applicant_id: applicant_language?.applicant_id
          })),
address: applicant?.address,
income_range_id: applicant?.income_range_id,
availability: applicant?.availability,
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
resume_file: applicant?.resume_file,
description: applicant?.description,
management_experience_id: applicant?.management_experience_id,
applicant_industries: applicant?.applicant_industries?.map((applicant_industry) => ({
            ...applicant_industry,
            id: applicant_industry?.id,
created_at: applicant_industry?.created_at,
updated_at: applicant_industry?.updated_at,
industry_id: applicant_industry?.industry_id,
applicant_id: applicant_industry?.applicant_id
          })),
messages: applicant?.messages?.map((message) => ({
            ...message,
            id: message?.id,
created_at: message?.created_at,
updated_at: message?.updated_at,
applicant_id: message?.applicant_id,
text: message?.text,
attachment: message?.attachment,
reply_to_message_id: message?.reply_to_message_id,
company_id: message?.company_id
          })),
location_id: applicant?.location_id,
job_applications: applicant?.job_applications?.map((job_application) => ({
            ...job_application,
            id: job_application?.id,
created_at: job_application?.created_at,
updated_at: job_application?.updated_at,
applicant_id: job_application?.applicant_id,
job_opening_id: job_application?.job_opening_id,
status: job_application?.status
          })),
job_opening_favorites: applicant?.job_opening_favorites?.map((job_opening_favorite) => ({
            ...job_opening_favorite,
            id: job_opening_favorite?.id,
created_at: job_opening_favorite?.created_at,
updated_at: job_opening_favorite?.updated_at,
job_opening_id: job_opening_favorite?.job_opening_id
          })),
email: applicant?.email,
gender: applicant?.gender,
job_experiences: applicant?.job_experiences?.map((job_experience) => ({
            ...job_experience,
            id: job_experience?.id,
created_at: job_experience?.created_at,
updated_at: job_experience?.updated_at,
company_name: job_experience?.company_name,
start_date: job_experience?.start_date,
end_date: job_experience?.end_date,
applicant_id: job_experience?.applicant_id,
job_title_id: job_experience?.job_title_id
          })),
restrictions: applicant?.restrictions?.map((restriction) => ({
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
gender: restriction?.applicant?.gender
          }
          }))
          },
reason: restriction?.reason
          })),
target_lists: applicant?.target_list_applicants?.map((target_list_applicant) => ({
            ...target_list_applicant,
            target_list_id: target_list_applicant?.target_list_id
          })) };
      }
  }
