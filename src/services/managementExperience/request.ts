
import { serviceFetch } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { ManagementExperienceModel } from "@models/managementExperience";
import { ApplicantModel } from "@models/applicant";
import { ApplicantLanguageModel } from "@models/applicantLanguage";
import { ApplicantSchoolModel } from "@models/applicantSchool";


    
    export const DefaultFilterManagementExperienceQueryKey:[string, string, string] = ["ManagementExperience", "filter", "/api/management_experiences"];    
    

  export type FilterManagementExperienceRequestBody = {
    management_experiences: {
        name?: string;

      };
pagination_page?: number;
pagination_limit?: number;
  };

  export type FilterManagementExperienceResponseBody = {
    total_pages: number;
management_experiences: (ManagementExperienceModel & { applicants: (Omit<ApplicantModel, 'birthdate' | 'location_id' | 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'gender' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at' | 'number_of_companies' | 'is_suspended' | 'desired_info' | 'management_experience_years'> & { dob: ApplicantModel["birthdate"];
overseas_territory_id: ApplicantModel["location_id"];
applicant_languages: Omit<ApplicantLanguageModel, 'applicant_id'>[];
applicant_schools: ApplicantSchoolModel[];
 })[];
 })[];
  };

    
    
    export const filterManagementExperienceApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterManagementExperienceRequestBody> | undefined>>      
    ): Promise<FilterManagementExperienceResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/management_experiences", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    



  
