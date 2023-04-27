
import { serviceFetch } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { OccupationTypeModel } from "@models/occupationType";
import { JobOpeningModel } from "@models/jobOpening";
import { JobApplicationModel } from "@models/jobApplication";
import { JobOpeningFavoriteModel } from "@models/jobOpeningFavorite";
import { JobOpeningValuedCompetencyModel } from "@models/jobOpeningValuedCompetency";


    
    export const DefaultFilterOccupationTypeQueryKey:[string, string, string] = ["OccupationType", "filter", "/api/occupation_types"];    
    

  export type FilterOccupationTypeRequestBody = {
    occupation_types: {
        name?: string;

      };
pagination_page?: number;
pagination_limit?: number;
  };

  export type FilterOccupationTypeResponseBody = {
    total_pages: number;
occupation_types: (OccupationTypeModel & { job_openings: (Omit<JobOpeningModel, 'department' | 'status' | 'pv'> & { deployment: JobOpeningModel["department"];
job_applications: Omit<JobApplicationModel, 'user_name_disclosed'>[];
job_opening_favorites: JobOpeningFavoriteModel[];
job_opening_valued_competencies: JobOpeningValuedCompetencyModel[];
 })[];
 })[];
  };

    
    
    export const filterOccupationTypeApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterOccupationTypeRequestBody> | undefined>>      
    ): Promise<FilterOccupationTypeResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/occupation_types", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    



  
