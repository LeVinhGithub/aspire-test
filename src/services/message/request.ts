
import { serviceFetch, objectToFormData } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { MessageModel } from "@models/message";
import { CompanyModel } from "@models/company";


    
    export const DefaultFilterMessageQueryKey:[string, string, string] = ["Message", "filter", "/api/messages"];    
    

  export type FilterMessageRequestBody = {
    messages: {
        applicant_id?: number;
text?: string;
attachment?: string;
reply_to_message_id?: number;
company_id?: number;

      };
pagination_page?: number;
pagination_limit?: number;
  };

  export type FilterMessageResponseBody = {
    total_pages: number;
messages: (Omit<MessageModel, 'is_from_applicant' | 'is_read'> & { company: Omit<CompanyModel, 'listing_classification' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
messages: (Omit<MessageModel, 'is_from_applicant' | 'is_read'> & { company: Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
 };
 })[];
 };
 })[];
  };

    
    
    export const filterMessageApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterMessageRequestBody> | undefined>>      
    ): Promise<FilterMessageResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/messages", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    
    export const DefaultShowMessageQueryKey:[string, string, string] = ["Message", "show", "/api/messages/:id"];    
    

  export type ShowMessageRequestBody = {
    id: string;
  };

  export type ShowMessageResponseBody = {
    message: Omit<MessageModel, 'is_from_applicant' | 'is_read'> & { company: Omit<CompanyModel, 'listing_classification' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
messages: (Omit<MessageModel, 'is_from_applicant' | 'is_read'> & { company: Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
 };
 })[];
 };
 };
  };

    
    
    export const showMessageApi = async (
      context: QueryFunctionContext<DefaultQueryKey<ShowMessageRequestBody | undefined>>      
    ): Promise<ShowMessageResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/messages/:id", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    

    

  export type CreateMessageRequestBody = {
    messages: {
        applicant_id?: number;
text?: string;
attachment?: any;
reply_to_message_id?: number;
company_id?: number;

      };
  };

  export type CreateMessageResponseBody = {
    message: Omit<MessageModel, 'is_from_applicant' | 'is_read'> & { company: Omit<CompanyModel, 'listing_classification' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
messages: (Omit<MessageModel, 'is_from_applicant' | 'is_read'> & { company: Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
 };
 })[];
 };
 };
error_object: any;
  };

  
    export const createMessageApi = async (
      body: CreateMessageRequestBody
    ): Promise<CreateMessageResponseBody> => {      
            const formData = objectToFormData(body);
      
      return serviceFetch({
        url: getRoute("/api/messages", body),
        method: "POST",
        data: formData,
      });
    };
    

    

  export type UpdateMessageRequestBody = {
    id: string;
messages: {
        applicant_id?: number;
text?: string;
attachment?: any;
reply_to_message_id?: number;
company_id?: number;

      };
  };

  export type UpdateMessageResponseBody = {
    message: Omit<MessageModel, 'is_from_applicant' | 'is_read'> & { company: Omit<CompanyModel, 'listing_classification' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
messages: (Omit<MessageModel, 'is_from_applicant' | 'is_read'> & { company: Omit<CompanyModel, 'listing_classification' | 'image' | 'capital' | 'ipo' | 'business_id' | 'name_furigana'> & { ipo: CompanyModel["listing_classification"];
 };
 })[];
 };
 };
error_object: any;
  };

  
    export const updateMessageApi = async (
      body: UpdateMessageRequestBody
    ): Promise<UpdateMessageResponseBody> => {      
            const formData = objectToFormData(body);
      
      return serviceFetch({
        url: getRoute("/api/messages/:id", body),
        method: "PUT",
        data: formData,
      });
    };
    

    

  export type DeleteMessageRequestBody = {
    id: string;
  };

  export type DeleteMessageResponseBody = {
      };

  
    export const deleteMessageApi = async (
      body: DeleteMessageRequestBody
    ): Promise<DeleteMessageResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/messages/:id", body),
        method: "DELETE",
        data: body,
      });
    };
    



  
