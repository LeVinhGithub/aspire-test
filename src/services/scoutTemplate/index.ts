
import { useQuery, UseQueryOptions, QueryClient, useMutation, MutateOptions, useQueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterScoutTemplateRequestBody, FilterScoutTemplateResponseBody, filterScoutTemplateApi, DefaultFilterScoutTemplateQueryKey, ShowScoutTemplateRequestBody, ShowScoutTemplateResponseBody, showScoutTemplateApi, DefaultShowScoutTemplateQueryKey, CreateScoutTemplateRequestBody, CreateScoutTemplateResponseBody, createScoutTemplateApi, UpdateScoutTemplateRequestBody, UpdateScoutTemplateResponseBody, updateScoutTemplateApi, DeleteScoutTemplateRequestBody, DeleteScoutTemplateResponseBody, deleteScoutTemplateApi } from "./request";



  
    
    
    export const useFilterScoutTemplateQuery = (
      params?: Partial<FilterScoutTemplateRequestBody>,
      options: UseQueryOptions<
        FilterScoutTemplateResponseBody,
        unknown,
        FilterScoutTemplateResponseBody,
        DefaultQueryKey<Partial<FilterScoutTemplateRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterScoutTemplateQueryKey, params], filterScoutTemplateApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterScoutTemplate = async (
      queryClient: QueryClient,
      params?: Partial<FilterScoutTemplateRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterScoutTemplateQueryKey, params],
        queryFn: filterScoutTemplateApi,
      });
    };
  

  
    
    
    export const useShowScoutTemplateQuery = (
      params: ShowScoutTemplateRequestBody,
      options: UseQueryOptions<
        ShowScoutTemplateResponseBody,
        unknown,
        ShowScoutTemplateResponseBody,
        DefaultQueryKey<ShowScoutTemplateRequestBody | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultShowScoutTemplateQueryKey, params], showScoutTemplateApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchShowScoutTemplate = async (
      queryClient: QueryClient,
      params: ShowScoutTemplateRequestBody
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultShowScoutTemplateQueryKey, params],
        queryFn: showScoutTemplateApi,
      });
    };
  

  
    export const useCreateScoutTemplateMutation = (
      options: MutateOptions<
        CreateScoutTemplateResponseBody,
        unknown,
        CreateScoutTemplateRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(createScoutTemplateApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("ScoutTemplate");
        },
      });
    };
  

  
    export const useUpdateScoutTemplateMutation = (
      options: MutateOptions<
        UpdateScoutTemplateResponseBody,
        unknown,
        UpdateScoutTemplateRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(updateScoutTemplateApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("ScoutTemplate");
        },
      });
    };
  

  
    export const useDeleteScoutTemplateMutation = (
      options: MutateOptions<
        DeleteScoutTemplateResponseBody,
        unknown,
        DeleteScoutTemplateRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(deleteScoutTemplateApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("ScoutTemplate");
        },
      });
    };
  


export * from './request';
