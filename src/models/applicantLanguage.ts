

export enum ProficiencyEnum {
    BASIC = "Basic",
    INTERMEDIATE = "Intermediate",
    ADVANCED = "Advanced",
    NATIVE = "Native"
}

export type ApplicantLanguageModel = {
      id: number;
      created_at: Date;
      updated_at: Date;
      proficiency: `${ProficiencyEnum}`;
      language_id: number;
      applicant_id: number;
      other_language: string;
  
}