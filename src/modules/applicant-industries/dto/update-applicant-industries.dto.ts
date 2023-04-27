
import { ApplicantIndustry } from "entities/applicant_industries";
import { NumberField, NumberFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";

export class UpdateApplicantIndustryParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class UpdateApplicantIndustryRequest {
  @NumberFieldOptional({ int: true})
  industry_id?: number;
@NumberFieldOptional({ int: true})
  applicant_id?: number;

}
export class UpdateApplicantIndustryRequestDTO {
  @ObjectFieldOptional(UpdateApplicantIndustryRequest)
  applicant_industries?: UpdateApplicantIndustryRequest;

}
export class UpdateApplicantIndustryResponse {
  id: number;
created_at: Date;
updated_at: Date;
industry_id: number;
applicant_id: number;

}
export class UpdateErrorObjectResponse {
  
}

export class UpdateApplicantIndustryResponseDTO {
  
  applicant_industry: UpdateApplicantIndustryResponse
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
