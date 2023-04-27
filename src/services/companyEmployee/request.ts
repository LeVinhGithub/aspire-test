
import { serviceFetch, objectToFormData } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { CompanyEmployeeModel } from "@models/companyEmployee";
import { CompanyModel } from "@models/company";


    
    export const DefaultFilterCompanyEmployeeQueryKey:[string, string, string] = ["CompanyEmployee", "filter", "/api/company_employees"];    
    

  export type FilterCompanyEmployeeRequestBody = {
    company_employees: {
        company_id?: number;
full_name?: string;
profile?: string;
is_high_rank_employee?: boolean;

      };
pagination_page?: number;
pagination_limit?: number;
companies: {
        name?: string;
location?: string;
launched_year?: string;
business_details?: string;
number_of_employees?: number;
industry_id?: number;
mission?: string;
vision?: string;
value?: string;
representative_profile?: string;
ipo?: string;
representative_name?: string;
slug?: string;
capital?: string;

      };
  };

  export type FilterCompanyEmployeeResponseBody = {
    total_pages: number;
company_employees: (CompanyEmployeeModel & { company: Omit<CompanyModel, 'listing_classification' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
 };
 })[];
  };

    
    
    export const filterCompanyEmployeeApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterCompanyEmployeeRequestBody> | undefined>>      
    ): Promise<FilterCompanyEmployeeResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/company_employees", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    
    export const DefaultShowCompanyEmployeeQueryKey:[string, string, string] = ["CompanyEmployee", "show", "/api/company_employees/:id"];    
    

  export type ShowCompanyEmployeeRequestBody = {
    id: string;
  };

  export type ShowCompanyEmployeeResponseBody = {
    company_employee: CompanyEmployeeModel & { company: Omit<CompanyModel, 'listing_classification' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
 };
 };
  };

    
    
    export const showCompanyEmployeeApi = async (
      context: QueryFunctionContext<DefaultQueryKey<ShowCompanyEmployeeRequestBody | undefined>>      
    ): Promise<ShowCompanyEmployeeResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/company_employees/:id", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    

  export type CreateCompanyEmployeeRequestBody = {
    company_employees: {
        company_id?: number;
full_name?: string;
profile?: string;
photo?: any;
is_high_rank_employee?: boolean;

      };
companies: {
        name?: string;
logo?: any;
location?: string;
launched_year?: string;
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

      };
  };

  export type CreateCompanyEmployeeResponseBody = {
    company_employee: CompanyEmployeeModel & { company: Omit<CompanyModel, 'listing_classification' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
 };
 };
error_object: any;
  };

  
    export const createCompanyEmployeeApi = async (
      body: CreateCompanyEmployeeRequestBody
    ): Promise<CreateCompanyEmployeeResponseBody> => {      
            const formData = objectToFormData(body);
      
      return serviceFetch({
        url: getRoute("/api/company_employees", body),
        method: "POST",
        data: formData,
      });
    };
    

    

  export type UpdateCompanyEmployeeRequestBody = {
    id: string;
company_employees: {
        company_id?: number;
full_name?: string;
profile?: string;
photo?: any;
is_high_rank_employee?: boolean;

      };
companies: {
        name?: string;
logo?: any;
location?: string;
launched_year?: string;
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

      };
  };

  export type UpdateCompanyEmployeeResponseBody = {
    company_employee: CompanyEmployeeModel & { company: Omit<CompanyModel, 'listing_classification' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
 };
 };
error_object: any;
  };

  
    export const updateCompanyEmployeeApi = async (
      body: UpdateCompanyEmployeeRequestBody
    ): Promise<UpdateCompanyEmployeeResponseBody> => {      
            const formData = objectToFormData(body);
      
      return serviceFetch({
        url: getRoute("/api/company_employees/:id", body),
        method: "PUT",
        data: formData,
      });
    };
    

    

  export type DeleteCompanyEmployeeRequestBody = {
    id: string;
  };

  export type DeleteCompanyEmployeeResponseBody = {
      };

  
    export const deleteCompanyEmployeeApi = async (
      body: DeleteCompanyEmployeeRequestBody
    ): Promise<DeleteCompanyEmployeeResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/company_employees/:id", body),
        method: "DELETE",
        data: body,
      });
    };
    



  
