
import { useQuery, UseQueryOptions, QueryClient, useMutation, MutateOptions, useQueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterTargetListRequestBody, FilterTargetListResponseBody, filterTargetListApi, DefaultFilterTargetListQueryKey, ShowTargetListRequestBody, ShowTargetListResponseBody, showTargetListApi, DefaultShowTargetListQueryKey, CreateTargetListRequestBody, CreateTargetListResponseBody, createTargetListApi, UpdateTargetListRequestBody, UpdateTargetListResponseBody, updateTargetListApi, DeleteTargetListRequestBody, DeleteTargetListResponseBody, deleteTargetListApi } from "./request";



  
    
    
    export const useFilterTargetListQuery = (
      params?: Partial<FilterTargetListRequestBody>,
      options: UseQueryOptions<
        FilterTargetListResponseBody,
        unknown,
        FilterTargetListResponseBody,
        DefaultQueryKey<Partial<FilterTargetListRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterTargetListQueryKey, params], filterTargetListApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterTargetList = async (
      queryClient: QueryClient,
      params?: Partial<FilterTargetListRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterTargetListQueryKey, params],
        queryFn: filterTargetListApi,
      });
    };
  

  
    
    
    export const useShowTargetListQuery = (
      params: ShowTargetListRequestBody,
      options: UseQueryOptions<
        ShowTargetListResponseBody,
        unknown,
        ShowTargetListResponseBody,
        DefaultQueryKey<ShowTargetListRequestBody | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultShowTargetListQueryKey, params], showTargetListApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchShowTargetList = async (
      queryClient: QueryClient,
      params: ShowTargetListRequestBody
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultShowTargetListQueryKey, params],
        queryFn: showTargetListApi,
      });
    };
  

  
    export const useCreateTargetListMutation = (
      options: MutateOptions<
        CreateTargetListResponseBody,
        unknown,
        CreateTargetListRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(createTargetListApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("TargetList");
        },
      });
    };
  

  
    export const useUpdateTargetListMutation = (
      options: MutateOptions<
        UpdateTargetListResponseBody,
        unknown,
        UpdateTargetListRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(updateTargetListApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("TargetList");
        },
      });
    };
  

  
    export const useDeleteTargetListMutation = (
      options: MutateOptions<
        DeleteTargetListResponseBody,
        unknown,
        DeleteTargetListRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(deleteTargetListApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("TargetList");
        },
      });
    };
  


export * from './request';
