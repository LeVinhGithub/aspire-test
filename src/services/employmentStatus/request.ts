
import { serviceFetch } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { EmploymentStatusModel } from "@models/employmentStatus";
import { JobOpeningModel } from "@models/jobOpening";
import { JobApplicationModel } from "@models/jobApplication";
import { JobOpeningFavoriteModel } from "@models/jobOpeningFavorite";
import { JobOpeningValuedCompetencyModel } from "@models/jobOpeningValuedCompetency";


    
    export const DefaultFilterEmploymentStatusQueryKey:[string, string, string] = ["EmploymentStatus", "filter", "/api/employment_statuses"];    
    

  export type FilterEmploymentStatusRequestBody = {
    employment_statuses: {
        name?: string;

      };
pagination_page?: number;
pagination_limit?: number;
  };

  export type FilterEmploymentStatusResponseBody = {
    total_pages: number;
employment_statuses: (EmploymentStatusModel & { job_openings: (Omit<JobOpeningModel, 'department' | 'status' | 'pv'> & { deployment: JobOpeningModel["department"];
job_applications: Omit<JobApplicationModel, 'user_name_disclosed'>[];
job_opening_favorites: Omit<JobOpeningFavoriteModel, 'applicant_id'>[];
job_opening_valued_competencies: JobOpeningValuedCompetencyModel[];
 })[];
 })[];
  };

    
    
    export const filterEmploymentStatusApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterEmploymentStatusRequestBody> | undefined>>      
    ): Promise<FilterEmploymentStatusResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/employment_statuses", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    



  
