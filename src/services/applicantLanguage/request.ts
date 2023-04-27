
import { serviceFetch } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { ApplicantLanguageModel } from "@models/applicantLanguage";


    
    export const DefaultFilterApplicantLanguageQueryKey:[string, string, string] = ["ApplicantLanguage", "filter", "/api/applicant_languages"];    
    

  export type FilterApplicantLanguageRequestBody = {
    applicant_languages: {
        proficiency?: string;
language_id?: number;
applicant_id?: number;

      };
pagination_page?: number;
pagination_limit?: number;
  };

  export type FilterApplicantLanguageResponseBody = {
    total_pages: number;
applicant_languages: Omit<ApplicantLanguageModel, 'other_language'>[];
  };

    
    
    export const filterApplicantLanguageApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterApplicantLanguageRequestBody> | undefined>>      
    ): Promise<FilterApplicantLanguageResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/applicant_languages", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    

  export type CreateApplicantLanguageRequestBody = {
    applicant_languages: {
        proficiency?: string;
language_id?: number;
applicant_id?: number;

      };
  };

  export type CreateApplicantLanguageResponseBody = {
    applicant_language: Omit<ApplicantLanguageModel, 'other_language'>;
error_object: any;
  };

  
    export const createApplicantLanguageApi = async (
      body: CreateApplicantLanguageRequestBody
    ): Promise<CreateApplicantLanguageResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/applicant_languages", body),
        method: "POST",
        data: body,
      });
    };
    

    

  export type UpdateApplicantLanguageRequestBody = {
    id: string;
applicant_languages: {
        proficiency?: string;
language_id?: number;
applicant_id?: number;

      };
  };

  export type UpdateApplicantLanguageResponseBody = {
    applicant_language: Omit<ApplicantLanguageModel, 'other_language'>;
error_object: any;
  };

  
    export const updateApplicantLanguageApi = async (
      body: UpdateApplicantLanguageRequestBody
    ): Promise<UpdateApplicantLanguageResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/applicant_languages/:id", body),
        method: "PUT",
        data: body,
      });
    };
    

    

  export type DeleteApplicantLanguageRequestBody = {
    id: string;
  };

  export type DeleteApplicantLanguageResponseBody = {
      };

  
    export const deleteApplicantLanguageApi = async (
      body: DeleteApplicantLanguageRequestBody
    ): Promise<DeleteApplicantLanguageResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/applicant_languages/:id", body),
        method: "DELETE",
        data: body,
      });
    };
    



  
