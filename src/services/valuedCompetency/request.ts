
import { serviceFetch } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { ValuedCompetencyModel } from "@models/valuedCompetency";
import { JobOpeningValuedCompetencyModel } from "@models/jobOpeningValuedCompetency";


    
    export const DefaultFilterValuedCompetencyQueryKey:[string, string, string] = ["ValuedCompetency", "filter", "/api/valued_competencies"];    
    

  export type FilterValuedCompetencyRequestBody = {
    valued_competencies: {
        name?: string;

      };
pagination_page?: number;
pagination_limit?: number;
  };

  export type FilterValuedCompetencyResponseBody = {
    total_pages: number;
valued_competencies: (ValuedCompetencyModel & { job_opening_valued_competencies: JobOpeningValuedCompetencyModel[];
 })[];
  };

    
    
    export const filterValuedCompetencyApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterValuedCompetencyRequestBody> | undefined>>      
    ): Promise<FilterValuedCompetencyResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/valued_competencies", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    



  
