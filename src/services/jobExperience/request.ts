
import { serviceFetch } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { JobExperienceModel } from "@models/jobExperience";


    
    export const DefaultFilterJobExperienceQueryKey:[string, string, string] = ["JobExperience", "filter", "/api/job_experiences"];    
    

  export type FilterJobExperienceRequestBody = {
    job_experiences: {
        company_name?: string;
start_date?: Date;
end_date?: Date;
applicant_id?: number;
job_title_id?: number;

      };
pagination_page?: number;
pagination_limit?: number;
  };

  export type FilterJobExperienceResponseBody = {
    total_pages: number;
job_experiences: JobExperienceModel[];
  };

    
    
    export const filterJobExperienceApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterJobExperienceRequestBody> | undefined>>      
    ): Promise<FilterJobExperienceResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/job_experiences", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    

  export type CreateJobExperienceRequestBody = {
    job_experiences: {
        company_name?: string;
start_date?: Date;
end_date?: Date;
applicant_id?: number;
job_title_id?: number;

      };
  };

  export type CreateJobExperienceResponseBody = {
    job_experience: JobExperienceModel;
error_object: any;
  };

  
    export const createJobExperienceApi = async (
      body: CreateJobExperienceRequestBody
    ): Promise<CreateJobExperienceResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/job_experiences", body),
        method: "POST",
        data: body,
      });
    };
    

    

  export type UpdateJobExperienceRequestBody = {
    id: string;
job_experiences: {
        company_name?: string;
start_date?: Date;
end_date?: Date;
applicant_id?: number;
job_title_id?: number;

      };
  };

  export type UpdateJobExperienceResponseBody = {
    job_experience: JobExperienceModel;
error_object: any;
  };

  
    export const updateJobExperienceApi = async (
      body: UpdateJobExperienceRequestBody
    ): Promise<UpdateJobExperienceResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/job_experiences/:id", body),
        method: "PUT",
        data: body,
      });
    };
    

    

  export type DeleteJobExperienceRequestBody = {
    id: string;
  };

  export type DeleteJobExperienceResponseBody = {
      };

  
    export const deleteJobExperienceApi = async (
      body: DeleteJobExperienceRequestBody
    ): Promise<DeleteJobExperienceResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/job_experiences/:id", body),
        method: "DELETE",
        data: body,
      });
    };
    



  
