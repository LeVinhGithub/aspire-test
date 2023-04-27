
import { useQuery, UseQueryOptions, QueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterJobGroupRequestBody, FilterJobGroupResponseBody, filterJobGroupApi, DefaultFilterJobGroupQueryKey } from "./request";



  
    
    
    export const useFilterJobGroupQuery = (
      params?: Partial<FilterJobGroupRequestBody>,
      options: UseQueryOptions<
        FilterJobGroupResponseBody,
        unknown,
        FilterJobGroupResponseBody,
        DefaultQueryKey<Partial<FilterJobGroupRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterJobGroupQueryKey, params], filterJobGroupApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterJobGroup = async (
      queryClient: QueryClient,
      params?: Partial<FilterJobGroupRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterJobGroupQueryKey, params],
        queryFn: filterJobGroupApi,
      });
    };
  


export * from './request';
