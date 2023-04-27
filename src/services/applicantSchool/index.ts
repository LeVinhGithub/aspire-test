
import { useQuery, UseQueryOptions, QueryClient, useMutation, MutateOptions, useQueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterApplicantSchoolRequestBody, FilterApplicantSchoolResponseBody, filterApplicantSchoolApi, DefaultFilterApplicantSchoolQueryKey, CreateApplicantSchoolRequestBody, CreateApplicantSchoolResponseBody, createApplicantSchoolApi, UpdateApplicantSchoolRequestBody, UpdateApplicantSchoolResponseBody, updateApplicantSchoolApi, DeleteApplicantSchoolRequestBody, DeleteApplicantSchoolResponseBody, deleteApplicantSchoolApi } from "./request";



  
    
    
    export const useFilterApplicantSchoolQuery = (
      params?: Partial<FilterApplicantSchoolRequestBody>,
      options: UseQueryOptions<
        FilterApplicantSchoolResponseBody,
        unknown,
        FilterApplicantSchoolResponseBody,
        DefaultQueryKey<Partial<FilterApplicantSchoolRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterApplicantSchoolQueryKey, params], filterApplicantSchoolApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterApplicantSchool = async (
      queryClient: QueryClient,
      params?: Partial<FilterApplicantSchoolRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterApplicantSchoolQueryKey, params],
        queryFn: filterApplicantSchoolApi,
      });
    };
  

  
    export const useCreateApplicantSchoolMutation = (
      options: MutateOptions<
        CreateApplicantSchoolResponseBody,
        unknown,
        CreateApplicantSchoolRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(createApplicantSchoolApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("ApplicantSchool");
        },
      });
    };
  

  
    export const useUpdateApplicantSchoolMutation = (
      options: MutateOptions<
        UpdateApplicantSchoolResponseBody,
        unknown,
        UpdateApplicantSchoolRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(updateApplicantSchoolApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("ApplicantSchool");
        },
      });
    };
  

  
    export const useDeleteApplicantSchoolMutation = (
      options: MutateOptions<
        DeleteApplicantSchoolResponseBody,
        unknown,
        DeleteApplicantSchoolRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(deleteApplicantSchoolApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("ApplicantSchool");
        },
      });
    };
  


export * from './request';
