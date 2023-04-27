
import { useQuery, UseQueryOptions, QueryClient, useMutation, MutateOptions, useQueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterJobApplicationRequestBody, FilterJobApplicationResponseBody, filterJobApplicationApi, DefaultFilterJobApplicationQueryKey, ShowJobApplicationRequestBody, ShowJobApplicationResponseBody, showJobApplicationApi, DefaultShowJobApplicationQueryKey, CreateJobApplicationRequestBody, CreateJobApplicationResponseBody, createJobApplicationApi, UpdateJobApplicationRequestBody, UpdateJobApplicationResponseBody, updateJobApplicationApi, DeleteJobApplicationRequestBody, DeleteJobApplicationResponseBody, deleteJobApplicationApi } from "./request";



  
    
    
    export const useFilterJobApplicationQuery = (
      params?: Partial<FilterJobApplicationRequestBody>,
      options: UseQueryOptions<
        FilterJobApplicationResponseBody,
        unknown,
        FilterJobApplicationResponseBody,
        DefaultQueryKey<Partial<FilterJobApplicationRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterJobApplicationQueryKey, params], filterJobApplicationApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterJobApplication = async (
      queryClient: QueryClient,
      params?: Partial<FilterJobApplicationRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterJobApplicationQueryKey, params],
        queryFn: filterJobApplicationApi,
      });
    };
  

  
    
    
    export const useShowJobApplicationQuery = (
      params: ShowJobApplicationRequestBody,
      options: UseQueryOptions<
        ShowJobApplicationResponseBody,
        unknown,
        ShowJobApplicationResponseBody,
        DefaultQueryKey<ShowJobApplicationRequestBody | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultShowJobApplicationQueryKey, params], showJobApplicationApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchShowJobApplication = async (
      queryClient: QueryClient,
      params: ShowJobApplicationRequestBody
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultShowJobApplicationQueryKey, params],
        queryFn: showJobApplicationApi,
      });
    };
  

  
    export const useCreateJobApplicationMutation = (
      options: MutateOptions<
        CreateJobApplicationResponseBody,
        unknown,
        CreateJobApplicationRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(createJobApplicationApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("JobApplication");
        },
      });
    };
  

  
    export const useUpdateJobApplicationMutation = (
      options: MutateOptions<
        UpdateJobApplicationResponseBody,
        unknown,
        UpdateJobApplicationRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(updateJobApplicationApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("JobApplication");
        },
      });
    };
  

  
    export const useDeleteJobApplicationMutation = (
      options: MutateOptions<
        DeleteJobApplicationResponseBody,
        unknown,
        DeleteJobApplicationRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(deleteJobApplicationApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("JobApplication");
        },
      });
    };
  


export * from './request';
