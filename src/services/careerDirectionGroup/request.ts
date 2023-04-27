
import { serviceFetch } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { CareerDirectionGroupModel } from "@models/careerDirectionGroup";
import { CareerDirectionModel } from "@models/careerDirection";
import { JobOpeningModel } from "@models/jobOpening";
import { JobApplicationModel } from "@models/jobApplication";
import { JobOpeningFavoriteModel } from "@models/jobOpeningFavorite";
import { JobOpeningValuedCompetencyModel } from "@models/jobOpeningValuedCompetency";


    
    export const DefaultFilterCareerDirectionGroupQueryKey:[string, string, string] = ["CareerDirectionGroup", "filter", "/api/career_direction_groups"];    
    

  export type FilterCareerDirectionGroupRequestBody = {
    career_direction_groups: {
        name?: string;

      };
pagination_page?: number;
pagination_limit?: number;
career_directions: {
        career_direction_group_id?: number;

      };
  };

  export type FilterCareerDirectionGroupResponseBody = {
    total_pages: number;
career_direction_groups: (CareerDirectionGroupModel & { career_directions: (CareerDirectionModel & { job_openings: (Omit<JobOpeningModel, 'department' | 'status' | 'pv'> & { deployment: JobOpeningModel["department"];
job_applications: Omit<JobApplicationModel, 'user_name_disclosed'>[];
job_opening_favorites: Omit<JobOpeningFavoriteModel, 'applicant_id'>[];
job_opening_valued_competencies: JobOpeningValuedCompetencyModel[];
 })[];
career_direction_group: CareerDirectionGroupModel;
 })[];
 })[];
  };

    
    
    export const filterCareerDirectionGroupApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterCareerDirectionGroupRequestBody> | undefined>>      
    ): Promise<FilterCareerDirectionGroupResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/career_direction_groups", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    



  
