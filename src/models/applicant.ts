

export enum AvailabilityEnum {
    IMMEDIATE = "immediate",
    WITHIN_3_MONTHS = "within_3_months",
    WITHIN_6_MONTHS = "within_6_months",
    WITHIN_1_YEAR = "within_1_year",
    IF_I_FIND_A_GOOD_COMPANY = "if_I_find_a_good_company",
    NOT_THINKING_ABOUT_IT_NOW = "not_thinking_about_it_now"
}

export enum GenderEnum {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other"
}

export enum ManagementExperienceYearEnum {
    YEARS_0 = "years_0",
    YEARS_1 = "years_1",
    YEARS_2 = "years_2",
    YEARS_3 = "years_3",
    YEARS_4 = "years_4",
    YEARS_5 = "years_5",
    YEARS_6 = "years_6",
    YEARS_7 = "years_7",
    YEARS_8 = "years_8",
    YEARS_9 = "years_9",
    YEARS_10 = "years_10",
    YEARS_10_MORE = "years_10_more"
}

export type ApplicantModel = {
      id: number;
      created_at: Date;
      updated_at: Date;
      full_name: string;
      furigana: string;
      phone_number: string;
      birthdate: Date;
      location_id: number;
      address: string;
      income_range_id: number;
      availability: `${AvailabilityEnum}`;
      resume_file: any;
      description: string;
      management_experience_id: number;
      encrypted_password: string;
      email: string;
      reset_password_token: string;
      reset_password_sent_at: Date;
      remember_created_at: Date;
      current_sign_in_at: Date;
      last_sign_in_at: Date;
      current_sign_in_ip: string;
      last_sign_in_ip: string;
      sign_in_count: number;
      password: string;
      password_confirmation: string;
      locked_at: Date;
      failed_attempts: number;
      unlock_token: string;
      gender: `${GenderEnum}`;
      confirmation_token: string;
      unconfirmed_email: string;
      confirmed_at: Date;
      confirmation_sent_at: Date;
      is_onboarded: boolean;
      notes: string;
      current_company_name: string;
      current_company_department: string;
      current_company_position: string;
      confirmation_email_resent_count: number;
      number_of_companies: number;
      is_suspended: boolean;
      desired_info: string;
      management_experience_years: `${ManagementExperienceYearEnum}`;
  
}