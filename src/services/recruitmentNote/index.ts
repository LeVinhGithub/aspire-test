
import { useQuery, UseQueryOptions, QueryClient, useMutation, MutateOptions, useQueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterRecruitmentNoteRequestBody, FilterRecruitmentNoteResponseBody, filterRecruitmentNoteApi, DefaultFilterRecruitmentNoteQueryKey, CreateRecruitmentNoteRequestBody, CreateRecruitmentNoteResponseBody, createRecruitmentNoteApi, UpdateRecruitmentNoteRequestBody, UpdateRecruitmentNoteResponseBody, updateRecruitmentNoteApi } from "./request";



  
    
    
    export const useFilterRecruitmentNoteQuery = (
      params?: Partial<FilterRecruitmentNoteRequestBody>,
      options: UseQueryOptions<
        FilterRecruitmentNoteResponseBody,
        unknown,
        FilterRecruitmentNoteResponseBody,
        DefaultQueryKey<Partial<FilterRecruitmentNoteRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterRecruitmentNoteQueryKey, params], filterRecruitmentNoteApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterRecruitmentNote = async (
      queryClient: QueryClient,
      params?: Partial<FilterRecruitmentNoteRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterRecruitmentNoteQueryKey, params],
        queryFn: filterRecruitmentNoteApi,
      });
    };
  

  
    export const useCreateRecruitmentNoteMutation = (
      options: MutateOptions<
        CreateRecruitmentNoteResponseBody,
        unknown,
        CreateRecruitmentNoteRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(createRecruitmentNoteApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("RecruitmentNote");
        },
      });
    };
  

  
    export const useUpdateRecruitmentNoteMutation = (
      options: MutateOptions<
        UpdateRecruitmentNoteResponseBody,
        unknown,
        UpdateRecruitmentNoteRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(updateRecruitmentNoteApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("RecruitmentNote");
        },
      });
    };
  


export * from './request';
