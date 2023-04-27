
import { useQuery, UseQueryOptions, QueryClient, useMutation, MutateOptions, useQueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterApplicantRequestBody, FilterApplicantResponseBody, filterApplicantApi, DefaultFilterApplicantQueryKey, ShowApplicantRequestBody, ShowApplicantResponseBody, showApplicantApi, DefaultShowApplicantQueryKey, CreateApplicantRequestBody, CreateApplicantResponseBody, createApplicantApi, UpdateApplicantRequestBody, UpdateApplicantResponseBody, updateApplicantApi, DeleteApplicantRequestBody, DeleteApplicantResponseBody, deleteApplicantApi } from "./request";



  
    
    
    export const useFilterApplicantQuery = (
      params?: Partial<FilterApplicantRequestBody>,
      options: UseQueryOptions<
        FilterApplicantResponseBody,
        unknown,
        FilterApplicantResponseBody,
        DefaultQueryKey<Partial<FilterApplicantRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterApplicantQueryKey, params], filterApplicantApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterApplicant = async (
      queryClient: QueryClient,
      params?: Partial<FilterApplicantRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterApplicantQueryKey, params],
        queryFn: filterApplicantApi,
      });
    };
  

  
    
    
    export const useShowApplicantQuery = (
      params: ShowApplicantRequestBody,
      options: UseQueryOptions<
        ShowApplicantResponseBody,
        unknown,
        ShowApplicantResponseBody,
        DefaultQueryKey<ShowApplicantRequestBody | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultShowApplicantQueryKey, params], showApplicantApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchShowApplicant = async (
      queryClient: QueryClient,
      params: ShowApplicantRequestBody
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultShowApplicantQueryKey, params],
        queryFn: showApplicantApi,
      });
    };
  

  
    export const useCreateApplicantMutation = (
      options: MutateOptions<
        CreateApplicantResponseBody,
        unknown,
        CreateApplicantRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(createApplicantApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("Applicant");
        },
      });
    };
  

  
    export const useUpdateApplicantMutation = (
      options: MutateOptions<
        UpdateApplicantResponseBody,
        unknown,
        UpdateApplicantRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(updateApplicantApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("Applicant");
        },
      });
    };
  

  
    export const useDeleteApplicantMutation = (
      options: MutateOptions<
        DeleteApplicantResponseBody,
        unknown,
        DeleteApplicantRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(deleteApplicantApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("Applicant");
        },
      });
    };
  


export * from './request';
