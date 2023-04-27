
import { useQuery, UseQueryOptions, QueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterLocationRequestBody, FilterLocationResponseBody, filterLocationApi, DefaultFilterLocationQueryKey } from "./request";



  
    
    
    export const useFilterLocationQuery = (
      params?: Partial<FilterLocationRequestBody>,
      options: UseQueryOptions<
        FilterLocationResponseBody,
        unknown,
        FilterLocationResponseBody,
        DefaultQueryKey<Partial<FilterLocationRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterLocationQueryKey, params], filterLocationApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterLocation = async (
      queryClient: QueryClient,
      params?: Partial<FilterLocationRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterLocationQueryKey, params],
        queryFn: filterLocationApi,
      });
    };
  


export * from './request';
