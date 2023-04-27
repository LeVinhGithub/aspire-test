
import { serviceFetch, objectToFormData } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { JobOpeningModel } from "@models/jobOpening";
import { JobApplicationModel } from "@models/jobApplication";
import { JobOpeningFavoriteModel } from "@models/jobOpeningFavorite";
import { JobOpeningValuedCompetencyModel } from "@models/jobOpeningValuedCompetency";
import { CompanyModel } from "@models/company";
import { JobTitleModel } from "@models/jobTitle";


    
    export const DefaultFilterJobOpeningQueryKey:[string, string, string] = ["JobOpening", "filter", "/api/job_openings"];    
    

  export type FilterJobOpeningRequestBody = {
    job_openings: {
        department?: string;
position?: string;
occupation_type_id?: number;
overseas_territory_id?: number;
income_range_id?: number;
job_description?: string;
is_remote_available?: boolean;
employment_status_id?: number;
company_id?: number;
trial_period?: string;
working_hours?: string;
avg_overtime_hours?: string;
trial_period_conditions?: string;
workplace?: string;
qualification?: string;
benefits?: string;
vacation?: string;
bonus?: string;
bonuses?: string;
promotion?: string;
appeal_point?: string;
passive_smoking_countermeasure_id?: number;
career_direction_id?: number;
job_title_id?: number;
career_path?: string;
trending_keywords?: string;
business_trip_availability?: boolean;
transfers?: boolean;
publication_start_date?: Date;
publication_end_date?: Date;
slug?: string;
is_recommended?: boolean;
status?: string;
pv?: number;

      };
pagination_page?: number;
pagination_limit?: number;
  };

  export type FilterJobOpeningResponseBody = {
    total_pages: number;
job_openings: (Omit<JobOpeningModel, 'department' | 'is_recommended'> & { deployment: JobOpeningModel["department"];
job_applications: Omit<JobApplicationModel, 'approached_by_scout' | 'user_name_disclosed'>[];
job_opening_favorites: Omit<JobOpeningFavoriteModel, 'applicant_id'>[];
job_opening_valued_competencies: JobOpeningValuedCompetencyModel[];
company: Omit<CompanyModel, 'id' | 'created_at' | 'updated_at' | 'name' | 'logo' | 'location' | 'launched_year' | 'business_details' | 'number_of_employees' | 'industry_id' | 'mission' | 'vision' | 'value' | 'representative_photo' | 'representative_profile' | 'listing_classification' | 'representative_name' | 'slug' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'>;
job_title: JobTitleModel;
 })[];
  };

    
    
    export const filterJobOpeningApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterJobOpeningRequestBody> | undefined>>      
    ): Promise<FilterJobOpeningResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/job_openings", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    
    export const DefaultShowJobOpeningQueryKey:[string, string, string] = ["JobOpening", "show", "/api/job_openings/:id"];    
    

  export type ShowJobOpeningRequestBody = {
    id: string;
  };

  export type ShowJobOpeningResponseBody = {
    job_opening: Omit<JobOpeningModel, 'department' | 'is_recommended'> & { deployment: JobOpeningModel["department"];
job_applications: Omit<JobApplicationModel, 'approached_by_scout' | 'user_name_disclosed'>[];
job_opening_favorites: Omit<JobOpeningFavoriteModel, 'applicant_id'>[];
job_opening_valued_competencies: JobOpeningValuedCompetencyModel[];
company: Omit<CompanyModel, 'id' | 'created_at' | 'updated_at' | 'name' | 'logo' | 'location' | 'launched_year' | 'business_details' | 'number_of_employees' | 'industry_id' | 'mission' | 'vision' | 'value' | 'representative_photo' | 'representative_profile' | 'listing_classification' | 'representative_name' | 'slug' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'>;
job_title: JobTitleModel;
 };
  };

    
    
    export const showJobOpeningApi = async (
      context: QueryFunctionContext<DefaultQueryKey<ShowJobOpeningRequestBody | undefined>>      
    ): Promise<ShowJobOpeningResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/job_openings/:id", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    

  export type CreateJobOpeningRequestBody = {
    job_openings: {
        department?: string;
position?: string;
occupation_type_id?: number;
overseas_territory_id?: number;
income_range_id?: number;
job_description?: string;
is_remote_available?: boolean;
employment_status_id?: number;
company_id?: number;
trial_period?: string;
working_hours?: string;
avg_overtime_hours?: string;
trial_period_conditions?: string;
workplace?: string;
qualification?: string;
benefits?: string;
vacation?: string;
bonus?: string;
bonuses?: string;
promotion?: string;
appeal_point?: string;
passive_smoking_countermeasure_id?: number;
career_direction_id?: number;
job_title_id?: number;
career_path?: string;
trending_keywords?: string;
business_trip_availability?: boolean;
transfers?: boolean;
publication_start_date?: Date;
publication_end_date?: Date;
slug?: string;
image?: any;
is_recommended?: boolean;
status?: string;
pv?: number;

      };
  };

  export type CreateJobOpeningResponseBody = {
    job_opening: Omit<JobOpeningModel, 'department' | 'is_recommended'> & { deployment: JobOpeningModel["department"];
job_applications: Omit<JobApplicationModel, 'approached_by_scout' | 'user_name_disclosed'>[];
job_opening_favorites: Omit<JobOpeningFavoriteModel, 'applicant_id'>[];
job_opening_valued_competencies: JobOpeningValuedCompetencyModel[];
job_title: JobTitleModel;
 };
error_object: any;
  };

  
    export const createJobOpeningApi = async (
      body: CreateJobOpeningRequestBody
    ): Promise<CreateJobOpeningResponseBody> => {      
            const formData = objectToFormData(body);
      
      return serviceFetch({
        url: getRoute("/api/job_openings", body),
        method: "POST",
        data: formData,
      });
    };
    

    

  export type UpdateJobOpeningRequestBody = {
    id: string;
job_openings: {
        department?: string;
position?: string;
occupation_type_id?: number;
overseas_territory_id?: number;
income_range_id?: number;
job_description?: string;
is_remote_available?: boolean;
employment_status_id?: number;
company_id?: number;
trial_period?: string;
working_hours?: string;
avg_overtime_hours?: string;
trial_period_conditions?: string;
workplace?: string;
qualification?: string;
benefits?: string;
vacation?: string;
bonus?: string;
bonuses?: string;
promotion?: string;
appeal_point?: string;
passive_smoking_countermeasure_id?: number;
career_direction_id?: number;
job_title_id?: number;
career_path?: string;
trending_keywords?: string;
business_trip_availability?: boolean;
transfers?: boolean;
publication_start_date?: Date;
publication_end_date?: Date;
slug?: string;
image?: any;
status?: string;
pv?: number;
is_recommended?: boolean;

      };
  };

  export type UpdateJobOpeningResponseBody = {
    job_opening: Omit<JobOpeningModel, 'department' | 'is_recommended'> & { deployment: JobOpeningModel["department"];
job_applications: Omit<JobApplicationModel, 'approached_by_scout' | 'user_name_disclosed'>[];
job_opening_favorites: Omit<JobOpeningFavoriteModel, 'applicant_id'>[];
job_opening_valued_competencies: JobOpeningValuedCompetencyModel[];
job_title: JobTitleModel;
 };
error_object: any;
  };

  
    export const updateJobOpeningApi = async (
      body: UpdateJobOpeningRequestBody
    ): Promise<UpdateJobOpeningResponseBody> => {      
            const formData = objectToFormData(body);
      
      return serviceFetch({
        url: getRoute("/api/job_openings/:id", body),
        method: "PUT",
        data: formData,
      });
    };
    

    

  export type DeleteJobOpeningRequestBody = {
    id: string;
  };

  export type DeleteJobOpeningResponseBody = {
    job_opening: JobOpeningModel & { job_title: Omit<JobTitleModel, 'updated_at' | 'job_group_id'>;
 };
  };

  
    export const deleteJobOpeningApi = async (
      body: DeleteJobOpeningRequestBody
    ): Promise<DeleteJobOpeningResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/job_openings/:id", body),
        method: "DELETE",
        data: body,
      });
    };
    



  
