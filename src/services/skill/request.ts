
import { serviceFetch } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { SkillModel } from "@models/skill";


    
    export const DefaultFilterSkillQueryKey:[string, string, string] = ["Skill", "filter", "/api/skills"];    
    

  export type FilterSkillRequestBody = {
    skills: {
        name?: string;
applicant_id?: number;
skill_type?: string;

      };
pagination_page?: number;
pagination_limit?: number;
  };

  export type FilterSkillResponseBody = {
    total_pages: number;
skills: Omit<SkillModel, 'skill_type'>[];
  };

    
    
    export const filterSkillApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterSkillRequestBody> | undefined>>      
    ): Promise<FilterSkillResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/skills", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    

  export type CreateSkillRequestBody = {
    skills: {
        name?: string;
applicant_id?: number;
skill_type?: string;

      };
  };

  export type CreateSkillResponseBody = {
    skill: Omit<SkillModel, 'skill_type'>;
error_object: any;
  };

  
    export const createSkillApi = async (
      body: CreateSkillRequestBody
    ): Promise<CreateSkillResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/skills", body),
        method: "POST",
        data: body,
      });
    };
    

    

  export type UpdateSkillRequestBody = {
    id: string;
skills: {
        name?: string;
applicant_id?: number;
skill_type?: string;

      };
  };

  export type UpdateSkillResponseBody = {
    skill: Omit<SkillModel, 'skill_type'>;
error_object: any;
  };

  
    export const updateSkillApi = async (
      body: UpdateSkillRequestBody
    ): Promise<UpdateSkillResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/skills/:id", body),
        method: "PUT",
        data: body,
      });
    };
    

    

  export type DeleteSkillRequestBody = {
    id: string;
  };

  export type DeleteSkillResponseBody = {
      };

  
    export const deleteSkillApi = async (
      body: DeleteSkillRequestBody
    ): Promise<DeleteSkillResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/skills/:id", body),
        method: "DELETE",
        data: body,
      });
    };
    



  
