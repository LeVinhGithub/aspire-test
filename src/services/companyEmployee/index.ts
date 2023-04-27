
import { useQuery, UseQueryOptions, QueryClient, useMutation, MutateOptions, useQueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterCompanyEmployeeRequestBody, FilterCompanyEmployeeResponseBody, filterCompanyEmployeeApi, DefaultFilterCompanyEmployeeQueryKey, ShowCompanyEmployeeRequestBody, ShowCompanyEmployeeResponseBody, showCompanyEmployeeApi, DefaultShowCompanyEmployeeQueryKey, CreateCompanyEmployeeRequestBody, CreateCompanyEmployeeResponseBody, createCompanyEmployeeApi, UpdateCompanyEmployeeRequestBody, UpdateCompanyEmployeeResponseBody, updateCompanyEmployeeApi, DeleteCompanyEmployeeRequestBody, DeleteCompanyEmployeeResponseBody, deleteCompanyEmployeeApi } from "./request";



  
    
    
    export const useFilterCompanyEmployeeQuery = (
      params?: Partial<FilterCompanyEmployeeRequestBody>,
      options: UseQueryOptions<
        FilterCompanyEmployeeResponseBody,
        unknown,
        FilterCompanyEmployeeResponseBody,
        DefaultQueryKey<Partial<FilterCompanyEmployeeRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterCompanyEmployeeQueryKey, params], filterCompanyEmployeeApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterCompanyEmployee = async (
      queryClient: QueryClient,
      params?: Partial<FilterCompanyEmployeeRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterCompanyEmployeeQueryKey, params],
        queryFn: filterCompanyEmployeeApi,
      });
    };
  

  
    
    
    export const useShowCompanyEmployeeQuery = (
      params: ShowCompanyEmployeeRequestBody,
      options: UseQueryOptions<
        ShowCompanyEmployeeResponseBody,
        unknown,
        ShowCompanyEmployeeResponseBody,
        DefaultQueryKey<ShowCompanyEmployeeRequestBody | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultShowCompanyEmployeeQueryKey, params], showCompanyEmployeeApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchShowCompanyEmployee = async (
      queryClient: QueryClient,
      params: ShowCompanyEmployeeRequestBody
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultShowCompanyEmployeeQueryKey, params],
        queryFn: showCompanyEmployeeApi,
      });
    };
  

  
    export const useCreateCompanyEmployeeMutation = (
      options: MutateOptions<
        CreateCompanyEmployeeResponseBody,
        unknown,
        CreateCompanyEmployeeRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(createCompanyEmployeeApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("CompanyEmployee");
        },
      });
    };
  

  
    export const useUpdateCompanyEmployeeMutation = (
      options: MutateOptions<
        UpdateCompanyEmployeeResponseBody,
        unknown,
        UpdateCompanyEmployeeRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(updateCompanyEmployeeApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("CompanyEmployee");
        },
      });
    };
  

  
    export const useDeleteCompanyEmployeeMutation = (
      options: MutateOptions<
        DeleteCompanyEmployeeResponseBody,
        unknown,
        DeleteCompanyEmployeeRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(deleteCompanyEmployeeApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("CompanyEmployee");
        },
      });
    };
  


export * from './request';
