
import { Company, ListingClassificationEnum as CompanyListingClassificationEnum } from "entities/companies";
import { NumberField, StringFieldOptional, FileFieldOptional, NumberFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";
import { FileSystemStoredFile } from "nestjs-form-data";
import { StorageFile } from "entities/storage_files";
import { RoleEnum as CompanyUserRoleEnum } from "entities/company_users";
import { StatusEnum as JobApplicationStatusEnum } from "entities/job_applications";
import { ReasonEnum as RestrictionReasonEnum } from "entities/restrictions";

export class UpdateCompanyParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class UpdateCompanyRequest {
  @StringFieldOptional({ maxLength: 255, minLength: 0})
  name?: string;
@FileFieldOptional({ fileSize: 5, fileTypes: ["image"]})
  logo?: FileSystemStoredFile;
@StringFieldOptional({ maxLength: 255, minLength: 0})
  location?: string;
@StringFieldOptional({ maxLength: 4, minLength: 0})
  year_founded?: string;
@StringFieldOptional({ maxLength: 1000, minLength: 0})
  business_details?: string;
@NumberFieldOptional({ int: true, minimum: 1, maximum: 2147483646})
  number_of_employees?: number;
@NumberFieldOptional({ int: true})
  industry_id?: number;
@StringFieldOptional({ maxLength: 1000, minLength: 0})
  mission?: string;
@StringFieldOptional({ maxLength: 1000, minLength: 0})
  vision?: string;
@StringFieldOptional({ maxLength: 1000, minLength: 0})
  value?: string;
@FileFieldOptional({ fileTypes: ["image"]})
  representative_photo?: FileSystemStoredFile;
@StringFieldOptional({ maxLength: 1000, minLength: 0})
  representative_profile?: string;
@StringFieldOptional({})
  ipo?: `${CompanyListingClassificationEnum}`;
@StringFieldOptional({ maxLength: 255, minLength: 0})
  representative_name?: string;
@StringFieldOptional({ maxLength: 255, minLength: 0})
  slug?: string;
@FileFieldOptional({ fileTypes: ["image"]})
  image?: FileSystemStoredFile;
@StringFieldOptional({ maxLength: 255, minLength: 0})
  capital?: string;
@StringFieldOptional({ maxLength: 255, minLength: 0})
  business_id?: string;
@StringFieldOptional({ maxLength: 255, minLength: 0})
  name_furigana?: string;

}
export class UpdateRestrictionRequest {
  @NumberFieldOptional({})
  company_id?: number;

}
export class UpdateMessageRequest {
  @NumberFieldOptional({})
  applicant_id?: number;
@StringFieldOptional({})
  text?: string;
@FileFieldOptional({})
  attachment?: FileSystemStoredFile;
@NumberFieldOptional({})
  reply_to_message_id?: number;

}
export class UpdateCompanyEmployeeRequest {
  
}
export class UpdateCompanyRequestDTO {
  @ObjectFieldOptional(UpdateCompanyRequest)
  companies?: UpdateCompanyRequest;
@ObjectFieldOptional(UpdateRestrictionRequest)
  restrictions?: UpdateRestrictionRequest;
@ObjectFieldOptional(UpdateMessageRequest)
  messages?: UpdateMessageRequest;
@ObjectFieldOptional(UpdateCompanyEmployeeRequest)
  company_employees?: UpdateCompanyEmployeeRequest;

}
export class CompanyUserUpdateCompanyResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_id: number;
full_name: string;
position: string;
photo: StorageFile;
email: string;
role: `${CompanyUserRoleEnum}`;

}
export class JobApplicationJobOpeningUpdateCompanyResponse {
  id: number;
created_at: Date;
updated_at: Date;
applicant_id: number;
job_opening_id: number;
status: `${JobApplicationStatusEnum}`;

}
export class JobOpeningFavoriteJobOpeningUpdateCompanyResponse {
  id: number;
created_at: Date;
updated_at: Date;
job_opening_id: number;
applicant_id: number;

}
export class JobOpeningValuedCompetencyJobOpeningUpdateCompanyResponse {
  id: number;
created_at: Date;
updated_at: Date;
job_opening_id: number;
valued_competency_id: number;

}
export class JobOpeningUpdateCompanyResponse {
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
job_applications: JobApplicationJobOpeningUpdateCompanyResponse[];
job_opening_favorites: JobOpeningFavoriteJobOpeningUpdateCompanyResponse[];
job_opening_valued_competencies: JobOpeningValuedCompetencyJobOpeningUpdateCompanyResponse[];
future_career_path: string;
trending_keywords: string;
business_trip_availability: boolean;
transfers: boolean;
publication_start_date: Date;
publication_end_date: Date;
slug: string;
image: StorageFile;

}
export class CompanyEmployeeCompanyMessageCompanyIndustryCompanyMessageUpdateCompanyResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_id: number;

}
export class CompanyMessageCompanyIndustryCompanyMessageUpdateCompanyResponse {
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
company_employees: CompanyEmployeeCompanyMessageCompanyIndustryCompanyMessageUpdateCompanyResponse[];

}
export class MessageCompanyIndustryCompanyMessageUpdateCompanyResponse {
  id: number;
created_at: Date;
updated_at: Date;
applicant_id: number;
text: string;
attachment: StorageFile;
reply_to_message_id: number;
company_id: number;
company: CompanyMessageCompanyIndustryCompanyMessageUpdateCompanyResponse;

}
export class CompanyEmployeeCompanyIndustryCompanyMessageUpdateCompanyResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_id: number;

}
export class CompanyIndustryCompanyMessageUpdateCompanyResponse {
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
messages: MessageCompanyIndustryCompanyMessageUpdateCompanyResponse[];
company_employees: CompanyEmployeeCompanyIndustryCompanyMessageUpdateCompanyResponse[];

}
export class IndustryCompanyMessageUpdateCompanyResponse {
  id: number;
created_at: Date;
updated_at: Date;
name: string;
companies: CompanyIndustryCompanyMessageUpdateCompanyResponse[];

}
export class CompanyEmployeeCompanyMessageCompanyMessageUpdateCompanyResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_id: number;

}
export class CompanyMessageCompanyMessageUpdateCompanyResponse {
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
company_employees: CompanyEmployeeCompanyMessageCompanyMessageUpdateCompanyResponse[];

}
export class MessageCompanyMessageUpdateCompanyResponse {
  id: number;
created_at: Date;
updated_at: Date;
applicant_id: number;
text: string;
attachment: StorageFile;
reply_to_message_id: number;
company_id: number;
company: CompanyMessageCompanyMessageUpdateCompanyResponse;

}
export class CompanyEmployeeCompanyMessageUpdateCompanyResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_id: number;

}
export class CompanyMessageUpdateCompanyResponse {
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
industry: IndustryCompanyMessageUpdateCompanyResponse;
messages: MessageCompanyMessageUpdateCompanyResponse[];
company_employees: CompanyEmployeeCompanyMessageUpdateCompanyResponse[];

}
export class MessageUpdateCompanyResponse {
  id: number;
created_at: Date;
updated_at: Date;
applicant_id: number;
text: string;
attachment: StorageFile;
reply_to_message_id: number;
company_id: number;
company: CompanyMessageUpdateCompanyResponse;

}
export class RestrictionUpdateCompanyResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_id: number;
applicant_id: number;
reason: `${RestrictionReasonEnum}`;

}
export class CompanyEmployeeCompanyMessageCompanyIndustryUpdateCompanyResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_id: number;

}
export class CompanyMessageCompanyIndustryUpdateCompanyResponse {
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
company_employees: CompanyEmployeeCompanyMessageCompanyIndustryUpdateCompanyResponse[];

}
export class MessageCompanyIndustryUpdateCompanyResponse {
  id: number;
created_at: Date;
updated_at: Date;
applicant_id: number;
text: string;
attachment: StorageFile;
reply_to_message_id: number;
company_id: number;
company: CompanyMessageCompanyIndustryUpdateCompanyResponse;

}
export class CompanyEmployeeCompanyIndustryUpdateCompanyResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_id: number;

}
export class CompanyIndustryUpdateCompanyResponse {
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
messages: MessageCompanyIndustryUpdateCompanyResponse[];
company_employees: CompanyEmployeeCompanyIndustryUpdateCompanyResponse[];

}
export class IndustryUpdateCompanyResponse {
  id: number;
created_at: Date;
updated_at: Date;
name: string;
companies: CompanyIndustryUpdateCompanyResponse[];

}
export class CompanyEmployeeUpdateCompanyResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_id: number;
full_name: string;
profile: string;
photo: StorageFile;
is_high_rank_employee: boolean;

}
export class UpdateCompanyResponse {
  id: number;
created_at: Date;
updated_at: Date;
name: string;
company_users: CompanyUserUpdateCompanyResponse[];
company_id: number;
logo: StorageFile;
location: string;
launched_year: string;
business_details: string;
number_of_employees: number;
industry_id: number;
mission: string;
vision: string;
representative_photo: StorageFile;
representative_profile: string;
ipo: `${CompanyListingClassificationEnum}`;
value: string;
job_openings: JobOpeningUpdateCompanyResponse[];
representative_name: string;
messages: MessageUpdateCompanyResponse[];
slug: string;
restrictions: RestrictionUpdateCompanyResponse[];
industry: IndustryUpdateCompanyResponse;
image: StorageFile;
capital: string;
company_employees: CompanyEmployeeUpdateCompanyResponse[];
business_id: string;
name_furigana: string;

}
export class UpdateErrorObjectResponse {
  
}

export class UpdateCompanyResponseDTO {
  
  company: UpdateCompanyResponse
    error_object: Object;
  
  
  constructor(
    company: Company & { company_id?: number },
    error_object?: Object  ) {
    this.company = { ...company, id: company?.id,
created_at: company?.created_at,
updated_at: company?.updated_at,
name: company?.name,
company_users: company?.company_users?.map((company_user) => ({
            ...company_user,
            id: company_user?.id,
created_at: company_user?.created_at,
updated_at: company_user?.updated_at,
company_id: company_user?.company_id,
full_name: company_user?.full_name,
position: company_user?.position,
photo: company_user?.photo,
email: company_user?.email,
role: company_user?.role
          })),
company_id: company?.company_id,
logo: company?.logo,
location: company?.location,
launched_year: company?.launched_year,
business_details: company?.business_details,
number_of_employees: company?.number_of_employees,
industry_id: company?.industry_id,
mission: company?.mission,
vision: company?.vision,
representative_photo: company?.representative_photo,
representative_profile: company?.representative_profile,
ipo: company?.listing_classification,
value: company?.value,
job_openings: company?.job_openings?.map((job_opening) => ({
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
job_opening_id: job_opening_favorite?.job_opening_id,
applicant_id: job_opening_favorite?.applicant_id
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
image: job_opening?.image
          })),
representative_name: company?.representative_name,
messages: company?.messages?.map((message) => ({
            ...message,
            id: message?.id,
created_at: message?.created_at,
updated_at: message?.updated_at,
applicant_id: message?.applicant_id,
text: message?.text,
attachment: message?.attachment,
reply_to_message_id: message?.reply_to_message_id,
company_id: message?.company_id,
company: {
            id: message?.company?.id,
created_at: message?.company?.created_at,
updated_at: message?.company?.updated_at,
name: message?.company?.name,
logo: message?.company?.logo,
location: message?.company?.location,
launched_year: message?.company?.launched_year,
business_details: message?.company?.business_details,
number_of_employees: message?.company?.number_of_employees,
industry_id: message?.company?.industry_id,
mission: message?.company?.mission,
vision: message?.company?.vision,
value: message?.company?.value,
representative_photo: message?.company?.representative_photo,
representative_profile: message?.company?.representative_profile,
ipo: message?.company?.listing_classification,
representative_name: message?.company?.representative_name,
slug: message?.company?.slug,
industry: {
            id: message?.company?.industry?.id,
created_at: message?.company?.industry?.created_at,
updated_at: message?.company?.industry?.updated_at,
name: message?.company?.industry?.name,
companies: message?.company?.industry?.companies?.map((company) => ({
            ...company,
            id: company?.id,
created_at: company?.created_at,
updated_at: company?.updated_at,
name: company?.name,
logo: company?.logo,
location: company?.location,
launched_year: company?.launched_year,
business_details: company?.business_details,
number_of_employees: company?.number_of_employees,
industry_id: company?.industry_id,
mission: company?.mission,
vision: company?.vision,
value: company?.value,
representative_photo: company?.representative_photo,
representative_profile: company?.representative_profile,
ipo: company?.listing_classification,
representative_name: company?.representative_name,
slug: company?.slug,
messages: company?.messages?.map((message) => ({
            ...message,
            id: message?.id,
created_at: message?.created_at,
updated_at: message?.updated_at,
applicant_id: message?.applicant_id,
text: message?.text,
attachment: message?.attachment,
reply_to_message_id: message?.reply_to_message_id,
company_id: message?.company_id,
company: {
            id: message?.company?.id,
created_at: message?.company?.created_at,
updated_at: message?.company?.updated_at,
name: message?.company?.name,
logo: message?.company?.logo,
location: message?.company?.location,
launched_year: message?.company?.launched_year,
business_details: message?.company?.business_details,
number_of_employees: message?.company?.number_of_employees,
industry_id: message?.company?.industry_id,
mission: message?.company?.mission,
vision: message?.company?.vision,
value: message?.company?.value,
representative_photo: message?.company?.representative_photo,
representative_profile: message?.company?.representative_profile,
ipo: message?.company?.listing_classification,
representative_name: message?.company?.representative_name,
slug: message?.company?.slug,
company_employees: message?.company?.company_employees?.map((company_employee) => ({
            ...company_employee,
            id: company_employee?.id,
created_at: company_employee?.created_at,
updated_at: company_employee?.updated_at,
company_id: company_employee?.company_id
          }))
          }
          })),
company_employees: company?.company_employees?.map((company_employee) => ({
            ...company_employee,
            id: company_employee?.id,
created_at: company_employee?.created_at,
updated_at: company_employee?.updated_at,
company_id: company_employee?.company_id
          }))
          }))
          },
messages: message?.company?.messages?.map((message) => ({
            ...message,
            id: message?.id,
created_at: message?.created_at,
updated_at: message?.updated_at,
applicant_id: message?.applicant_id,
text: message?.text,
attachment: message?.attachment,
reply_to_message_id: message?.reply_to_message_id,
company_id: message?.company_id,
company: {
            id: message?.company?.id,
created_at: message?.company?.created_at,
updated_at: message?.company?.updated_at,
name: message?.company?.name,
logo: message?.company?.logo,
location: message?.company?.location,
launched_year: message?.company?.launched_year,
business_details: message?.company?.business_details,
number_of_employees: message?.company?.number_of_employees,
industry_id: message?.company?.industry_id,
mission: message?.company?.mission,
vision: message?.company?.vision,
value: message?.company?.value,
representative_photo: message?.company?.representative_photo,
representative_profile: message?.company?.representative_profile,
ipo: message?.company?.listing_classification,
representative_name: message?.company?.representative_name,
slug: message?.company?.slug,
company_employees: message?.company?.company_employees?.map((company_employee) => ({
            ...company_employee,
            id: company_employee?.id,
created_at: company_employee?.created_at,
updated_at: company_employee?.updated_at,
company_id: company_employee?.company_id
          }))
          }
          })),
company_employees: message?.company?.company_employees?.map((company_employee) => ({
            ...company_employee,
            id: company_employee?.id,
created_at: company_employee?.created_at,
updated_at: company_employee?.updated_at,
company_id: company_employee?.company_id
          }))
          }
          })),
slug: company?.slug,
restrictions: company?.restrictions?.map((restriction) => ({
            ...restriction,
            id: restriction?.id,
created_at: restriction?.created_at,
updated_at: restriction?.updated_at,
company_id: restriction?.company_id,
applicant_id: restriction?.applicant_id,
reason: restriction?.reason
          })),
industry: {
            id: company?.industry?.id,
created_at: company?.industry?.created_at,
updated_at: company?.industry?.updated_at,
name: company?.industry?.name,
companies: company?.industry?.companies?.map((company) => ({
            ...company,
            id: company?.id,
created_at: company?.created_at,
updated_at: company?.updated_at,
name: company?.name,
logo: company?.logo,
location: company?.location,
launched_year: company?.launched_year,
business_details: company?.business_details,
number_of_employees: company?.number_of_employees,
industry_id: company?.industry_id,
mission: company?.mission,
vision: company?.vision,
value: company?.value,
representative_photo: company?.representative_photo,
representative_profile: company?.representative_profile,
ipo: company?.listing_classification,
representative_name: company?.representative_name,
slug: company?.slug,
messages: company?.messages?.map((message) => ({
            ...message,
            id: message?.id,
created_at: message?.created_at,
updated_at: message?.updated_at,
applicant_id: message?.applicant_id,
text: message?.text,
attachment: message?.attachment,
reply_to_message_id: message?.reply_to_message_id,
company_id: message?.company_id,
company: {
            id: message?.company?.id,
created_at: message?.company?.created_at,
updated_at: message?.company?.updated_at,
name: message?.company?.name,
logo: message?.company?.logo,
location: message?.company?.location,
launched_year: message?.company?.launched_year,
business_details: message?.company?.business_details,
number_of_employees: message?.company?.number_of_employees,
industry_id: message?.company?.industry_id,
mission: message?.company?.mission,
vision: message?.company?.vision,
value: message?.company?.value,
representative_photo: message?.company?.representative_photo,
representative_profile: message?.company?.representative_profile,
ipo: message?.company?.listing_classification,
representative_name: message?.company?.representative_name,
slug: message?.company?.slug,
company_employees: message?.company?.company_employees?.map((company_employee) => ({
            ...company_employee,
            id: company_employee?.id,
created_at: company_employee?.created_at,
updated_at: company_employee?.updated_at,
company_id: company_employee?.company_id
          }))
          }
          })),
company_employees: company?.company_employees?.map((company_employee) => ({
            ...company_employee,
            id: company_employee?.id,
created_at: company_employee?.created_at,
updated_at: company_employee?.updated_at,
company_id: company_employee?.company_id
          }))
          }))
          },
image: company?.image,
capital: company?.capital,
company_employees: company?.company_employees?.map((company_employee) => ({
            ...company_employee,
            id: company_employee?.id,
created_at: company_employee?.created_at,
updated_at: company_employee?.updated_at,
company_id: company_employee?.company_id,
full_name: company_employee?.full_name,
profile: company_employee?.profile,
photo: company_employee?.photo,
is_high_rank_employee: company_employee?.is_high_rank_employee
          })),
business_id: company?.business_id,
name_furigana: company?.name_furigana };
        this.error_object = error_object;
      }
  }
