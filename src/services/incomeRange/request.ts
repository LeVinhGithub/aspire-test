
import { serviceFetch } from "@utils/service";
import { getRoute } from "@utils/route";
import { QueryFunctionContext } from "react-query";
import { DefaultQueryKey } from "@interfaces/query";
import { IncomeRangeModel } from "@models/incomeRange";
import { ApplicantModel } from "@models/applicant";
import { ApplicantLanguageModel } from "@models/applicantLanguage";
import { ApplicantSchoolModel } from "@models/applicantSchool";
import { ApplicantIndustryModel } from "@models/applicantIndustry";
import { MessageModel } from "@models/message";
import { JobApplicationModel } from "@models/jobApplication";
import { JobOpeningFavoriteModel } from "@models/jobOpeningFavorite";
import { JobExperienceModel } from "@models/jobExperience";
import { SkillModel } from "@models/skill";
import { JobOpeningModel } from "@models/jobOpening";
import { JobOpeningValuedCompetencyModel } from "@models/jobOpeningValuedCompetency";


    
    export const DefaultFilterIncomeRangeQueryKey:[string, string, string] = ["IncomeRange", "filter", "/api/income_ranges"];    
    

  export type FilterIncomeRangeRequestBody = {
    income_ranges: {
        name?: string;

      };
pagination_page?: number;
pagination_limit?: number;
  };

  export type FilterIncomeRangeResponseBody = {
    total_pages: number;
income_ranges: (IncomeRangeModel & { applicants: (Omit<ApplicantModel, 'encrypted_password' | 'reset_password_token' | 'reset_password_sent_at' | 'remember_created_at' | 'current_sign_in_at' | 'last_sign_in_at' | 'current_sign_in_ip' | 'last_sign_in_ip' | 'sign_in_count' | 'password' | 'password_confirmation' | 'locked_at' | 'failed_attempts' | 'unlock_token' | 'confirmation_token' | 'unconfirmed_email' | 'confirmed_at' | 'confirmation_sent_at' | 'is_onboarded' | 'notes' | 'current_company_name' | 'current_company_department' | 'current_company_position' | 'confirmation_email_resent_count' | 'number_of_companies' | 'is_suspended' | 'desired_info' | 'management_experience_years'> & { applicant_languages: Omit<ApplicantLanguageModel, 'other_language'>[];
applicant_schools: ApplicantSchoolModel[];
applicant_industries: ApplicantIndustryModel[];
messages: Omit<MessageModel, 'is_from_applicant' | 'is_read'>[];
job_applications: Omit<JobApplicationModel, 'user_name_disclosed'>[];
job_opening_favorites: Omit<JobOpeningFavoriteModel, 'applicant_id'>[];
job_experiences: JobExperienceModel[];
skills: Omit<SkillModel, 'skill_type'>[];
 })[];
job_openings: (Omit<JobOpeningModel, 'department' | 'status' | 'pv'> & { deployment: JobOpeningModel["department"];
job_applications: Omit<JobApplicationModel, 'approached_by_scout' | 'user_name_disclosed'>[];
job_opening_favorites: Omit<JobOpeningFavoriteModel, 'applicant_id'>[];
job_opening_valued_competencies: JobOpeningValuedCompetencyModel[];
 })[];
 })[];
  };

    
    
    export const filterIncomeRangeApi = async (
      context: QueryFunctionContext<DefaultQueryKey<Partial<FilterIncomeRangeRequestBody> | undefined>>      
    ): Promise<FilterIncomeRangeResponseBody> => {
      return serviceFetch({
        url: getRoute("/api/income_ranges", context.queryKey[3]),
        params: context.queryKey[3] || {},
        method: "GET",
      });
    };
    



  
