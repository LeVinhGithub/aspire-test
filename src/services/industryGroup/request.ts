
import { serviceFetch } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { IndustryGroupModel } from "@models/industryGroup";
import { IndustryModel } from "@models/industry";


    
    export const DefaultFilterIndustryGroupQueryKey:[string, string, string] = ["IndustryGroup", "filter", "/api/industry_groups"];    
    

  export type FilterIndustryGroupRequestBody = {
    industry_groups: {
        name?: string;

      };
pagination_page?: number;
pagination_limit?: number;
  };

  export type FilterIndustryGroupResponseBody = {
    total_pages: number;
industry_groups: (IndustryGroupModel & { industries: IndustryModel[];
 })[];
  };

    
    
    export const filterIndustryGroupApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterIndustryGroupRequestBody> | undefined>>      
    ): Promise<FilterIndustryGroupResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/industry_groups", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    



  
