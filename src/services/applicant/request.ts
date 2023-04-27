
import { serviceFetch, objectToFormData } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { ApplicantModel } from "@models/applicant";
import { ApplicantLanguageModel } from "@models/applicantLanguage";
import { ApplicantSchoolModel } from "@models/applicantSchool";
import { ApplicantIndustryModel } from "@models/applicantIndustry";
import { MessageModel } from "@models/message";
import { JobApplicationModel } from "@models/jobApplication";
import { JobOpeningFavoriteModel } from "@models/jobOpeningFavorite";
import { JobExperienceModel } from "@models/jobExperience";
import { RestrictionModel } from "@models/restriction";
import { TargetListApplicantModel } from "@models/targetListApplicant";


    
    export const DefaultFilterApplicantQueryKey:[string, string, string] = ["Applicant", "filter", "/api/applicants"];    
    

  export type FilterApplicantRequestBody = {
    applicants: {
        full_name?: string;
furigana?: string;
phone_number?: string;
dob?: Date;
overseas_territory_id?: number;
address?: string;
income_range_id?: number;
availability?: string;
resume_file?: string;
description?: string;
management_experience_id?: number;
email?: string;
gender?: string;
is_onboarded?: boolean;
notes?: string;
current_company_name?: string;
current_company_department?: string;
current_company_position?: string;
confirmation_email_resent_count?: number;
number_of_companies?: number;
is_suspended?: boolean;
desired_info?: string;
management_experience_years?: string;

      };
pagination_page?: number;
pagination_limit?: number;
restrictions: {
        company_id?: number;
applicant_id?: number;

      };
  };

  export type FilterApplicantResponseBody = {
    total_pages: number;
applicants: (Omit<ApplicantModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at' | 'is_onboarded' | 'notes' | 'current_company_name' | 'current_company_department' | 'current_company_position' | 'confirmation_email_resent_count' | 'number_of_companies' | 'is_suspended' | 'desired_info' | 'management_experience_years'> & { applicant_languages: Omit<ApplicantLanguageModel, 'other_language'>[];
applicant_schools: ApplicantSchoolModel[];
applicant_industries: ApplicantIndustryModel[];
messages: Omit<MessageModel, 'is_from_applicant' | 'is_read'>[];
job_applications: Omit<JobApplicationModel, 'approached_by_scout' | 'user_name_disclosed'>[];
job_opening_favorites: Omit<JobOpeningFavoriteModel, 'applicant_id'>[];
job_experiences: JobExperienceModel[];
restrictions: (RestrictionModel & { applicant: Omit<ApplicantModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at' | 'is_onboarded' | 'notes' | 'current_company_name' | 'current_company_department' | 'current_company_position' | 'confirmation_email_resent_count' | 'number_of_companies' | 'is_suspended' | 'desired_info' | 'management_experience_years'> & { restrictions: (Omit<RestrictionModel, 'reason'> & { applicant: Omit<ApplicantModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at' | 'is_onboarded' | 'notes' | 'current_company_name' | 'current_company_department' | 'current_company_position' | 'confirmation_email_resent_count' | 'number_of_companies' | 'is_suspended' | 'desired_info' | 'management_experience_years'>;
 })[];
 };
 })[];
target_lists: Omit<TargetListApplicantModel, 'id' | 'created_at' | 'updated_at' | 'applicant_id'>[];
 })[];
  };

    
    
    export const filterApplicantApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterApplicantRequestBody> | undefined>>      
    ): Promise<FilterApplicantResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/applicants", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    
    export const DefaultShowApplicantQueryKey:[string, string, string] = ["Applicant", "show", "/api/applicants/:id"];    
    

  export type ShowApplicantRequestBody = {
    id: string;
  };

  export type ShowApplicantResponseBody = {
    applicant: Omit<ApplicantModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at' | 'is_onboarded' | 'notes' | 'current_company_name' | 'current_company_department' | 'current_company_position' | 'confirmation_email_resent_count' | 'number_of_companies' | 'is_suspended' | 'desired_info' | 'management_experience_years'> & { applicant_languages: Omit<ApplicantLanguageModel, 'other_language'>[];
applicant_schools: ApplicantSchoolModel[];
applicant_industries: ApplicantIndustryModel[];
messages: Omit<MessageModel, 'is_from_applicant' | 'is_read'>[];
job_applications: Omit<JobApplicationModel, 'approached_by_scout' | 'user_name_disclosed'>[];
job_opening_favorites: Omit<JobOpeningFavoriteModel, 'applicant_id'>[];
job_experiences: JobExperienceModel[];
restrictions: (RestrictionModel & { applicant: Omit<ApplicantModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at' | 'is_onboarded' | 'notes' | 'current_company_name' | 'current_company_department' | 'current_company_position' | 'confirmation_email_resent_count' | 'number_of_companies' | 'is_suspended' | 'desired_info' | 'management_experience_years'> & { restrictions: (Omit<RestrictionModel, 'reason'> & { applicant: Omit<ApplicantModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at' | 'is_onboarded' | 'notes' | 'current_company_name' | 'current_company_department' | 'current_company_position' | 'confirmation_email_resent_count' | 'number_of_companies' | 'is_suspended' | 'desired_info' | 'management_experience_years'>;
 })[];
 };
 })[];
target_lists: Omit<TargetListApplicantModel, 'id' | 'created_at' | 'updated_at' | 'applicant_id'>[];
 };
  };

    
    
    export const showApplicantApi = async (
      context: QueryFunctionContext<DefaultQueryKey<ShowApplicantRequestBody | undefined>>      
    ): Promise<ShowApplicantResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/applicants/:id", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    

  export type CreateApplicantRequestBody = {
    applicants: {
        full_name?: string;
furigana?: string;
phone_number?: string;
dob?: Date;
overseas_territory_id?: number;
address?: string;
income_range_id?: number;
availability?: string;
resume_file?: any;
description?: string;
management_experience_id?: number;
email?: string;
gender?: string;
is_onboarded?: boolean;
notes?: string;
current_company_name?: string;
current_company_department?: string;
current_company_position?: string;
confirmation_email_resent_count?: number;
number_of_companies?: number;
is_suspended?: boolean;
desired_info?: string;
management_experience_years?: string;

      };
restrictions: {
        company_id?: number;
applicant_id?: number;

      };
  };

  export type CreateApplicantResponseBody = {
    applicant: Omit<ApplicantModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at' | 'is_onboarded' | 'notes' | 'current_company_name' | 'current_company_department' | 'current_company_position' | 'confirmation_email_resent_count' | 'number_of_companies' | 'is_suspended' | 'desired_info' | 'management_experience_years'> & { applicant_languages: Omit<ApplicantLanguageModel, 'other_language'>[];
applicant_schools: ApplicantSchoolModel[];
applicant_industries: ApplicantIndustryModel[];
messages: Omit<MessageModel, 'is_from_applicant' | 'is_read'>[];
job_applications: Omit<JobApplicationModel, 'approached_by_scout' | 'user_name_disclosed'>[];
job_opening_favorites: Omit<JobOpeningFavoriteModel, 'applicant_id'>[];
job_experiences: JobExperienceModel[];
restrictions: (RestrictionModel & { applicant: Omit<ApplicantModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at' | 'is_onboarded' | 'notes' | 'current_company_name' | 'current_company_department' | 'current_company_position' | 'confirmation_email_resent_count' | 'number_of_companies' | 'is_suspended' | 'desired_info' | 'management_experience_years'> & { restrictions: (Omit<RestrictionModel, 'reason'> & { applicant: Omit<ApplicantModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at' | 'is_onboarded' | 'notes' | 'current_company_name' | 'current_company_department' | 'current_company_position' | 'confirmation_email_resent_count' | 'number_of_companies' | 'is_suspended' | 'desired_info' | 'management_experience_years'>;
 })[];
 };
 })[];
 };
error_object: any;
  };

  
    export const createApplicantApi = async (
      body: CreateApplicantRequestBody
    ): Promise<CreateApplicantResponseBody> => {      
            const formData = objectToFormData(body);
      
      return serviceFetch({
        url: getRoute("/api/applicants", body),
        method: "POST",
        data: formData,
      });
    };
    

    

  export type UpdateApplicantRequestBody = {
    id: string;
applicants: {
        full_name?: string;
furigana?: string;
phone_number?: string;
dob?: Date;
overseas_territory_id?: number;
address?: string;
income_range_id?: number;
availability?: string;
resume_file?: any;
description?: string;
management_experience_id?: number;
email?: string;
gender?: string;
is_onboarded?: boolean;
notes?: string;
current_company_name?: string;
current_company_department?: string;
current_company_position?: string;
confirmation_email_resent_count?: number;
number_of_companies?: number;
is_suspended?: boolean;
desired_info?: string;
management_experience_years?: string;

      };
restrictions: {
        company_id?: number;
applicant_id?: number;

      };
  };

  export type UpdateApplicantResponseBody = {
    applicant: Omit<ApplicantModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at' | 'is_onboarded' | 'notes' | 'current_company_name' | 'current_company_department' | 'current_company_position' | 'confirmation_email_resent_count' | 'number_of_companies' | 'is_suspended' | 'desired_info' | 'management_experience_years'> & { applicant_languages: Omit<ApplicantLanguageModel, 'other_language'>[];
applicant_schools: ApplicantSchoolModel[];
applicant_industries: ApplicantIndustryModel[];
messages: Omit<MessageModel, 'is_from_applicant' | 'is_read'>[];
job_applications: Omit<JobApplicationModel, 'approached_by_scout' | 'user_name_disclosed'>[];
job_opening_favorites: Omit<JobOpeningFavoriteModel, 'applicant_id'>[];
job_experiences: JobExperienceModel[];
restrictions: (RestrictionModel & { applicant: Omit<ApplicantModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at' | 'is_onboarded' | 'notes' | 'current_company_name' | 'current_company_department' | 'current_company_position' | 'confirmation_email_resent_count' | 'number_of_companies' | 'is_suspended' | 'desired_info' | 'management_experience_years'> & { restrictions: (Omit<RestrictionModel, 'reason'> & { applicant: Omit<ApplicantModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at' | 'is_onboarded' | 'notes' | 'current_company_name' | 'current_company_department' | 'current_company_position' | 'confirmation_email_resent_count' | 'number_of_companies' | 'is_suspended' | 'desired_info' | 'management_experience_years'>;
 })[];
 };
 })[];
 };
error_object: any;
  };

  
    export const updateApplicantApi = async (
      body: UpdateApplicantRequestBody
    ): Promise<UpdateApplicantResponseBody> => {      
            const formData = objectToFormData(body);
      
      return serviceFetch({
        url: getRoute("/api/applicants/:id", body),
        method: "PUT",
        data: formData,
      });
    };
    

    

  export type DeleteApplicantRequestBody = {
    id: string;
  };

  export type DeleteApplicantResponseBody = {
      };

  
    export const deleteApplicantApi = async (
      body: DeleteApplicantRequestBody
    ): Promise<DeleteApplicantResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/applicants/:id", body),
        method: "DELETE",
        data: body,
      });
    };
    



  
