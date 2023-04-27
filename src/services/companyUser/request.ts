
import { serviceFetch, objectToFormData } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { CompanyUserModel } from "@models/companyUser";


    
    export const DefaultFilterCompanyUserQueryKey:[string, string, string] = ["CompanyUser", "filter", "/api/company_users"];    
    

  export type FilterCompanyUserRequestBody = {
    company_users: {
        company_id?: number;
full_name?: string;
position?: string;
email?: string;
role?: string;
phone_number?: string;

      };
pagination_page?: number;
pagination_limit?: number;
  };

  export type FilterCompanyUserResponseBody = {
    total_pages: number;
company_users: Omit<CompanyUserModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at'>[];
  };

    
    
    export const filterCompanyUserApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterCompanyUserRequestBody> | undefined>>      
    ): Promise<FilterCompanyUserResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/company_users", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    
    export const DefaultShowCompanyUserQueryKey:[string, string, string] = ["CompanyUser", "show", "/api/company_users/:id"];    
    

  export type ShowCompanyUserRequestBody = {
    id: string;
  };

  export type ShowCompanyUserResponseBody = {
    company_user: Omit<CompanyUserModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at'>;
  };

    
    
    export const showCompanyUserApi = async (
      context: QueryFunctionContext<DefaultQueryKey<ShowCompanyUserRequestBody | undefined>>      
    ): Promise<ShowCompanyUserResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/company_users/:id", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    

  export type CreateCompanyUserRequestBody = {
    company_users: {
        company_id?: number;
full_name?: string;
position?: string;
photo?: any;
email?: string;
role?: string;
phone_number?: string;

      };
  };

  export type CreateCompanyUserResponseBody = {
    company_user: Omit<CompanyUserModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at'>;
error_object: any;
  };

  
    export const createCompanyUserApi = async (
      body: CreateCompanyUserRequestBody
    ): Promise<CreateCompanyUserResponseBody> => {      
            const formData = objectToFormData(body);
      
      return serviceFetch({
        url: getRoute("/api/company_users", body),
        method: "POST",
        data: formData,
      });
    };
    

    

  export type UpdateCompanyUserRequestBody = {
    id: string;
company_users: {
        company_id?: number;
full_name?: string;
position?: string;
photo?: any;
email?: string;
role?: string;
phone_number?: string;

      };
  };

  export type UpdateCompanyUserResponseBody = {
    company_user: Omit<CompanyUserModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at'>;
error_object: any;
  };

  
    export const updateCompanyUserApi = async (
      body: UpdateCompanyUserRequestBody
    ): Promise<UpdateCompanyUserResponseBody> => {      
            const formData = objectToFormData(body);
      
      return serviceFetch({
        url: getRoute("/api/company_users/:id", body),
        method: "PUT",
        data: formData,
      });
    };
    

    

  export type DeleteCompanyUserRequestBody = {
    id: string;
  };

  export type DeleteCompanyUserResponseBody = {
      };

  
    export const deleteCompanyUserApi = async (
      body: DeleteCompanyUserRequestBody
    ): Promise<DeleteCompanyUserResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/company_users/:id", body),
        method: "DELETE",
        data: body,
      });
    };
    



  
