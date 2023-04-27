
import { useQuery, UseQueryOptions, QueryClient, useMutation, MutateOptions, useQueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterJobExperienceRequestBody, FilterJobExperienceResponseBody, filterJobExperienceApi, DefaultFilterJobExperienceQueryKey, CreateJobExperienceRequestBody, CreateJobExperienceResponseBody, createJobExperienceApi, UpdateJobExperienceRequestBody, UpdateJobExperienceResponseBody, updateJobExperienceApi, DeleteJobExperienceRequestBody, DeleteJobExperienceResponseBody, deleteJobExperienceApi } from "./request";



  
    
    
    export const useFilterJobExperienceQuery = (
      params?: Partial<FilterJobExperienceRequestBody>,
      options: UseQueryOptions<
        FilterJobExperienceResponseBody,
        unknown,
        FilterJobExperienceResponseBody,
        DefaultQueryKey<Partial<FilterJobExperienceRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterJobExperienceQueryKey, params], filterJobExperienceApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterJobExperience = async (
      queryClient: QueryClient,
      params?: Partial<FilterJobExperienceRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterJobExperienceQueryKey, params],
        queryFn: filterJobExperienceApi,
      });
    };
  

  
    export const useCreateJobExperienceMutation = (
      options: MutateOptions<
        CreateJobExperienceResponseBody,
        unknown,
        CreateJobExperienceRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(createJobExperienceApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("JobExperience");
        },
      });
    };
  

  
    export const useUpdateJobExperienceMutation = (
      options: MutateOptions<
        UpdateJobExperienceResponseBody,
        unknown,
        UpdateJobExperienceRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(updateJobExperienceApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("JobExperience");
        },
      });
    };
  

  
    export const useDeleteJobExperienceMutation = (
      options: MutateOptions<
        DeleteJobExperienceResponseBody,
        unknown,
        DeleteJobExperienceRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(deleteJobExperienceApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("JobExperience");
        },
      });
    };
  


export * from './request';
