
import { useQuery, UseQueryOptions, QueryClient, useMutation, MutateOptions, useQueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterMessageRequestBody, FilterMessageResponseBody, filterMessageApi, DefaultFilterMessageQueryKey, ShowMessageRequestBody, ShowMessageResponseBody, showMessageApi, DefaultShowMessageQueryKey, CreateMessageRequestBody, CreateMessageResponseBody, createMessageApi, UpdateMessageRequestBody, UpdateMessageResponseBody, updateMessageApi, DeleteMessageRequestBody, DeleteMessageResponseBody, deleteMessageApi } from "./request";



  
    
    
    export const useFilterMessageQuery = (
      params?: Partial<FilterMessageRequestBody>,
      options: UseQueryOptions<
        FilterMessageResponseBody,
        unknown,
        FilterMessageResponseBody,
        DefaultQueryKey<Partial<FilterMessageRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterMessageQueryKey, params], filterMessageApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterMessage = async (
      queryClient: QueryClient,
      params?: Partial<FilterMessageRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterMessageQueryKey, params],
        queryFn: filterMessageApi,
      });
    };
  

  
    
    
    export const useShowMessageQuery = (
      params: ShowMessageRequestBody,
      options: UseQueryOptions<
        ShowMessageResponseBody,
        unknown,
        ShowMessageResponseBody,
        DefaultQueryKey<ShowMessageRequestBody | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultShowMessageQueryKey, params], showMessageApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchShowMessage = async (
      queryClient: QueryClient,
      params: ShowMessageRequestBody
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultShowMessageQueryKey, params],
        queryFn: showMessageApi,
      });
    };
  

  
    export const useCreateMessageMutation = (
      options: MutateOptions<
        CreateMessageResponseBody,
        unknown,
        CreateMessageRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(createMessageApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("Message");
        },
      });
    };
  

  
    export const useUpdateMessageMutation = (
      options: MutateOptions<
        UpdateMessageResponseBody,
        unknown,
        UpdateMessageRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(updateMessageApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("Message");
        },
      });
    };
  

  
    export const useDeleteMessageMutation = (
      options: MutateOptions<
        DeleteMessageResponseBody,
        unknown,
        DeleteMessageRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(deleteMessageApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("Message");
        },
      });
    };
  


export * from './request';
