
import { serviceFetch } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { LanguageModel } from "@models/language";
import { ApplicantLanguageModel } from "@models/applicantLanguage";


    
    export const DefaultFilterLanguageQueryKey:[string, string, string] = ["Language", "filter", "/api/languages"];    
    

  export type FilterLanguageRequestBody = {
    languages: {
        name?: string;

      };
pagination_page?: number;
pagination_limit?: number;
  };

  export type FilterLanguageResponseBody = {
    total_pages: number;
languages: (LanguageModel & { applicant_languages: ApplicantLanguageModel[];
 })[];
  };

    
    
    export const filterLanguageApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterLanguageRequestBody> | undefined>>      
    ): Promise<FilterLanguageResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/languages", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    



  
