
import { serviceFetch } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { RestrictionModel } from "@models/restriction";
import { CompanyModel } from "@models/company";
import { ApplicantModel } from "@models/applicant";


    
    export const DefaultFilterRestrictionQueryKey:[string, string, string] = ["Restriction", "filter", "/api/restrictions"];    
    

  export type FilterRestrictionRequestBody = {
    restrictions: {
        company_id?: number;
applicant_id?: number;
reason?: string;

      };
pagination_page?: number;
pagination_limit?: number;
  };

  export type FilterRestrictionResponseBody = {
    total_pages: number;
restrictions: (RestrictionModel & { company: Omit<CompanyModel, 'listing_classification' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
 };
applicant: Omit<ApplicantModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at' | 'is_onboarded' | 'notes' | 'current_company_name' | 'current_company_department' | 'current_company_position' | 'confirmation_email_resent_count' | 'number_of_companies' | 'is_suspended' | 'desired_info' | 'management_experience_years'> & { restrictions: (Omit<RestrictionModel, 'reason'> & { applicant: Omit<ApplicantModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at' | 'is_onboarded' | 'notes' | 'current_company_name' | 'current_company_department' | 'current_company_position' | 'confirmation_email_resent_count' | 'number_of_companies' | 'is_suspended' | 'desired_info' | 'management_experience_years'> & { restrictions: Omit<RestrictionModel, 'reason'>[];
 };
 })[];
 };
 })[];
  };

    
    
    export const filterRestrictionApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterRestrictionRequestBody> | undefined>>      
    ): Promise<FilterRestrictionResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/restrictions", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    
    export const DefaultShowRestrictionQueryKey:[string, string, string] = ["Restriction", "show", "/api/restrictions/:id"];    
    

  export type ShowRestrictionRequestBody = {
    id: string;
  };

  export type ShowRestrictionResponseBody = {
    restriction: RestrictionModel & { company: Omit<CompanyModel, 'listing_classification' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
 };
applicant: Omit<ApplicantModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at' | 'is_onboarded' | 'notes' | 'current_company_name' | 'current_company_department' | 'current_company_position' | 'confirmation_email_resent_count' | 'number_of_companies' | 'is_suspended' | 'desired_info' | 'management_experience_years'> & { restrictions: (Omit<RestrictionModel, 'reason'> & { applicant: Omit<ApplicantModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at' | 'is_onboarded' | 'notes' | 'current_company_name' | 'current_company_department' | 'current_company_position' | 'confirmation_email_resent_count' | 'number_of_companies' | 'is_suspended' | 'desired_info' | 'management_experience_years'> & { restrictions: Omit<RestrictionModel, 'reason'>[];
 };
 })[];
 };
 };
  };

    
    
    export const showRestrictionApi = async (
      context: QueryFunctionContext<DefaultQueryKey<ShowRestrictionRequestBody | undefined>>      
    ): Promise<ShowRestrictionResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/restrictions/:id", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    

  export type CreateRestrictionRequestBody = {
    restrictions: {
        company_id?: number;
applicant_id?: number;
reason?: string;

      };
  };

  export type CreateRestrictionResponseBody = {
    restriction: RestrictionModel & { company: Omit<CompanyModel, 'listing_classification' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
 };
applicant: Omit<ApplicantModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at' | 'is_onboarded' | 'notes' | 'current_company_name' | 'current_company_department' | 'current_company_position' | 'confirmation_email_resent_count' | 'number_of_companies' | 'is_suspended' | 'desired_info' | 'management_experience_years'> & { restrictions: (Omit<RestrictionModel, 'reason'> & { applicant: Omit<ApplicantModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at' | 'is_onboarded' | 'notes' | 'current_company_name' | 'current_company_department' | 'current_company_position' | 'confirmation_email_resent_count' | 'number_of_companies' | 'is_suspended' | 'desired_info' | 'management_experience_years'> & { restrictions: Omit<RestrictionModel, 'reason'>[];
 };
 })[];
 };
 };
error_object: any;
  };

  
    export const createRestrictionApi = async (
      body: CreateRestrictionRequestBody
    ): Promise<CreateRestrictionResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/restrictions", body),
        method: "POST",
        data: body,
      });
    };
    

    

  export type UpdateRestrictionRequestBody = {
    id: string;
restrictions: {
        company_id?: number;
applicant_id?: number;
reason?: string;

      };
  };

  export type UpdateRestrictionResponseBody = {
    restriction: RestrictionModel & { company: Omit<CompanyModel, 'listing_classification' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
 };
applicant: Omit<ApplicantModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at' | 'is_onboarded' | 'notes' | 'current_company_name' | 'current_company_department' | 'current_company_position' | 'confirmation_email_resent_count' | 'number_of_companies' | 'is_suspended' | 'desired_info' | 'management_experience_years'> & { restrictions: (Omit<RestrictionModel, 'reason'> & { applicant: Omit<ApplicantModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at' | 'is_onboarded' | 'notes' | 'current_company_name' | 'current_company_department' | 'current_company_position' | 'confirmation_email_resent_count' | 'number_of_companies' | 'is_suspended' | 'desired_info' | 'management_experience_years'> & { restrictions: Omit<RestrictionModel, 'reason'>[];
 };
 })[];
 };
 };
error_object: any;
  };

  
    export const updateRestrictionApi = async (
      body: UpdateRestrictionRequestBody
    ): Promise<UpdateRestrictionResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/restrictions/:id", body),
        method: "PUT",
        data: body,
      });
    };
    

    

  export type DeleteRestrictionRequestBody = {
    id: string;
  };

  export type DeleteRestrictionResponseBody = {
      };

  
    export const deleteRestrictionApi = async (
      body: DeleteRestrictionRequestBody
    ): Promise<DeleteRestrictionResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/restrictions/:id", body),
        method: "DELETE",
        data: body,
      });
    };
    



  
