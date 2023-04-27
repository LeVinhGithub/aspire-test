
import { serviceFetch } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { JobGroupModel } from "@models/jobGroup";
import { JobTitleModel } from "@models/jobTitle";
import { JobOpeningModel } from "@models/jobOpening";
import { JobApplicationModel } from "@models/jobApplication";
import { JobOpeningFavoriteModel } from "@models/jobOpeningFavorite";
import { JobOpeningValuedCompetencyModel } from "@models/jobOpeningValuedCompetency";
import { JobExperienceModel } from "@models/jobExperience";


    
    export const DefaultFilterJobGroupQueryKey:[string, string, string] = ["JobGroup", "filter", "/api/job_groups"];    
    

  export type FilterJobGroupRequestBody = {
    job_groups: {
        name?: string;

      };
pagination_page?: number;
pagination_limit?: number;
  };

  export type FilterJobGroupResponseBody = {
    total_pages: number;
job_groups: (JobGroupModel & { job_titles: (JobTitleModel & { job_openings: (Omit<JobOpeningModel, 'department' | 'status' | 'pv'> & { deployment: JobOpeningModel["department"];
job_applications: Omit<JobApplicationModel, 'user_name_disclosed'>[];
job_opening_favorites: Omit<JobOpeningFavoriteModel, 'applicant_id'>[];
job_opening_valued_competencies: JobOpeningValuedCompetencyModel[];
 })[];
job_experiences: JobExperienceModel[];
 })[];
 })[];
  };

    
    
    export const filterJobGroupApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterJobGroupRequestBody> | undefined>>      
    ): Promise<FilterJobGroupResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/job_groups", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    



  
