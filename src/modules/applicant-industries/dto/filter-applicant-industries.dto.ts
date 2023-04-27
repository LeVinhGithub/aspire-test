
import { ApplicantIndustry } from "entities/applicant_industries";
import { NumberFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";

export class FilterApplicantIndustryRequest {
  @NumberFieldOptional({ int: true})
  industry_id?: number;
@NumberFieldOptional({ int: true})
  applicant_id?: number;

}
export class FilterApplicantIndustryRequestDTO {
  @ObjectFieldOptional(FilterApplicantIndustryRequest)
  applicant_industries?: FilterApplicantIndustryRequest;
@NumberFieldOptional({ int: true})
  pagination_page?: number;
@NumberFieldOptional({ int: true})
  pagination_limit?: number;

}
export class FilterApplicantIndustryResponse {
  id: number;
created_at: Date;
updated_at: Date;
industry_id: number;
applicant_id: number;

}


export class FilterApplicantIndustryResponseDTO {
  applicant_industries: FilterApplicantIndustryResponse[];
    total_pages?: number;
    total_count: number;
  
  constructor(
    applicant_industries: (ApplicantIndustry)[],
    total_count: number,
    total_pages?: number  ) {
    this.applicant_industries = applicant_industries.map((applicant_industry) => ({
          ...applicant_industry,
          id: applicant_industry?.id,
created_at: applicant_industry?.created_at,
updated_at: applicant_industry?.updated_at,
industry_id: applicant_industry?.industry_id,
applicant_id: applicant_industry?.applicant_id
        }));
        this.total_pages = total_pages;
        this.total_count = total_count;
  }
}
