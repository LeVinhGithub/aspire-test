
import { useQuery, UseQueryOptions, QueryClient, useMutation, MutateOptions, useQueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterJobOpeningRequestBody, FilterJobOpeningResponseBody, filterJobOpeningApi, DefaultFilterJobOpeningQueryKey, ShowJobOpeningRequestBody, ShowJobOpeningResponseBody, showJobOpeningApi, DefaultShowJobOpeningQueryKey, CreateJobOpeningRequestBody, CreateJobOpeningResponseBody, createJobOpeningApi, UpdateJobOpeningRequestBody, UpdateJobOpeningResponseBody, updateJobOpeningApi, DeleteJobOpeningRequestBody, DeleteJobOpeningResponseBody, deleteJobOpeningApi } from "./request";



  
    
    
    export const useFilterJobOpeningQuery = (
      params?: Partial<FilterJobOpeningRequestBody>,
      options: UseQueryOptions<
        FilterJobOpeningResponseBody,
        unknown,
        FilterJobOpeningResponseBody,
        DefaultQueryKey<Partial<FilterJobOpeningRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterJobOpeningQueryKey, params], filterJobOpeningApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterJobOpening = async (
      queryClient: QueryClient,
      params?: Partial<FilterJobOpeningRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterJobOpeningQueryKey, params],
        queryFn: filterJobOpeningApi,
      });
    };
  

  
    
    
    export const useShowJobOpeningQuery = (
      params: ShowJobOpeningRequestBody,
      options: UseQueryOptions<
        ShowJobOpeningResponseBody,
        unknown,
        ShowJobOpeningResponseBody,
        DefaultQueryKey<ShowJobOpeningRequestBody | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultShowJobOpeningQueryKey, params], showJobOpeningApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchShowJobOpening = async (
      queryClient: QueryClient,
      params: ShowJobOpeningRequestBody
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultShowJobOpeningQueryKey, params],
        queryFn: showJobOpeningApi,
      });
    };
  

  
    export const useCreateJobOpeningMutation = (
      options: MutateOptions<
        CreateJobOpeningResponseBody,
        unknown,
        CreateJobOpeningRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(createJobOpeningApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("JobOpening");
        },
      });
    };
  

  
    export const useUpdateJobOpeningMutation = (
      options: MutateOptions<
        UpdateJobOpeningResponseBody,
        unknown,
        UpdateJobOpeningRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(updateJobOpeningApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("JobOpening");
        },
      });
    };
  

  
    export const useDeleteJobOpeningMutation = (
      options: MutateOptions<
        DeleteJobOpeningResponseBody,
        unknown,
        DeleteJobOpeningRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(deleteJobOpeningApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("JobOpening");
        },
      });
    };
  


export * from './request';
