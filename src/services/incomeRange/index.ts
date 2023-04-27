
import { useQuery, UseQueryOptions, QueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterIncomeRangeRequestBody, FilterIncomeRangeResponseBody, filterIncomeRangeApi, DefaultFilterIncomeRangeQueryKey } from "./request";



  
    
    
    export const useFilterIncomeRangeQuery = (
      params?: Partial<FilterIncomeRangeRequestBody>,
      options: UseQueryOptions<
        FilterIncomeRangeResponseBody,
        unknown,
        FilterIncomeRangeResponseBody,
        DefaultQueryKey<Partial<FilterIncomeRangeRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterIncomeRangeQueryKey, params], filterIncomeRangeApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterIncomeRange = async (
      queryClient: QueryClient,
      params?: Partial<FilterIncomeRangeRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterIncomeRangeQueryKey, params],
        queryFn: filterIncomeRangeApi,
      });
    };
  


export * from './request';
