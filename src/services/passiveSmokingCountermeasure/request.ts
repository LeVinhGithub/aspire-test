
import { serviceFetch } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { PassiveSmokingCountermeasureModel } from "@models/passiveSmokingCountermeasure";
import { JobOpeningModel } from "@models/jobOpening";
import { JobApplicationModel } from "@models/jobApplication";
import { JobOpeningFavoriteModel } from "@models/jobOpeningFavorite";
import { JobOpeningValuedCompetencyModel } from "@models/jobOpeningValuedCompetency";


    
    export const DefaultFilterPassiveSmokingCountermeasureQueryKey:[string, string, string] = ["PassiveSmokingCountermeasure", "filter", "/api/passive_smoking_countermeasures"];    
    

  export type FilterPassiveSmokingCountermeasureRequestBody = {
    passive_smoking_countermeasures: {
        name?: string;

      };
pagination_page?: number;
pagination_limit?: number;
  };

  export type FilterPassiveSmokingCountermeasureResponseBody = {
    total_pages: number;
passive_smoking_countermeasures: (PassiveSmokingCountermeasureModel & { job_openings: (Omit<JobOpeningModel, 'department' | 'status' | 'pv'> & { deployment: JobOpeningModel["department"];
job_applications: Omit<JobApplicationModel, 'user_name_disclosed'>[];
job_opening_favorites: Omit<JobOpeningFavoriteModel, 'applicant_id'>[];
job_opening_valued_competencies: JobOpeningValuedCompetencyModel[];
 })[];
 })[];
  };

    
    
    export const filterPassiveSmokingCountermeasureApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterPassiveSmokingCountermeasureRequestBody> | undefined>>      
    ): Promise<FilterPassiveSmokingCountermeasureResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/passive_smoking_countermeasures", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    



  
