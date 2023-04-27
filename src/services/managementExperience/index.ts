
import { useQuery, UseQueryOptions, QueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterManagementExperienceRequestBody, FilterManagementExperienceResponseBody, filterManagementExperienceApi, DefaultFilterManagementExperienceQueryKey } from "./request";



  
    
    
    export const useFilterManagementExperienceQuery = (
      params?: Partial<FilterManagementExperienceRequestBody>,
      options: UseQueryOptions<
        FilterManagementExperienceResponseBody,
        unknown,
        FilterManagementExperienceResponseBody,
        DefaultQueryKey<Partial<FilterManagementExperienceRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterManagementExperienceQueryKey, params], filterManagementExperienceApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterManagementExperience = async (
      queryClient: QueryClient,
      params?: Partial<FilterManagementExperienceRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterManagementExperienceQueryKey, params],
        queryFn: filterManagementExperienceApi,
      });
    };
  


export * from './request';
