
import { serviceFetch } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { ApplicantSchoolModel } from "@models/applicantSchool";


    
    export const DefaultFilterApplicantSchoolQueryKey:[string, string, string] = ["ApplicantSchool", "filter", "/api/applicant_schools"];    
    

  export type FilterApplicantSchoolRequestBody = {
    applicant_schools: {
        graduation_date?: Date;
name?: string;
degree?: string;
major?: string;
school_type_id?: number;
applicant_id?: number;

      };
pagination_page?: number;
pagination_limit?: number;
  };

  export type FilterApplicantSchoolResponseBody = {
    total_pages: number;
applicant_schools: ApplicantSchoolModel[];
  };

    
    
    export const filterApplicantSchoolApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterApplicantSchoolRequestBody> | undefined>>      
    ): Promise<FilterApplicantSchoolResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/applicant_schools", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    

  export type CreateApplicantSchoolRequestBody = {
    applicant_schools: {
        graduation_date?: Date;
name?: string;
degree?: string;
major?: string;
school_type_id?: number;
applicant_id?: number;

      };
  };

  export type CreateApplicantSchoolResponseBody = {
    applicant_school: ApplicantSchoolModel;
error_object: any;
  };

  
    export const createApplicantSchoolApi = async (
      body: CreateApplicantSchoolRequestBody
    ): Promise<CreateApplicantSchoolResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/applicant_schools", body),
        method: "POST",
        data: body,
      });
    };
    

    

  export type UpdateApplicantSchoolRequestBody = {
    id: string;
applicant_schools: {
        graduation_date?: Date;
name?: string;
degree?: string;
major?: string;
school_type_id?: number;
applicant_id?: number;

      };
  };

  export type UpdateApplicantSchoolResponseBody = {
    applicant_school: ApplicantSchoolModel;
error_object: any;
  };

  
    export const updateApplicantSchoolApi = async (
      body: UpdateApplicantSchoolRequestBody
    ): Promise<UpdateApplicantSchoolResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/applicant_schools/:id", body),
        method: "PUT",
        data: body,
      });
    };
    

    

  export type DeleteApplicantSchoolRequestBody = {
    id: string;
  };

  export type DeleteApplicantSchoolResponseBody = {
      };

  
    export const deleteApplicantSchoolApi = async (
      body: DeleteApplicantSchoolRequestBody
    ): Promise<DeleteApplicantSchoolResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/applicant_schools/:id", body),
        method: "DELETE",
        data: body,
      });
    };
    



  
