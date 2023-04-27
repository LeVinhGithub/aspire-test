

export enum StatusEnum {
    INTERVIEW_ADJUSTMENT = "interview_adjustment",
    PRIMARY_INTERVIEW = "primary_interview",
    SECONDARY_INTERVIEW = "secondary_interview",
    FINAL_INTERVIEW = "final_interview",
    UNOFFICIAL_OFFER = "unofficial_offer",
    JOINING_THE_COMPANY = "joining_the_company",
    REJECTED = "rejected",
    DECLINED = "declined",
    NOT_ENTERED = "not_entered"
}

export type JobApplicationModel = {
      id: number;
      created_at: Date;
      updated_at: Date;
      applicant_id: number;
      job_opening_id: number;
      status: `${StatusEnum}`;
      approached_by_scout: boolean;
      user_name_disclosed: boolean;
  
}