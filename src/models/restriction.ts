

export enum ReasonEnum {
    OTHER = "Other",
    HARRASING_VANDALISM = "HarrasingVandalism",
    SELECTION_UNMATCHED = "SelectionUnmatched"
}

export type RestrictionModel = {
      id: number;
      created_at: Date;
      updated_at: Date;
      company_id: number;
      applicant_id: number;
      reason: `${ReasonEnum}`;
  
}