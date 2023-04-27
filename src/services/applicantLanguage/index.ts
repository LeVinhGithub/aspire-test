
import { useQuery, UseQueryOptions, QueryClient, useMutation, MutateOptions, useQueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterApplicantLanguageRequestBody, FilterApplicantLanguageResponseBody, filterApplicantLanguageApi, DefaultFilterApplicantLanguageQueryKey, CreateApplicantLanguageRequestBody, CreateApplicantLanguageResponseBody, createApplicantLanguageApi, UpdateApplicantLanguageRequestBody, UpdateApplicantLanguageResponseBody, updateApplicantLanguageApi, DeleteApplicantLanguageRequestBody, DeleteApplicantLanguageResponseBody, deleteApplicantLanguageApi } from "./request";



  
    
    
    export const useFilterApplicantLanguageQuery = (
      params?: Partial<FilterApplicantLanguageRequestBody>,
      options: UseQueryOptions<
        FilterApplicantLanguageResponseBody,
        unknown,
        FilterApplicantLanguageResponseBody,
        DefaultQueryKey<Partial<FilterApplicantLanguageRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterApplicantLanguageQueryKey, params], filterApplicantLanguageApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterApplicantLanguage = async (
      queryClient: QueryClient,
      params?: Partial<FilterApplicantLanguageRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterApplicantLanguageQueryKey, params],
        queryFn: filterApplicantLanguageApi,
      });
    };
  

  
    export const useCreateApplicantLanguageMutation = (
      options: MutateOptions<
        CreateApplicantLanguageResponseBody,
        unknown,
        CreateApplicantLanguageRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(createApplicantLanguageApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("ApplicantLanguage");
        },
      });
    };
  

  
    export const useUpdateApplicantLanguageMutation = (
      options: MutateOptions<
        UpdateApplicantLanguageResponseBody,
        unknown,
        UpdateApplicantLanguageRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(updateApplicantLanguageApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("ApplicantLanguage");
        },
      });
    };
  

  
    export const useDeleteApplicantLanguageMutation = (
      options: MutateOptions<
        DeleteApplicantLanguageResponseBody,
        unknown,
        DeleteApplicantLanguageRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(deleteApplicantLanguageApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("ApplicantLanguage");
        },
      });
    };
  


export * from './request';
