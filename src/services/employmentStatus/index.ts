
import { useQuery, UseQueryOptions, QueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterEmploymentStatusRequestBody, FilterEmploymentStatusResponseBody, filterEmploymentStatusApi, DefaultFilterEmploymentStatusQueryKey } from "./request";



  
    
    
    export const useFilterEmploymentStatusQuery = (
      params?: Partial<FilterEmploymentStatusRequestBody>,
      options: UseQueryOptions<
        FilterEmploymentStatusResponseBody,
        unknown,
        FilterEmploymentStatusResponseBody,
        DefaultQueryKey<Partial<FilterEmploymentStatusRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterEmploymentStatusQueryKey, params], filterEmploymentStatusApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterEmploymentStatus = async (
      queryClient: QueryClient,
      params?: Partial<FilterEmploymentStatusRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterEmploymentStatusQueryKey, params],
        queryFn: filterEmploymentStatusApi,
      });
    };
  


export * from './request';
