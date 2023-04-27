
import { IncomeRange } from "entities/income_ranges";
import { StringFieldOptional, ObjectFieldOptional, NumberFieldOptional } from "src/decorators/field.decorator";
import { ProficiencyEnum as ApplicantLanguageProficiencyEnum } from "entities/applicant_languages";
import { StorageFile } from "entities/storage_files";
import { StatusEnum as JobApplicationStatusEnum } from "entities/job_applications";
import { AvailabilityEnum as ApplicantAvailabilityEnum, GenderEnum as ApplicantGenderEnum } from "entities/applicants";

export class FilterIncomeRangeRequest {
  @StringFieldOptional({ maxLength: 255, minLength: 0})
  name?: string;

}
export class FilterIncomeRangeRequestDTO {
  @ObjectFieldOptional(FilterIncomeRangeRequest)
  income_ranges?: FilterIncomeRangeRequest;
@NumberFieldOptional({ int: true})
  pagination_page?: number;
@NumberFieldOptional({ int: true})
  pagination_limit?: number;

}
export class ApplicantLanguageApplicantFilterIncomeRangeResponse {
  id: number;
created_at: Date;
updated_at: Date;
proficiency: `${ApplicantLanguageProficiencyEnum}`;
language_id: number;
applicant_id: number;

}
export class ApplicantSchoolApplicantFilterIncomeRangeResponse {
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
export class ApplicantIndustryApplicantFilterIncomeRangeResponse {
  id: number;
created_at: Date;
updated_at: Date;
industry_id: number;
applicant_id: number;

}
export class MessageApplicantFilterIncomeRangeResponse {
  id: number;
created_at: Date;
updated_at: Date;
applicant_id: number;
text: string;
attachment: StorageFile;
reply_to_message_id: number;
company_id: number;

}
export class JobApplicationApplicantFilterIncomeRangeResponse {
  id: number;
created_at: Date;
updated_at: Date;
applicant_id: number;
job_opening_id: number;
status: `${JobApplicationStatusEnum}`;
approached_by_scout: boolean;

}
export class JobOpeningFavoriteApplicantFilterIncomeRangeResponse {
  id: number;
created_at: Date;
updated_at: Date;
job_opening_id: number;

}
export class JobExperienceApplicantFilterIncomeRangeResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_name: string;
start_date: Date;
end_date: Date;
applicant_id: number;
job_title_id: number;

}
export class SkillApplicantFilterIncomeRangeResponse {
  id: number;
created_at: Date;
updated_at: Date;
name: string;
applicant_id: number;

}
export class ApplicantFilterIncomeRangeResponse {
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
applicant_languages: ApplicantLanguageApplicantFilterIncomeRangeResponse[];
availability: `${ApplicantAvailabilityEnum}`;
applicant_schools: ApplicantSchoolApplicantFilterIncomeRangeResponse[];
resume_file: StorageFile;
description: string;
management_experience_id: number;
applicant_industries: ApplicantIndustryApplicantFilterIncomeRangeResponse[];
email: string;
messages: MessageApplicantFilterIncomeRangeResponse[];
job_applications: JobApplicationApplicantFilterIncomeRangeResponse[];
job_opening_favorites: JobOpeningFavoriteApplicantFilterIncomeRangeResponse[];
gender: `${ApplicantGenderEnum}`;
job_experiences: JobExperienceApplicantFilterIncomeRangeResponse[];
skills: SkillApplicantFilterIncomeRangeResponse[];

}
export class JobApplicationJobOpeningFilterIncomeRangeResponse {
  id: number;
created_at: Date;
updated_at: Date;
applicant_id: number;
job_opening_id: number;
status: `${JobApplicationStatusEnum}`;

}
export class JobOpeningFavoriteJobOpeningFilterIncomeRangeResponse {
  id: number;
created_at: Date;
updated_at: Date;
job_opening_id: number;

}
export class JobOpeningValuedCompetencyJobOpeningFilterIncomeRangeResponse {
  id: number;
created_at: Date;
updated_at: Date;
job_opening_id: number;
valued_competency_id: number;

}
export class JobOpeningFilterIncomeRangeResponse {
  id: number;
created_at: Date;
updated_at: Date;
deployment: string;
position: string;
occupation_type_id: number;
location_id: number;
income_range_id: number;
job_description: string;
is_remote_available: boolean;
employment_status_id: number;
company_id: number;
trial_period: string;
working_hours: string;
avg_overtime_hours: string;
trial_period_conditions: string;
workplace: string;
qualification: string;
benefits: string;
vacation: string;
bonus: string;
promotion: string;
appeal_point: string;
passive_smoking_countermeasure_id: number;
career_direction_id: number;
job_title_id: number;
job_applications: JobApplicationJobOpeningFilterIncomeRangeResponse[];
job_opening_favorites: JobOpeningFavoriteJobOpeningFilterIncomeRangeResponse[];
job_opening_valued_competencies: JobOpeningValuedCompetencyJobOpeningFilterIncomeRangeResponse[];
future_career_path: string;
trending_keywords: string;
business_trip_availability: boolean;
transfers: boolean;
publication_start_date: Date;
publication_end_date: Date;
slug: string;
image: StorageFile;
is_recommended: boolean;

}
export class FilterIncomeRangeResponse {
  id: number;
created_at: Date;
updated_at: Date;
income_range_id: number;
applicants: ApplicantFilterIncomeRangeResponse[];
name: string;
job_openings: JobOpeningFilterIncomeRangeResponse[];

}


export class FilterIncomeRangeResponseDTO {
  income_ranges: FilterIncomeRangeResponse[];
    total_pages?: number;
    total_count: number;
  
  constructor(
    income_ranges: (IncomeRange & { income_range_id?: number })[],
    total_count: number,
    total_pages?: number  ) {
    this.income_ranges = income_ranges.map((income_range) => ({
          ...income_range,
          id: income_range?.id,
created_at: income_range?.created_at,
updated_at: income_range?.updated_at,
income_range_id: income_range?.income_range_id,
applicants: income_range?.applicants?.map((applicant) => ({
            ...applicant,
            id: applicant?.id,
created_at: applicant?.created_at,
updated_at: applicant?.updated_at,
full_name: applicant?.full_name,
furigana: applicant?.furigana,
phone_number: applicant?.phone_number,
birthdate: applicant?.birthdate,
location_id: applicant?.location_id,
address: applicant?.address,
income_range_id: applicant?.income_range_id,
applicant_languages: applicant?.applicant_languages?.map((applicant_language) => ({
            ...applicant_language,
            id: applicant_language?.id,
created_at: applicant_language?.created_at,
updated_at: applicant_language?.updated_at,
proficiency: applicant_language?.proficiency,
language_id: applicant_language?.language_id,
applicant_id: applicant_language?.applicant_id
          })),
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
email: applicant?.email,
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
job_applications: applicant?.job_applications?.map((job_application) => ({
            ...job_application,
            id: job_application?.id,
created_at: job_application?.created_at,
updated_at: job_application?.updated_at,
applicant_id: job_application?.applicant_id,
job_opening_id: job_application?.job_opening_id,
status: job_application?.status,
approached_by_scout: job_application?.approached_by_scout
          })),
job_opening_favorites: applicant?.job_opening_favorites?.map((job_opening_favorite) => ({
            ...job_opening_favorite,
            id: job_opening_favorite?.id,
created_at: job_opening_favorite?.created_at,
updated_at: job_opening_favorite?.updated_at,
job_opening_id: job_opening_favorite?.job_opening_id
          })),
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
skills: applicant?.skills?.map((skill) => ({
            ...skill,
            id: skill?.id,
created_at: skill?.created_at,
updated_at: skill?.updated_at,
name: skill?.name,
applicant_id: skill?.applicant_id
          }))
          })),
name: income_range?.name,
job_openings: income_range?.job_openings?.map((job_opening) => ({
            ...job_opening,
            id: job_opening?.id,
created_at: job_opening?.created_at,
updated_at: job_opening?.updated_at,
deployment: job_opening?.department,
position: job_opening?.position,
occupation_type_id: job_opening?.occupation_type_id,
location_id: job_opening?.location_id,
income_range_id: job_opening?.income_range_id,
job_description: job_opening?.job_description,
is_remote_available: job_opening?.is_remote_available,
employment_status_id: job_opening?.employment_status_id,
company_id: job_opening?.company_id,
trial_period: job_opening?.trial_period,
working_hours: job_opening?.working_hours,
avg_overtime_hours: job_opening?.avg_overtime_hours,
trial_period_conditions: job_opening?.trial_period_conditions,
workplace: job_opening?.workplace,
qualification: job_opening?.qualification,
benefits: job_opening?.benefits,
vacation: job_opening?.vacation,
bonus: job_opening?.bonus,
promotion: job_opening?.promotion,
appeal_point: job_opening?.appeal_point,
passive_smoking_countermeasure_id: job_opening?.passive_smoking_countermeasure_id,
career_direction_id: job_opening?.career_direction_id,
job_title_id: job_opening?.job_title_id,
job_applications: job_opening?.job_applications?.map((job_application) => ({
            ...job_application,
            id: job_application?.id,
created_at: job_application?.created_at,
updated_at: job_application?.updated_at,
applicant_id: job_application?.applicant_id,
job_opening_id: job_application?.job_opening_id,
status: job_application?.status
          })),
job_opening_favorites: job_opening?.job_opening_favorites?.map((job_opening_favorite) => ({
            ...job_opening_favorite,
            id: job_opening_favorite?.id,
created_at: job_opening_favorite?.created_at,
updated_at: job_opening_favorite?.updated_at,
job_opening_id: job_opening_favorite?.job_opening_id
          })),
job_opening_valued_competencies: job_opening?.job_opening_valued_competencies?.map((job_opening_valued_competency) => ({
            ...job_opening_valued_competency,
            id: job_opening_valued_competency?.id,
created_at: job_opening_valued_competency?.created_at,
updated_at: job_opening_valued_competency?.updated_at,
job_opening_id: job_opening_valued_competency?.job_opening_id,
valued_competency_id: job_opening_valued_competency?.valued_competency_id
          })),
future_career_path: job_opening?.future_career_path,
trending_keywords: job_opening?.trending_keywords,
business_trip_availability: job_opening?.business_trip_availability,
transfers: job_opening?.transfers,
publication_start_date: job_opening?.publication_start_date,
publication_end_date: job_opening?.publication_end_date,
slug: job_opening?.slug,
image: job_opening?.image,
is_recommended: job_opening?.is_recommended
          }))
        }));
        this.total_pages = total_pages;
        this.total_count = total_count;
  }
}
