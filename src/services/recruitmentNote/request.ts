
import { serviceFetch } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { RecruitmentNoteModel } from "@models/recruitmentNote";


    
    export const DefaultFilterRecruitmentNoteQueryKey:[string, string, string] = ["RecruitmentNote", "filter", "/api/recruitment_notes"];    
    

  export type FilterRecruitmentNoteRequestBody = {
    recruitment_notes: {
        applicant_id?: number;
company_id?: number;
note?: string;

      };
pagination_page?: number;
pagination_limit?: number;
  };

  export type FilterRecruitmentNoteResponseBody = {
    total_pages: number;
recruitment_notes: RecruitmentNoteModel[];
  };

    
    
    export const filterRecruitmentNoteApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterRecruitmentNoteRequestBody> | undefined>>      
    ): Promise<FilterRecruitmentNoteResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/recruitment_notes", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    

  export type CreateRecruitmentNoteRequestBody = {
    recruitment_notes: {
        applicant_id?: number;
company_id?: number;
note?: string;

      };
  };

  export type CreateRecruitmentNoteResponseBody = {
    recruitment_note: RecruitmentNoteModel;
error_object: any;
  };

  
    export const createRecruitmentNoteApi = async (
      body: CreateRecruitmentNoteRequestBody
    ): Promise<CreateRecruitmentNoteResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/recruitment_notes", body),
        method: "POST",
        data: body,
      });
    };
    

    

  export type UpdateRecruitmentNoteRequestBody = {
    id: string;
recruitment_notes: {
        applicant_id?: number;
company_id?: number;
note?: string;

      };
  };

  export type UpdateRecruitmentNoteResponseBody = {
    recruitment_note: RecruitmentNoteModel;
error_object: any;
  };

  
    export const updateRecruitmentNoteApi = async (
      body: UpdateRecruitmentNoteRequestBody
    ): Promise<UpdateRecruitmentNoteResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/recruitment_notes/:id", body),
        method: "PUT",
        data: body,
      });
    };
    



  
