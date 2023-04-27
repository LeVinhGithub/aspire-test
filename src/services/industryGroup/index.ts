
import { useQuery, UseQueryOptions, QueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterIndustryGroupRequestBody, FilterIndustryGroupResponseBody, filterIndustryGroupApi, DefaultFilterIndustryGroupQueryKey } from "./request";



  
    
    
    export const useFilterIndustryGroupQuery = (
      params?: Partial<FilterIndustryGroupRequestBody>,
      options: UseQueryOptions<
        FilterIndustryGroupResponseBody,
        unknown,
        FilterIndustryGroupResponseBody,
        DefaultQueryKey<Partial<FilterIndustryGroupRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterIndustryGroupQueryKey, params], filterIndustryGroupApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterIndustryGroup = async (
      queryClient: QueryClient,
      params?: Partial<FilterIndustryGroupRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterIndustryGroupQueryKey, params],
        queryFn: filterIndustryGroupApi,
      });
    };
  


export * from './request';
