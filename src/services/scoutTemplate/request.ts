
import { serviceFetch } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { ScoutTemplateModel } from "@models/scoutTemplate";


    
    export const DefaultFilterScoutTemplateQueryKey:[string, string, string] = ["ScoutTemplate", "filter", "/api/scout_templates"];    
    

  export type FilterScoutTemplateRequestBody = {
    scout_templates: {
        title?: string;
template_text?: string;
company_id?: number;

      };
pagination_page?: number;
pagination_limit?: number;
  };

  export type FilterScoutTemplateResponseBody = {
    total_pages: number;
scout_templates: ScoutTemplateModel[];
  };

    
    
    export const filterScoutTemplateApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterScoutTemplateRequestBody> | undefined>>      
    ): Promise<FilterScoutTemplateResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/scout_templates", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    
    export const DefaultShowScoutTemplateQueryKey:[string, string, string] = ["ScoutTemplate", "show", "/api/scout_templates/:id"];    
    

  export type ShowScoutTemplateRequestBody = {
    id: string;
  };

  export type ShowScoutTemplateResponseBody = {
    scout_template: ScoutTemplateModel;
  };

    
    
    export const showScoutTemplateApi = async (
      context: QueryFunctionContext<DefaultQueryKey<ShowScoutTemplateRequestBody | undefined>>      
    ): Promise<ShowScoutTemplateResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/scout_templates/:id", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    

  export type CreateScoutTemplateRequestBody = {
    scout_templates: {
        title?: string;
template_text?: string;
company_id?: number;

      };
  };

  export type CreateScoutTemplateResponseBody = {
    scout_template: ScoutTemplateModel;
error_object: any;
  };

  
    export const createScoutTemplateApi = async (
      body: CreateScoutTemplateRequestBody
    ): Promise<CreateScoutTemplateResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/scout_templates", body),
        method: "POST",
        data: body,
      });
    };
    

    

  export type UpdateScoutTemplateRequestBody = {
    id: string;
scout_templates: {
        title?: string;
template_text?: string;
company_id?: number;

      };
  };

  export type UpdateScoutTemplateResponseBody = {
    scout_template: ScoutTemplateModel;
error_object: any;
  };

  
    export const updateScoutTemplateApi = async (
      body: UpdateScoutTemplateRequestBody
    ): Promise<UpdateScoutTemplateResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/scout_templates/:id", body),
        method: "PUT",
        data: body,
      });
    };
    

    

  export type DeleteScoutTemplateRequestBody = {
    id: string;
  };

  export type DeleteScoutTemplateResponseBody = {
      };

  
    export const deleteScoutTemplateApi = async (
      body: DeleteScoutTemplateRequestBody
    ): Promise<DeleteScoutTemplateResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/scout_templates/:id", body),
        method: "DELETE",
        data: body,
      });
    };
    



  
