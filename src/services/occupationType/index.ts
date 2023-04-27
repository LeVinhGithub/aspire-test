
import { useQuery, UseQueryOptions, QueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterOccupationTypeRequestBody, FilterOccupationTypeResponseBody, filterOccupationTypeApi, DefaultFilterOccupationTypeQueryKey } from "./request";



  
    
    
    export const useFilterOccupationTypeQuery = (
      params?: Partial<FilterOccupationTypeRequestBody>,
      options: UseQueryOptions<
        FilterOccupationTypeResponseBody,
        unknown,
        FilterOccupationTypeResponseBody,
        DefaultQueryKey<Partial<FilterOccupationTypeRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterOccupationTypeQueryKey, params], filterOccupationTypeApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterOccupationType = async (
      queryClient: QueryClient,
      params?: Partial<FilterOccupationTypeRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterOccupationTypeQueryKey, params],
        queryFn: filterOccupationTypeApi,
      });
    };
  


export * from './request';
