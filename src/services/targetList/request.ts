
import { serviceFetch } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { TargetListModel } from "@models/targetList";
import { CompanyModel } from "@models/company";
import { TargetListApplicantModel } from "@models/targetListApplicant";
import { ApplicantModel } from "@models/applicant";
import { ApplicantIndustryModel } from "@models/applicantIndustry";
import { IndustryModel } from "@models/industry";
import { ApplicantSchoolModel } from "@models/applicantSchool";
import { SchoolTypeModel } from "@models/schoolType";
import { IncomeRangeModel } from "@models/incomeRange";


    
    export const DefaultFilterTargetListQueryKey:[string, string, string] = ["TargetList", "filter", "/api/target_lists"];    
    

  export type FilterTargetListRequestBody = {
    target_lists: {
        title?: string;
company_id?: number;

      };
pagination_page?: number;
pagination_limit?: number;
  };

  export type FilterTargetListResponseBody = {
    total_pages: number;
target_lists: (TargetListModel & { company: CompanyModel;
 })[];
  };

    
    
    export const filterTargetListApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterTargetListRequestBody> | undefined>>      
    ): Promise<FilterTargetListResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/target_lists", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    
    export const DefaultShowTargetListQueryKey:[string, string, string] = ["TargetList", "show", "/api/target_lists/:id"];    
    

  export type ShowTargetListRequestBody = {
    id: string;
  };

  export type ShowTargetListResponseBody = {
    target_list: TargetListModel & { company: CompanyModel;
target_list_applicants: (Omit<TargetListApplicantModel, 'id' | 'created_at' | 'updated_at' | 'target_list_id' | 'applicant_id'> & { applicant: Omit<ApplicantModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at' | 'confirmation_email_resent_count' | 'desired_info' | 'management_experience_years'> & { applicant_industries: (Omit<ApplicantIndustryModel, 'applicant_id'> & { industry: Omit<IndustryModel, 'id' | 'created_at' | 'updated_at' | 'industry_group_id'>;
 })[];
applicant_schools: (Omit<ApplicantSchoolModel, 'applicant_id'> & { school_type: Omit<SchoolTypeModel, 'id' | 'created_at' | 'updated_at'>;
 })[];
income_range: Omit<IncomeRangeModel, 'id' | 'created_at' | 'updated_at'>;
 };
 })[];
 };
  };

    
    
    export const showTargetListApi = async (
      context: QueryFunctionContext<DefaultQueryKey<ShowTargetListRequestBody | undefined>>      
    ): Promise<ShowTargetListResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/target_lists/:id", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    

  export type CreateTargetListRequestBody = {
    target_lists: {
        title?: string;
company_id?: number;

      };
  };

  export type CreateTargetListResponseBody = {
    target_list: TargetListModel & { company: CompanyModel;
 };
error_object: any;
  };

  
    export const createTargetListApi = async (
      body: CreateTargetListRequestBody
    ): Promise<CreateTargetListResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/target_lists", body),
        method: "POST",
        data: body,
      });
    };
    

    

  export type UpdateTargetListRequestBody = {
    id: string;
target_lists: {
        title?: string;
company_id?: number;

      };
  };

  export type UpdateTargetListResponseBody = {
    target_list: TargetListModel & { company: CompanyModel;
 };
error_object: any;
  };

  
    export const updateTargetListApi = async (
      body: UpdateTargetListRequestBody
    ): Promise<UpdateTargetListResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/target_lists/:id", body),
        method: "PUT",
        data: body,
      });
    };
    

    

  export type DeleteTargetListRequestBody = {
    id: string;
  };

  export type DeleteTargetListResponseBody = {
      };

  
    export const deleteTargetListApi = async (
      body: DeleteTargetListRequestBody
    ): Promise<DeleteTargetListResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/target_lists/:id", body),
        method: "DELETE",
        data: body,
      });
    };
    



  
