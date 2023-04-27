
import { useQuery, UseQueryOptions, QueryClient, useMutation, MutateOptions, useQueryClient } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { DEFAULT_QUERY_OPTIONS } from "@constants/query";
import { FilterSkillRequestBody, FilterSkillResponseBody, filterSkillApi, DefaultFilterSkillQueryKey, CreateSkillRequestBody, CreateSkillResponseBody, createSkillApi, UpdateSkillRequestBody, UpdateSkillResponseBody, updateSkillApi, DeleteSkillRequestBody, DeleteSkillResponseBody, deleteSkillApi } from "./request";



  
    
    
    export const useFilterSkillQuery = (
      params?: Partial<FilterSkillRequestBody>,
      options: UseQueryOptions<
        FilterSkillResponseBody,
        unknown,
        FilterSkillResponseBody,
        DefaultQueryKey<Partial<FilterSkillRequestBody> | undefined>
      > = {}
    ) => {
      return useQuery([...DefaultFilterSkillQueryKey, params], filterSkillApi, {
        ...DEFAULT_QUERY_OPTIONS,
        enabled: !!params,
        ...options,
      });
    };
    
    export const fetchFilterSkill = async (
      queryClient: QueryClient,
      params?: Partial<FilterSkillRequestBody>
    ) => {
      return queryClient.fetchQuery({
        queryKey: [...DefaultFilterSkillQueryKey, params],
        queryFn: filterSkillApi,
      });
    };
  

  
    export const useCreateSkillMutation = (
      options: MutateOptions<
        CreateSkillResponseBody,
        unknown,
        CreateSkillRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(createSkillApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("Skill");
        },
      });
    };
  

  
    export const useUpdateSkillMutation = (
      options: MutateOptions<
        UpdateSkillResponseBody,
        unknown,
        UpdateSkillRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(updateSkillApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("Skill");
        },
      });
    };
  

  
    export const useDeleteSkillMutation = (
      options: MutateOptions<
        DeleteSkillResponseBody,
        unknown,
        DeleteSkillRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(deleteSkillApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("Skill");
        },
      });
    };
  


export * from './request';
