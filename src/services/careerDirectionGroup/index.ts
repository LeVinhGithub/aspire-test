
import { useQuery, UseQueryOptions, QueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterCareerDirectionGroupRequestBody, FilterCareerDirectionGroupResponseBody, filterCareerDirectionGroupApi, DefaultFilterCareerDirectionGroupQueryKey } from "./request";



  
    
    
    export const useFilterCareerDirectionGroupQuery = (
      params?: Partial<FilterCareerDirectionGroupRequestBody>,
      options: UseQueryOptions<
        FilterCareerDirectionGroupResponseBody,
        unknown,
        FilterCareerDirectionGroupResponseBody,
        DefaultQueryKey<Partial<FilterCareerDirectionGroupRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterCareerDirectionGroupQueryKey, params], filterCareerDirectionGroupApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterCareerDirectionGroup = async (
      queryClient: QueryClient,
      params?: Partial<FilterCareerDirectionGroupRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterCareerDirectionGroupQueryKey, params],
        queryFn: filterCareerDirectionGroupApi,
      });
    };
  


export * from './request';
