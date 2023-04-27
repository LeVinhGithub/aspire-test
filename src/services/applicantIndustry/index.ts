
import { useQuery, UseQueryOptions, QueryClient, useMutation, MutateOptions, useQueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterApplicantIndustryRequestBody, FilterApplicantIndustryResponseBody, filterApplicantIndustryApi, DefaultFilterApplicantIndustryQueryKey, CreateApplicantIndustryRequestBody, CreateApplicantIndustryResponseBody, createApplicantIndustryApi, UpdateApplicantIndustryRequestBody, UpdateApplicantIndustryResponseBody, updateApplicantIndustryApi, DeleteApplicantIndustryRequestBody, DeleteApplicantIndustryResponseBody, deleteApplicantIndustryApi } from "./request";



  
    
    
    export const useFilterApplicantIndustryQuery = (
      params?: Partial<FilterApplicantIndustryRequestBody>,
      options: UseQueryOptions<
        FilterApplicantIndustryResponseBody,
        unknown,
        FilterApplicantIndustryResponseBody,
        DefaultQueryKey<Partial<FilterApplicantIndustryRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterApplicantIndustryQueryKey, params], filterApplicantIndustryApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterApplicantIndustry = async (
      queryClient: QueryClient,
      params?: Partial<FilterApplicantIndustryRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterApplicantIndustryQueryKey, params],
        queryFn: filterApplicantIndustryApi,
      });
    };
  

  
    export const useCreateApplicantIndustryMutation = (
      options: MutateOptions<
        CreateApplicantIndustryResponseBody,
        unknown,
        CreateApplicantIndustryRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(createApplicantIndustryApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("ApplicantIndustry");
        },
      });
    };
  

  
    export const useUpdateApplicantIndustryMutation = (
      options: MutateOptions<
        UpdateApplicantIndustryResponseBody,
        unknown,
        UpdateApplicantIndustryRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(updateApplicantIndustryApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("ApplicantIndustry");
        },
      });
    };
  

  
    export const useDeleteApplicantIndustryMutation = (
      options: MutateOptions<
        DeleteApplicantIndustryResponseBody,
        unknown,
        DeleteApplicantIndustryRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(deleteApplicantIndustryApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("ApplicantIndustry");
        },
      });
    };
  


export * from './request';
