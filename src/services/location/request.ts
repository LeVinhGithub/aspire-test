
import { serviceFetch } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { LocationModel } from "@models/location";
import { JobOpeningModel } from "@models/jobOpening";
import { JobApplicationModel } from "@models/jobApplication";
import { JobOpeningFavoriteModel } from "@models/jobOpeningFavorite";
import { JobOpeningValuedCompetencyModel } from "@models/jobOpeningValuedCompetency";


    
    export const DefaultFilterLocationQueryKey:[string, string, string] = ["Location", "filter", "/api/locations"];    
    

  export type FilterLocationRequestBody = {
    locations: {
        name?: string;
is_prefecture?: boolean;

      };
pagination_page?: number;
pagination_limit?: number;
  };

  export type FilterLocationResponseBody = {
    total_pages: number;
locations: (LocationModel & { job_openings: (Omit<JobOpeningModel, 'department' | 'status' | 'pv'> & { deployment: JobOpeningModel["department"];
job_applications: Omit<JobApplicationModel, 'approached_by_scout' | 'user_name_disclosed'>[];
job_opening_favorites: JobOpeningFavoriteModel[];
job_opening_valued_competencies: JobOpeningValuedCompetencyModel[];
 })[];
 })[];
  };

    
    
    export const filterLocationApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterLocationRequestBody> | undefined>>      
    ): Promise<FilterLocationResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/locations", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    



  
