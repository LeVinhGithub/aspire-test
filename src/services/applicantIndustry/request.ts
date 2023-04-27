
import { serviceFetch } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { ApplicantIndustryModel } from "@models/applicantIndustry";


    
    export const DefaultFilterApplicantIndustryQueryKey:[string, string, string] = ["ApplicantIndustry", "filter", "/api/applicant_industries"];    
    

  export type FilterApplicantIndustryRequestBody = {
    applicant_industries: {
        industry_id?: number;
applicant_id?: number;

      };
pagination_page?: number;
pagination_limit?: number;
  };

  export type FilterApplicantIndustryResponseBody = {
    total_pages: number;
applicant_industries: ApplicantIndustryModel[];
  };

    
    
    export const filterApplicantIndustryApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterApplicantIndustryRequestBody> | undefined>>      
    ): Promise<FilterApplicantIndustryResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/applicant_industries", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    

  export type CreateApplicantIndustryRequestBody = {
    applicant_industries: {
        industry_id?: number;
applicant_id?: number;

      };
  };

  export type CreateApplicantIndustryResponseBody = {
    applicant_industry: ApplicantIndustryModel;
error_object: any;
  };

  
    export const createApplicantIndustryApi = async (
      body: CreateApplicantIndustryRequestBody
    ): Promise<CreateApplicantIndustryResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/applicant_industries", body),
        method: "POST",
        data: body,
      });
    };
    

    

  export type UpdateApplicantIndustryRequestBody = {
    id: string;
applicant_industries: {
        industry_id?: number;
applicant_id?: number;

      };
  };

  export type UpdateApplicantIndustryResponseBody = {
    applicant_industry: ApplicantIndustryModel;
error_object: any;
  };

  
    export const updateApplicantIndustryApi = async (
      body: UpdateApplicantIndustryRequestBody
    ): Promise<UpdateApplicantIndustryResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/applicant_industries/:id", body),
        method: "PUT",
        data: body,
      });
    };
    

    

  export type DeleteApplicantIndustryRequestBody = {
    id: string;
  };

  export type DeleteApplicantIndustryResponseBody = {
      };

  
    export const deleteApplicantIndustryApi = async (
      body: DeleteApplicantIndustryRequestBody
    ): Promise<DeleteApplicantIndustryResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/applicant_industries/:id", body),
        method: "DELETE",
        data: body,
      });
    };
    



  
