
import { useQuery, UseQueryOptions, QueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterSchoolTypeRequestBody, FilterSchoolTypeResponseBody, filterSchoolTypeApi, DefaultFilterSchoolTypeQueryKey } from "./request";



  
    
    
    export const useFilterSchoolTypeQuery = (
      params?: Partial<FilterSchoolTypeRequestBody>,
      options: UseQueryOptions<
        FilterSchoolTypeResponseBody,
        unknown,
        FilterSchoolTypeResponseBody,
        DefaultQueryKey<Partial<FilterSchoolTypeRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterSchoolTypeQueryKey, params], filterSchoolTypeApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterSchoolType = async (
      queryClient: QueryClient,
      params?: Partial<FilterSchoolTypeRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterSchoolTypeQueryKey, params],
        queryFn: filterSchoolTypeApi,
      });
    };
  


export * from './request';
