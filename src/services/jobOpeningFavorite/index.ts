
import { useQuery, UseQueryOptions, QueryClient, useMutation, MutateOptions, useQueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterJobOpeningFavoriteRequestBody, FilterJobOpeningFavoriteResponseBody, filterJobOpeningFavoriteApi, DefaultFilterJobOpeningFavoriteQueryKey, ShowJobOpeningFavoriteRequestBody, ShowJobOpeningFavoriteResponseBody, showJobOpeningFavoriteApi, DefaultShowJobOpeningFavoriteQueryKey, CreateJobOpeningFavoriteRequestBody, CreateJobOpeningFavoriteResponseBody, createJobOpeningFavoriteApi, UpdateJobOpeningFavoriteRequestBody, UpdateJobOpeningFavoriteResponseBody, updateJobOpeningFavoriteApi, DeleteJobOpeningFavoriteRequestBody, DeleteJobOpeningFavoriteResponseBody, deleteJobOpeningFavoriteApi } from "./request";



  
    
    
    export const useFilterJobOpeningFavoriteQuery = (
      params?: Partial<FilterJobOpeningFavoriteRequestBody>,
      options: UseQueryOptions<
        FilterJobOpeningFavoriteResponseBody,
        unknown,
        FilterJobOpeningFavoriteResponseBody,
        DefaultQueryKey<Partial<FilterJobOpeningFavoriteRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterJobOpeningFavoriteQueryKey, params], filterJobOpeningFavoriteApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterJobOpeningFavorite = async (
      queryClient: QueryClient,
      params?: Partial<FilterJobOpeningFavoriteRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterJobOpeningFavoriteQueryKey, params],
        queryFn: filterJobOpeningFavoriteApi,
      });
    };
  

  
    
    
    export const useShowJobOpeningFavoriteQuery = (
      params: ShowJobOpeningFavoriteRequestBody,
      options: UseQueryOptions<
        ShowJobOpeningFavoriteResponseBody,
        unknown,
        ShowJobOpeningFavoriteResponseBody,
        DefaultQueryKey<ShowJobOpeningFavoriteRequestBody | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultShowJobOpeningFavoriteQueryKey, params], showJobOpeningFavoriteApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchShowJobOpeningFavorite = async (
      queryClient: QueryClient,
      params: ShowJobOpeningFavoriteRequestBody
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultShowJobOpeningFavoriteQueryKey, params],
        queryFn: showJobOpeningFavoriteApi,
      });
    };
  

  
    export const useCreateJobOpeningFavoriteMutation = (
      options: MutateOptions<
        CreateJobOpeningFavoriteResponseBody,
        unknown,
        CreateJobOpeningFavoriteRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(createJobOpeningFavoriteApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("JobOpeningFavorite");
        },
      });
    };
  

  
    export const useUpdateJobOpeningFavoriteMutation = (
      options: MutateOptions<
        UpdateJobOpeningFavoriteResponseBody,
        unknown,
        UpdateJobOpeningFavoriteRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(updateJobOpeningFavoriteApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("JobOpeningFavorite");
        },
      });
    };
  

  
    export const useDeleteJobOpeningFavoriteMutation = (
      options: MutateOptions<
        DeleteJobOpeningFavoriteResponseBody,
        unknown,
        DeleteJobOpeningFavoriteRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(deleteJobOpeningFavoriteApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("JobOpeningFavorite");
        },
      });
    };
  


export * from './request';
