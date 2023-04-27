
import { Applicant, AvailabilityEnum as ApplicantAvailabilityEnum, GenderEnum as ApplicantGenderEnum, ManagementExperienceYearEnum as ApplicantManagementExperienceYearEnum } from "entities/applicants";
import { NumberField, StringFieldOptional, DateFieldOptional, NumberFieldOptional, EnumFieldOptional, FileFieldOptional, BooleanFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";
import { FileSystemStoredFile } from "nestjs-form-data";
import { ProficiencyEnum as ApplicantLanguageProficiencyEnum } from "entities/applicant_languages";
import { StorageFile } from "entities/storage_files";
import { StatusEnum as JobApplicationStatusEnum } from "entities/job_applications";
import { ReasonEnum as RestrictionReasonEnum } from "entities/restrictions";

export class UpdateApplicantParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class UpdateApplicantRequest {
  @StringFieldOptional({ maxLength: 255, minLength: 0})
  full_name?: string;
@StringFieldOptional({ maxLength: 255, minLength: 0})
  furigana?: string;
@StringFieldOptional({ regex: { pattern: "^([+0-9]{1})([0-9]{5,13})+$"}})
  phone_number?: string;
@DateFieldOptional({ inPast: true})
  dob?: Date;
@NumberFieldOptional({ int: true})
  overseas_territory_id?: number;
@StringFieldOptional({ maxLength: 255, minLength: 0})
  address?: string;
@NumberFieldOptional({ int: true})
  income_range_id?: number;
@EnumFieldOptional(() => ApplicantAvailabilityEnum)
  availability?: ApplicantAvailabilityEnum;
@FileFieldOptional({ fileTypes: ["pdf"]})
  resume_file?: FileSystemStoredFile;
@StringFieldOptional({ maxLength: 250, minLength: 0})
  description?: string;
@NumberFieldOptional({ int: true})
  management_experience_id?: number;
@StringFieldOptional({ email: true, maxLength: 255, minLength: 0})
  email?: string;
@EnumFieldOptional(() => ApplicantGenderEnum)
  gender?: ApplicantGenderEnum;
@BooleanFieldOptional({})
  is_onboarded?: boolean;
@StringFieldOptional({ maxLength: 255, minLength: 0})
  notes?: string;
@StringFieldOptional({ maxLength: 255, minLength: 0})
  current_company_name?: string;
@StringFieldOptional({ maxLength: 255, minLength: 0})
  current_company_department?: string;
@StringFieldOptional({ maxLength: 255, minLength: 0})
  current_company_position?: string;
@NumberFieldOptional({ int: true, minimum: 0, maximum: 3})
  confirmation_email_resent_count?: number;
@NumberFieldOptional({ int: true, minimum: 0, maximum: 99})
  number_of_companies?: number;
@BooleanFieldOptional({})
  is_suspended?: boolean;
@StringFieldOptional({ maxLength: 65535, minLength: 0})
  desired_info?: string;
@EnumFieldOptional(() => ApplicantManagementExperienceYearEnum)
  management_experience_years?: ApplicantManagementExperienceYearEnum;

}
export class UpdateRestrictionRequest {
  @NumberFieldOptional({})
  company_id?: number;
@NumberFieldOptional({})
  applicant_id?: number;

}
export class UpdateApplicantRequestDTO {
  @ObjectFieldOptional(UpdateApplicantRequest)
  applicants?: UpdateApplicantRequest;
@ObjectFieldOptional(UpdateRestrictionRequest)
  restrictions?: UpdateRestrictionRequest;

}
export class ApplicantLanguageUpdateApplicantResponse {
  id: number;
created_at: Date;
updated_at: Date;
proficiency: `${ApplicantLanguageProficiencyEnum}`;
language_id: number;
applicant_id: number;

}
export class ApplicantSchoolUpdateApplicantResponse {
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
export class ApplicantIndustryUpdateApplicantResponse {
  id: number;
created_at: Date;
updated_at: Date;
industry_id: number;
applicant_id: number;

}
export class MessageUpdateApplicantResponse {
  id: number;
created_at: Date;
updated_at: Date;
applicant_id: number;
text: string;
attachment: StorageFile;
reply_to_message_id: number;
company_id: number;

}
export class JobApplicationUpdateApplicantResponse {
  id: number;
created_at: Date;
updated_at: Date;
applicant_id: number;
job_opening_id: number;
status: `${JobApplicationStatusEnum}`;

}
export class JobOpeningFavoriteUpdateApplicantResponse {
  id: number;
created_at: Date;
updated_at: Date;
job_opening_id: number;

}
export class JobExperienceUpdateApplicantResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_name: string;
start_date: Date;
end_date: Date;
applicant_id: number;
job_title_id: number;

}
export class ApplicantRestrictionApplicantRestrictionUpdateApplicantResponse {
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
export class RestrictionApplicantRestrictionUpdateApplicantResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_id: number;
applicant_id: number;
applicant: ApplicantRestrictionApplicantRestrictionUpdateApplicantResponse;

}
export class ApplicantRestrictionUpdateApplicantResponse {
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
restrictions: RestrictionApplicantRestrictionUpdateApplicantResponse[];

}
export class RestrictionUpdateApplicantResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_id: number;
applicant_id: number;
applicant: ApplicantRestrictionUpdateApplicantResponse;
reason: `${RestrictionReasonEnum}`;

}
export class UpdateApplicantResponse {
  id: number;
created_at: Date;
updated_at: Date;
full_name: string;
furigana: string;
phone_number: string;
birthdate: Date;
applicant_languages: ApplicantLanguageUpdateApplicantResponse[];
address: string;
income_range_id: number;
availability: `${ApplicantAvailabilityEnum}`;
applicant_schools: ApplicantSchoolUpdateApplicantResponse[];
resume_file: StorageFile;
description: string;
management_experience_id: number;
applicant_industries: ApplicantIndustryUpdateApplicantResponse[];
messages: MessageUpdateApplicantResponse[];
location_id: number;
job_applications: JobApplicationUpdateApplicantResponse[];
job_opening_favorites: JobOpeningFavoriteUpdateApplicantResponse[];
email: string;
gender: `${ApplicantGenderEnum}`;
job_experiences: JobExperienceUpdateApplicantResponse[];
restrictions: RestrictionUpdateApplicantResponse[];

}
export class UpdateErrorObjectResponse {
  
}

export class UpdateApplicantResponseDTO {
  
  applicant: UpdateApplicantResponse
    error_object: Object;
  
  
  constructor(
    applicant: Applicant,
    error_object?: Object  ) {
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
          })) };
        this.error_object = error_object;
      }
  }
