
import { serviceFetch } from "@utils/service";
import { getRoute } from "@utils/route";
import { TargetListApplicantModel } from "@models/targetListApplicant";
import { TargetListModel } from "@models/targetList";
import { ApplicantModel } from "@models/applicant";


    

  export type CreateTargetListApplicantRequestBody = {
    target_list_applicants: {
        target_list_id?: number;
applicant_id?: number;

      };
  };

  export type CreateTargetListApplicantResponseBody = {
    target_list_applicant: TargetListApplicantModel & { target_list: TargetListModel;
applicant: Omit<ApplicantModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at' | 'desired_info' | 'management_experience_years'>;
 };
error_object: any;
  };

  
    export const createTargetListApplicantApi = async (
      body: CreateTargetListApplicantRequestBody
    ): Promise<CreateTargetListApplicantResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/target_list_applicants", body),
        method: "POST",
        data: body,
      });
    };
    

    

  export type DeleteTargetListApplicantRequestBody = {
    id: string;
  };

  export type DeleteTargetListApplicantResponseBody = {
      };

  
    export const deleteTargetListApplicantApi = async (
      body: DeleteTargetListApplicantRequestBody
    ): Promise<DeleteTargetListApplicantResponseBody> => {      
      
      return serviceFetch({
        url: getRoute("/api/target_list_applicants/:id", body),
        method: "DELETE",
        data: body,
      });
    };
    



  
