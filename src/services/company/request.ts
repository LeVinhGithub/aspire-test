
import { serviceFetch, objectToFormData } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { CompanyModel } from "@models/company";
import { CompanyUserModel } from "@models/companyUser";
import { JobOpeningModel } from "@models/jobOpening";
import { JobApplicationModel } from "@models/jobApplication";
import { JobOpeningFavoriteModel } from "@models/jobOpeningFavorite";
import { JobOpeningValuedCompetencyModel } from "@models/jobOpeningValuedCompetency";
import { MessageModel } from "@models/message";
import { IndustryModel } from "@models/industry";
import { CompanyEmployeeModel } from "@models/companyEmployee";
import { RestrictionModel } from "@models/restriction";
import { ScoutTemplateModel } from "@models/scoutTemplate";
import { TargetListModel } from "@models/targetList";
import { TargetListApplicantModel } from "@models/targetListApplicant";
import { RecruitmentNoteModel } from "@models/recruitmentNote";


    
    export const DefaultFilterCompanyQueryKey:[string, string, string] = ["Company", "filter", "/api/companies"];    
    

  export type FilterCompanyRequestBody = {
    companies: {
        name?: string;
logo?: string;
location?: string;
year_founded?: string;
business_details?: string;
number_of_employees?: number;
industry_id?: number;
mission?: string;
vision?: string;
value?: string;
representative_photo?: string;
representative_profile?: string;
ipo?: string;
representative_name?: string;
slug?: string;
capital?: string;

      };
pagination_page?: number;
pagination_limit?: number;
restrictions: {
        company_id?: number;

      };
messages: {
        applicant_id?: number;
text?: string;
reply_to_message_id?: number;

      };
company_employees?: any;
  };

  export type FilterCompanyResponseBody = {
    total_pages: number;
companies: (Omit<CompanyModel, 'listing_classification'> & { company_users: Omit<CompanyUserModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'phone_number' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at'>[];
ipo: CompanyModel["listing_classification"];
job_openings: (Omit<JobOpeningModel, 'department' | 'is_recommended' | 'status' | 'pv'> & { deployment: JobOpeningModel["department"];
job_applications: Omit<JobApplicationModel, 'approached_by_scout' | 'user_name_disclosed'>[];
job_opening_favorites: JobOpeningFavoriteModel[];
job_opening_valued_competencies: JobOpeningValuedCompetencyModel[];
 })[];
messages: (Omit<MessageModel, 'is_from_applicant' | 'is_read'> & { company: Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
industry: Omit<IndustryModel, 'industry_group_id'> & { companies: (Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
messages: (Omit<MessageModel, 'is_from_applicant' | 'is_read'> & { company: Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
company_employees: Omit<CompanyEmployeeModel, 'full_name' | 'profile' | 'photo' | 'is_high_rank_employee'>[];
 };
 })[];
company_employees: Omit<CompanyEmployeeModel, 'full_name' | 'profile' | 'photo' | 'is_high_rank_employee'>[];
 })[];
 };
messages: (Omit<MessageModel, 'is_from_applicant' | 'is_read'> & { company: Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
company_employees: Omit<CompanyEmployeeModel, 'full_name' | 'profile' | 'photo' | 'is_high_rank_employee'>[];
 };
 })[];
company_employees: Omit<CompanyEmployeeModel, 'full_name' | 'profile' | 'photo' | 'is_high_rank_employee'>[];
 };
 })[];
restrictions: RestrictionModel[];
industry: Omit<IndustryModel, 'industry_group_id'> & { companies: (Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
messages: (Omit<MessageModel, 'is_from_applicant' | 'is_read'> & { company: Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
company_employees: Omit<CompanyEmployeeModel, 'full_name' | 'profile' | 'photo' | 'is_high_rank_employee'>[];
 };
 })[];
company_employees: Omit<CompanyEmployeeModel, 'full_name' | 'profile' | 'photo' | 'is_high_rank_employee'>[];
 })[];
 };
company_employees: CompanyEmployeeModel[];
 })[];
  };

    
    
    export const filterCompanyApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterCompanyRequestBody> | undefined>>      
    ): Promise<FilterCompanyResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/companies", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    
    export const DefaultShowCompanyQueryKey:[string, string, string] = ["Company", "show", "/api/companies/:id"];    
    

  export type ShowCompanyRequestBody = {
    id: string;
  };

  export type ShowCompanyResponseBody = {
    company: Omit<CompanyModel, 'listing_classification'> & { company_users: Omit<CompanyUserModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'phone_number' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at'>[];
ipo: CompanyModel["listing_classification"];
job_openings: (Omit<JobOpeningModel, 'department' | 'is_recommended' | 'status' | 'pv'> & { deployment: JobOpeningModel["department"];
job_applications: Omit<JobApplicationModel, 'approached_by_scout' | 'user_name_disclosed'>[];
job_opening_favorites: JobOpeningFavoriteModel[];
job_opening_valued_competencies: JobOpeningValuedCompetencyModel[];
 })[];
messages: (Omit<MessageModel, 'is_from_applicant' | 'is_read'> & { company: Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
industry: Omit<IndustryModel, 'industry_group_id'> & { companies: (Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
messages: (Omit<MessageModel, 'is_from_applicant' | 'is_read'> & { company: Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
company_employees: Omit<CompanyEmployeeModel, 'full_name' | 'profile' | 'photo' | 'is_high_rank_employee'>[];
 };
 })[];
company_employees: Omit<CompanyEmployeeModel, 'full_name' | 'profile' | 'photo' | 'is_high_rank_employee'>[];
 })[];
 };
messages: (Omit<MessageModel, 'is_from_applicant' | 'is_read'> & { company: Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
company_employees: Omit<CompanyEmployeeModel, 'full_name' | 'profile' | 'photo' | 'is_high_rank_employee'>[];
 };
 })[];
company_employees: Omit<CompanyEmployeeModel, 'full_name' | 'profile' | 'photo' | 'is_high_rank_employee'>[];
 };
 })[];
restrictions: RestrictionModel[];
industry: Omit<IndustryModel, 'industry_group_id'> & { companies: (Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
messages: (Omit<MessageModel, 'is_from_applicant' | 'is_read'> & { company: Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
company_employees: Omit<CompanyEmployeeModel, 'full_name' | 'profile' | 'photo' | 'is_high_rank_employee'>[];
 };
 })[];
company_employees: Omit<CompanyEmployeeModel, 'full_name' | 'profile' | 'photo' | 'is_high_rank_employee'>[];
 })[];
 };
company_employees: CompanyEmployeeModel[];
scout_templates: ScoutTemplateModel[];
target_lists: (TargetListModel & { applicants: Omit<TargetListApplicantModel, 'id' | 'created_at' | 'updated_at' | 'target_list_id'>[];
 })[];
recruitment_notes: Omit<RecruitmentNoteModel, 'company_id'>[];
 };
  };

    
    
    export const showCompanyApi = async (
      context: QueryFunctionContext<DefaultQueryKey<ShowCompanyRequestBody | undefined>>      
    ): Promise<ShowCompanyResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/companies/:id", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    

  export type CreateCompanyRequestBody = {
    companies: {
        name?: string;
logo?: any;
location?: string;
year_founded?: string;
business_details?: string;
number_of_employees?: number;
industry_id?: number;
mission?: string;
vision?: string;
value?: string;
representative_photo?: any;
representative_profile?: string;
ipo?: string;
representative_name?: string;
slug?: string;
image?: any;
capital?: string;
business_id?: string;
name_furigana?: string;

      };
restrictions: {
        company_id?: number;

      };
messages: {
        applicant_id?: number;
text?: string;
attachment?: any;
reply_to_message_id?: number;

      };
company_employees?: any;
  };

  export type CreateCompanyResponseBody = {
    company: Omit<CompanyModel, 'listing_classification'> & { company_users: Omit<CompanyUserModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'phone_number' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at'>[];
ipo: CompanyModel["listing_classification"];
job_openings: (Omit<JobOpeningModel, 'department' | 'is_recommended' | 'status' | 'pv'> & { deployment: JobOpeningModel["department"];
job_applications: Omit<JobApplicationModel, 'approached_by_scout' | 'user_name_disclosed'>[];
job_opening_favorites: JobOpeningFavoriteModel[];
job_opening_valued_competencies: JobOpeningValuedCompetencyModel[];
 })[];
messages: (Omit<MessageModel, 'is_from_applicant' | 'is_read'> & { company: Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
industry: Omit<IndustryModel, 'industry_group_id'> & { companies: (Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
messages: (Omit<MessageModel, 'is_from_applicant' | 'is_read'> & { company: Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
company_employees: Omit<CompanyEmployeeModel, 'full_name' | 'profile' | 'photo' | 'is_high_rank_employee'>[];
 };
 })[];
company_employees: Omit<CompanyEmployeeModel, 'full_name' | 'profile' | 'photo' | 'is_high_rank_employee'>[];
 })[];
 };
messages: (Omit<MessageModel, 'is_from_applicant' | 'is_read'> & { company: Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
company_employees: Omit<CompanyEmployeeModel, 'full_name' | 'profile' | 'photo' | 'is_high_rank_employee'>[];
 };
 })[];
company_employees: Omit<CompanyEmployeeModel, 'full_name' | 'profile' | 'photo' | 'is_high_rank_employee'>[];
 };
 })[];
restrictions: RestrictionModel[];
industry: Omit<IndustryModel, 'industry_group_id'> & { companies: (Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
messages: (Omit<MessageModel, 'is_from_applicant' | 'is_read'> & { company: Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
company_employees: Omit<CompanyEmployeeModel, 'full_name' | 'profile' | 'photo' | 'is_high_rank_employee'>[];
 };
 })[];
company_employees: Omit<CompanyEmployeeModel, 'full_name' | 'profile' | 'photo' | 'is_high_rank_employee'>[];
 })[];
 };
company_employees: CompanyEmployeeModel[];
 };
error_object: any;
  };

  
    export const createCompanyApi = async (
      body: CreateCompanyRequestBody
    ): Promise<CreateCompanyResponseBody> => {      
            const formData = objectToFormData(body);
      
      return serviceFetch({
        url: getRoute("/api/companies", body),
        method: "POST",
        data: formData,
      });
    };
    

    

  export type UpdateCompanyRequestBody = {
    id: string;
companies: {
        name?: string;
logo?: string;
location?: string;
year_founded?: string;
business_details?: string;
number_of_employees?: number;
industry_id?: number;
mission?: string;
vision?: string;
value?: string;
representative_photo?: any;
representative_profile?: string;
ipo?: string;
representative_name?: string;
slug?: string;
image?: any;
capital?: string;
business_id?: string;
name_furigana?: string;

      };
restrictions: {
        company_id?: number;

      };
messages: {
        applicant_id?: number;
text?: string;
attachment?: any;
reply_to_message_id?: number;

      };
company_employees?: any;
  };

  export type UpdateCompanyResponseBody = {
    company: Omit<CompanyModel, 'listing_classification'> & { company_users: Omit<CompanyUserModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'phone_number' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at'>[];
ipo: CompanyModel["listing_classification"];
job_openings: (Omit<JobOpeningModel, 'department' | 'is_recommended' | 'status' | 'pv'> & { deployment: JobOpeningModel["department"];
job_applications: Omit<JobApplicationModel, 'approached_by_scout' | 'user_name_disclosed'>[];
job_opening_favorites: JobOpeningFavoriteModel[];
job_opening_valued_competencies: JobOpeningValuedCompetencyModel[];
 })[];
messages: (Omit<MessageModel, 'is_from_applicant' | 'is_read'> & { company: Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
industry: Omit<IndustryModel, 'industry_group_id'> & { companies: (Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
messages: (Omit<MessageModel, 'is_from_applicant' | 'is_read'> & { company: Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
company_employees: Omit<CompanyEmployeeModel, 'full_name' | 'profile' | 'photo' | 'is_high_rank_employee'>[];
 };
 })[];
company_employees: Omit<CompanyEmployeeModel, 'full_name' | 'profile' | 'photo' | 'is_high_rank_employee'>[];
 })[];
 };
messages: (Omit<MessageModel, 'is_from_applicant' | 'is_read'> & { company: Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
company_employees: Omit<CompanyEmployeeModel, 'full_name' | 'profile' | 'photo' | 'is_high_rank_employee'>[];
 };
 })[];
company_employees: Omit<CompanyEmployeeModel, 'full_name' | 'profile' | 'photo' | 'is_high_rank_employee'>[];
 };
 })[];
restrictions: RestrictionModel[];
industry: Omit<IndustryModel, 'industry_group_id'> & { companies: (Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
messages: (Omit<MessageModel, 'is_from_applicant' | 'is_read'> & { company: Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
company_employees: Omit<CompanyEmployeeModel, 'full_name' | 'profile' | 'photo' | 'is_high_rank_employee'>[];
 };
 })[];
company_employees: Omit<CompanyEmployeeModel, 'full_name' | 'profile' | 'photo' | 'is_high_rank_employee'>[];
 })[];
 };
company_employees: CompanyEmployeeModel[];
 };
error_object: any;
  };

  
    export const updateCompanyApi = async (
      body: UpdateCompanyRequestBody
    ): Promise<UpdateCompanyResponseBody> => {      
            const formData = objectToFormData(body);
      
      return serviceFetch({
        url: getRoute("/api/companies/:id", body),
        method: "PUT",
        data: formData,
      });
    };
    

    

  export type DeleteCompanyRequestBody = {
    id: string;
  };

  export type DeleteCompanyResponseBody = {
      };

  
    export const deleteCompanyApi = async (
      body: DeleteCompanyRequestBody
    ): Promise<DeleteCompanyResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/companies/:id", body),
        method: "DELETE",
        data: body,
      });
    };
    



  
