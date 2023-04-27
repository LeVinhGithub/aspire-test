
import { useQuery, UseQueryOptions, QueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterValuedCompetencyRequestBody, FilterValuedCompetencyResponseBody, filterValuedCompetencyApi, DefaultFilterValuedCompetencyQueryKey } from "./request";



  
    
    
    export const useFilterValuedCompetencyQuery = (
      params?: Partial<FilterValuedCompetencyRequestBody>,
      options: UseQueryOptions<
        FilterValuedCompetencyResponseBody,
        unknown,
        FilterValuedCompetencyResponseBody,
        DefaultQueryKey<Partial<FilterValuedCompetencyRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterValuedCompetencyQueryKey, params], filterValuedCompetencyApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterValuedCompetency = async (
      queryClient: QueryClient,
      params?: Partial<FilterValuedCompetencyRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterValuedCompetencyQueryKey, params],
        queryFn: filterValuedCompetencyApi,
      });
    };
  


export * from './request';
