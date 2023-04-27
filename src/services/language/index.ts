
import { useQuery, UseQueryOptions, QueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterLanguageRequestBody, FilterLanguageResponseBody, filterLanguageApi, DefaultFilterLanguageQueryKey } from "./request";



  
    
    
    export const useFilterLanguageQuery = (
      params?: Partial<FilterLanguageRequestBody>,
      options: UseQueryOptions<
        FilterLanguageResponseBody,
        unknown,
        FilterLanguageResponseBody,
        DefaultQueryKey<Partial<FilterLanguageRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterLanguageQueryKey, params], filterLanguageApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterLanguage = async (
      queryClient: QueryClient,
      params?: Partial<FilterLanguageRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterLanguageQueryKey, params],
        queryFn: filterLanguageApi,
      });
    };
  


export * from './request';
