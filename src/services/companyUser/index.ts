
import { useQuery, UseQueryOptions, QueryClient, useMutation, MutateOptions, useQueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterCompanyUserRequestBody, FilterCompanyUserResponseBody, filterCompanyUserApi, DefaultFilterCompanyUserQueryKey, ShowCompanyUserRequestBody, ShowCompanyUserResponseBody, showCompanyUserApi, DefaultShowCompanyUserQueryKey, CreateCompanyUserRequestBody, CreateCompanyUserResponseBody, createCompanyUserApi, UpdateCompanyUserRequestBody, UpdateCompanyUserResponseBody, updateCompanyUserApi, DeleteCompanyUserRequestBody, DeleteCompanyUserResponseBody, deleteCompanyUserApi } from "./request";



  
    
    
    export const useFilterCompanyUserQuery = (
      params?: Partial<FilterCompanyUserRequestBody>,
      options: UseQueryOptions<
        FilterCompanyUserResponseBody,
        unknown,
        FilterCompanyUserResponseBody,
        DefaultQueryKey<Partial<FilterCompanyUserRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterCompanyUserQueryKey, params], filterCompanyUserApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterCompanyUser = async (
      queryClient: QueryClient,
      params?: Partial<FilterCompanyUserRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterCompanyUserQueryKey, params],
        queryFn: filterCompanyUserApi,
      });
    };
  

  
    
    
    export const useShowCompanyUserQuery = (
      params: ShowCompanyUserRequestBody,
      options: UseQueryOptions<
        ShowCompanyUserResponseBody,
        unknown,
        ShowCompanyUserResponseBody,
        DefaultQueryKey<ShowCompanyUserRequestBody | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultShowCompanyUserQueryKey, params], showCompanyUserApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchShowCompanyUser = async (
      queryClient: QueryClient,
      params: ShowCompanyUserRequestBody
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultShowCompanyUserQueryKey, params],
        queryFn: showCompanyUserApi,
      });
    };
  

  
    export const useCreateCompanyUserMutation = (
      options: MutateOptions<
        CreateCompanyUserResponseBody,
        unknown,
        CreateCompanyUserRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(createCompanyUserApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("CompanyUser");
        },
      });
    };
  

  
    export const useUpdateCompanyUserMutation = (
      options: MutateOptions<
        UpdateCompanyUserResponseBody,
        unknown,
        UpdateCompanyUserRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(updateCompanyUserApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("CompanyUser");
        },
      });
    };
  

  
    export const useDeleteCompanyUserMutation = (
      options: MutateOptions<
        DeleteCompanyUserResponseBody,
        unknown,
        DeleteCompanyUserRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(deleteCompanyUserApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("CompanyUser");
        },
      });
    };
  


export * from './request';
