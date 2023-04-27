

export enum SkillTypeEnum {
    SKILL = "skill",
    QUALIFICATION = "qualification"
}

export type SkillModel = {
      id: number;
      created_at: Date;
      updated_at: Date;
      name: string;
      applicant_id: number;
      skill_type: `${SkillTypeEnum}`;
  
}