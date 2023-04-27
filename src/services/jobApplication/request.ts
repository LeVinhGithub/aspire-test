
import { serviceFetch } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { JobApplicationModel } from "@models/jobApplication";


    
    export const DefaultFilterJobApplicationQueryKey:[string, string, string] = ["JobApplication", "filter", "/api/job_applications"];    
    

  export type FilterJobApplicationRequestBody = {
    job_applications: {
        applicant_id?: number;
job_opening_id?: number;
status?: string;

      };
pagination_page?: number;
pagination_limit?: number;
  };

  export type FilterJobApplicationResponseBody = {
    total_pages: number;
job_applications: Omit<JobApplicationModel, 'approached_by_scout' | 'user_name_disclosed'>[];
  };

    
    
    export const filterJobApplicationApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterJobApplicationRequestBody> | undefined>>      
    ): Promise<FilterJobApplicationResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/job_applications", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    
    export const DefaultShowJobApplicationQueryKey:[string, string, string] = ["JobApplication", "show", "/api/job_applications/:id"];    
    

  export type ShowJobApplicationRequestBody = {
    id: string;
  };

  export type ShowJobApplicationResponseBody = {
    job_application: Omit<JobApplicationModel, 'approached_by_scout' | 'user_name_disclosed'>;
  };

    
    
    export const showJobApplicationApi = async (
      context: QueryFunctionContext<DefaultQueryKey<ShowJobApplicationRequestBody | undefined>>      
    ): Promise<ShowJobApplicationResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/job_applications/:id", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    

  export type CreateJobApplicationRequestBody = {
    job_applications: {
        applicant_id?: number;
job_opening_id?: number;
status?: string;

      };
  };

  export type CreateJobApplicationResponseBody = {
    job_application: Omit<JobApplicationModel, 'approached_by_scout' | 'user_name_disclosed'>;
error_object: any;
  };

  
    export const createJobApplicationApi = async (
      body: CreateJobApplicationRequestBody
    ): Promise<CreateJobApplicationResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/job_applications", body),
        method: "POST",
        data: body,
      });
    };
    

    

  export type UpdateJobApplicationRequestBody = {
    id: string;
job_applications: {
        applicant_id?: number;
job_opening_id?: number;
status?: string;

      };
  };

  export type UpdateJobApplicationResponseBody = {
    job_application: Omit<JobApplicationModel, 'approached_by_scout' | 'user_name_disclosed'>;
error_object: any;
  };

  
    export const updateJobApplicationApi = async (
      body: UpdateJobApplicationRequestBody
    ): Promise<UpdateJobApplicationResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/job_applications/:id", body),
        method: "PUT",
        data: body,
      });
    };
    

    

  export type DeleteJobApplicationRequestBody = {
    id: string;
  };

  export type DeleteJobApplicationResponseBody = {
      };

  
    export const deleteJobApplicationApi = async (
      body: DeleteJobApplicationRequestBody
    ): Promise<DeleteJobApplicationResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/job_applications/:id", body),
        method: "DELETE",
        data: body,
      });
    };
    



  
