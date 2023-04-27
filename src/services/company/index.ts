
import { useQuery, UseQueryOptions, QueryClient, useMutation, MutateOptions, useQueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterCompanyRequestBody, FilterCompanyResponseBody, filterCompanyApi, DefaultFilterCompanyQueryKey, ShowCompanyRequestBody, ShowCompanyResponseBody, showCompanyApi, DefaultShowCompanyQueryKey, CreateCompanyRequestBody, CreateCompanyResponseBody, createCompanyApi, UpdateCompanyRequestBody, UpdateCompanyResponseBody, updateCompanyApi, DeleteCompanyRequestBody, DeleteCompanyResponseBody, deleteCompanyApi } from "./request";



  
    
    
    export const useFilterCompanyQuery = (
      params?: Partial<FilterCompanyRequestBody>,
      options: UseQueryOptions<
        FilterCompanyResponseBody,
        unknown,
        FilterCompanyResponseBody,
        DefaultQueryKey<Partial<FilterCompanyRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterCompanyQueryKey, params], filterCompanyApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterCompany = async (
      queryClient: QueryClient,
      params?: Partial<FilterCompanyRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterCompanyQueryKey, params],
        queryFn: filterCompanyApi,
      });
    };
  

  
    
    
    export const useShowCompanyQuery = (
      params: ShowCompanyRequestBody,
      options: UseQueryOptions<
        ShowCompanyResponseBody,
        unknown,
        ShowCompanyResponseBody,
        DefaultQueryKey<ShowCompanyRequestBody | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultShowCompanyQueryKey, params], showCompanyApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchShowCompany = async (
      queryClient: QueryClient,
      params: ShowCompanyRequestBody
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultShowCompanyQueryKey, params],
        queryFn: showCompanyApi,
      });
    };
  

  
    export const useCreateCompanyMutation = (
      options: MutateOptions<
        CreateCompanyResponseBody,
        unknown,
        CreateCompanyRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(createCompanyApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("Company");
        },
      });
    };
  

  
    export const useUpdateCompanyMutation = (
      options: MutateOptions<
        UpdateCompanyResponseBody,
        unknown,
        UpdateCompanyRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(updateCompanyApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("Company");
        },
      });
    };
  

  
    export const useDeleteCompanyMutation = (
      options: MutateOptions<
        DeleteCompanyResponseBody,
        unknown,
        DeleteCompanyRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(deleteCompanyApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("Company");
        },
      });
    };
  


export * from './request';
