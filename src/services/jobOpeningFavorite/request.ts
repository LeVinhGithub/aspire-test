
import { serviceFetch } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { JobOpeningFavoriteModel } from "@models/jobOpeningFavorite";


    
    export const DefaultFilterJobOpeningFavoriteQueryKey:[string, string, string] = ["JobOpeningFavorite", "filter", "/api/job_opening_favorites"];    
    

  export type FilterJobOpeningFavoriteRequestBody = {
    job_opening_favorites: {
        job_opening_id?: number;
applicant_id?: number;

      };
pagination_page?: number;
pagination_limit?: number;
  };

  export type FilterJobOpeningFavoriteResponseBody = {
    total_pages: number;
job_opening_favorites: JobOpeningFavoriteModel[];
  };

    
    
    export const filterJobOpeningFavoriteApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterJobOpeningFavoriteRequestBody> | undefined>>      
    ): Promise<FilterJobOpeningFavoriteResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/job_opening_favorites", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    
    export const DefaultShowJobOpeningFavoriteQueryKey:[string, string, string] = ["JobOpeningFavorite", "show", "/api/job_opening_favorites/:id"];    
    

  export type ShowJobOpeningFavoriteRequestBody = {
    id: string;
  };

  export type ShowJobOpeningFavoriteResponseBody = {
    job_opening_favorite: JobOpeningFavoriteModel;
  };

    
    
    export const showJobOpeningFavoriteApi = async (
      context: QueryFunctionContext<DefaultQueryKey<ShowJobOpeningFavoriteRequestBody | undefined>>      
    ): Promise<ShowJobOpeningFavoriteResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/job_opening_favorites/:id", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    

  export type CreateJobOpeningFavoriteRequestBody = {
    job_opening_favorites: {
        job_opening_id?: number;
applicant_id?: number;

      };
  };

  export type CreateJobOpeningFavoriteResponseBody = {
    job_opening_favorite: JobOpeningFavoriteModel;
error_object: any;
  };

  
    export const createJobOpeningFavoriteApi = async (
      body: CreateJobOpeningFavoriteRequestBody
    ): Promise<CreateJobOpeningFavoriteResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/job_opening_favorites", body),
        method: "POST",
        data: body,
      });
    };
    

    

  export type UpdateJobOpeningFavoriteRequestBody = {
    id: string;
job_opening_favorites: {
        job_opening_id?: number;
applicant_id?: number;

      };
  };

  export type UpdateJobOpeningFavoriteResponseBody = {
    job_opening_favorite: JobOpeningFavoriteModel;
error_object: any;
  };

  
    export const updateJobOpeningFavoriteApi = async (
      body: UpdateJobOpeningFavoriteRequestBody
    ): Promise<UpdateJobOpeningFavoriteResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/job_opening_favorites/:id", body),
        method: "PUT",
        data: body,
      });
    };
    

    

  export type DeleteJobOpeningFavoriteRequestBody = {
    id: string;
  };

  export type DeleteJobOpeningFavoriteResponseBody = {
      };

  
    export const deleteJobOpeningFavoriteApi = async (
      body: DeleteJobOpeningFavoriteRequestBody
    ): Promise<DeleteJobOpeningFavoriteResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/job_opening_favorites/:id", body),
        method: "DELETE",
        data: body,
      });
    };
    



  
