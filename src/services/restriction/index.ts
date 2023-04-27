
import { useQuery, UseQueryOptions, QueryClient, useMutation, MutateOptions, useQueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterRestrictionRequestBody, FilterRestrictionResponseBody, filterRestrictionApi, DefaultFilterRestrictionQueryKey, ShowRestrictionRequestBody, ShowRestrictionResponseBody, showRestrictionApi, DefaultShowRestrictionQueryKey, CreateRestrictionRequestBody, CreateRestrictionResponseBody, createRestrictionApi, UpdateRestrictionRequestBody, UpdateRestrictionResponseBody, updateRestrictionApi, DeleteRestrictionRequestBody, DeleteRestrictionResponseBody, deleteRestrictionApi } from "./request";



  
    
    
    export const useFilterRestrictionQuery = (
      params?: Partial<FilterRestrictionRequestBody>,
      options: UseQueryOptions<
        FilterRestrictionResponseBody,
        unknown,
        FilterRestrictionResponseBody,
        DefaultQueryKey<Partial<FilterRestrictionRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterRestrictionQueryKey, params], filterRestrictionApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterRestriction = async (
      queryClient: QueryClient,
      params?: Partial<FilterRestrictionRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterRestrictionQueryKey, params],
        queryFn: filterRestrictionApi,
      });
    };
  

  
    
    
    export const useShowRestrictionQuery = (
      params: ShowRestrictionRequestBody,
      options: UseQueryOptions<
        ShowRestrictionResponseBody,
        unknown,
        ShowRestrictionResponseBody,
        DefaultQueryKey<ShowRestrictionRequestBody | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultShowRestrictionQueryKey, params], showRestrictionApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchShowRestriction = async (
      queryClient: QueryClient,
      params: ShowRestrictionRequestBody
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultShowRestrictionQueryKey, params],
        queryFn: showRestrictionApi,
      });
    };
  

  
    export const useCreateRestrictionMutation = (
      options: MutateOptions<
        CreateRestrictionResponseBody,
        unknown,
        CreateRestrictionRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(createRestrictionApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("Restriction");
        },
      });
    };
  

  
    export const useUpdateRestrictionMutation = (
      options: MutateOptions<
        UpdateRestrictionResponseBody,
        unknown,
        UpdateRestrictionRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(updateRestrictionApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("Restriction");
        },
      });
    };
  

  
    export const useDeleteRestrictionMutation = (
      options: MutateOptions<
        DeleteRestrictionResponseBody,
        unknown,
        DeleteRestrictionRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(deleteRestrictionApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("Restriction");
        },
      });
    };
  


export * from './request';
