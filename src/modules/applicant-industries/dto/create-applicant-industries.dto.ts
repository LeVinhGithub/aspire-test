
import { ApplicantIndustry } from "entities/applicant_industries";
import { NumberField, ObjectField } from "src/decorators/field.decorator";

export class CreateApplicantIndustryRequest {
  @NumberField({ int: true})
  industry_id: number;
@NumberField({ int: true})
  applicant_id: number;

}
export class CreateApplicantIndustryRequestDTO {
  @ObjectField(CreateApplicantIndustryRequest)
  applicant_industries: CreateApplicantIndustryRequest;

}
export class CreateApplicantIndustryResponse {
  id: number;
created_at: Date;
updated_at: Date;
industry_id: number;
applicant_id: number;

}
export class CreateErrorObjectResponse {
  
}

export class CreateApplicantIndustryResponseDTO {
  
  applicant_industry: CreateApplicantIndustryResponse
    error_object: Object;
  
  
  constructor(
    applicant_industry: ApplicantIndustry,
    error_object?: Object  ) {
    this.applicant_industry = { ...applicant_industry, id: applicant_industry?.id,
created_at: applicant_industry?.created_at,
updated_at: applicant_industry?.updated_at,
industry_id: applicant_industry?.industry_id,
applicant_id: applicant_industry?.applicant_id };
        this.error_object = error_object;
      }
  }
