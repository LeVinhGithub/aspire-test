
import { useQuery, UseQueryOptions, QueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterPassiveSmokingCountermeasureRequestBody, FilterPassiveSmokingCountermeasureResponseBody, filterPassiveSmokingCountermeasureApi, DefaultFilterPassiveSmokingCountermeasureQueryKey } from "./request";



  
    
    
    export const useFilterPassiveSmokingCountermeasureQuery = (
      params?: Partial<FilterPassiveSmokingCountermeasureRequestBody>,
      options: UseQueryOptions<
        FilterPassiveSmokingCountermeasureResponseBody,
        unknown,
        FilterPassiveSmokingCountermeasureResponseBody,
        DefaultQueryKey<Partial<FilterPassiveSmokingCountermeasureRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterPassiveSmokingCountermeasureQueryKey, params], filterPassiveSmokingCountermeasureApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterPassiveSmokingCountermeasure = async (
      queryClient: QueryClient,
      params?: Partial<FilterPassiveSmokingCountermeasureRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterPassiveSmokingCountermeasureQueryKey, params],
        queryFn: filterPassiveSmokingCountermeasureApi,
      });
    };
  


export * from './request';
