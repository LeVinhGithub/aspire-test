
import { useMutation, MutateOptions, useQueryClient } from "react-query";
import { CreateTargetListApplicantRequestBody, CreateTargetListApplicantResponseBody, createTargetListApplicantApi, DeleteTargetListApplicantRequestBody, DeleteTargetListApplicantResponseBody, deleteTargetListApplicantApi } from "./request";



  
    export const useCreateTargetListApplicantMutation = (
      options: MutateOptions<
        CreateTargetListApplicantResponseBody,
        unknown,
        CreateTargetListApplicantRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(createTargetListApplicantApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("TargetListApplicant");
        },
      });
    };
  

  
    export const useDeleteTargetListApplicantMutation = (
      options: MutateOptions<
        DeleteTargetListApplicantResponseBody,
        unknown,
        DeleteTargetListApplicantRequestBody,        
        unknown
      > = {}
    ) => {
      const queryClient = useQueryClient();
      return useMutation(deleteTargetListApplicantApi, {
        ...options,
        onSuccess: (data, variables, context) => {
          options.onSuccess && options.onSuccess(data, variables, context);
          queryClient.invalidateQueries("TargetListApplicant");
        },
      });
    };
  


export * from './request';
