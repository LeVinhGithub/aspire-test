
import { ApplicantLanguage, ProficiencyEnum as ApplicantLanguageProficiencyEnum } from "entities/applicant_languages";
import { EnumFieldOptional, NumberFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";

export class FilterApplicantLanguageRequest {
  @EnumFieldOptional(() => ApplicantLanguageProficiencyEnum)
  proficiency?: ApplicantLanguageProficiencyEnum;
@NumberFieldOptional({ int: true})
  language_id?: number;
@NumberFieldOptional({ int: true})
  applicant_id?: number;

}
export class FilterApplicantLanguageRequestDTO {
  @ObjectFieldOptional(FilterApplicantLanguageRequest)
  applicant_languages?: FilterApplicantLanguageRequest;
@NumberFieldOptional({ int: true})
  pagination_page?: number;
@NumberFieldOptional({ int: true})
  pagination_limit?: number;

}
export class FilterApplicantLanguageResponse {
  id: number;
created_at: Date;
updated_at: Date;
proficiency: `${ApplicantLanguageProficiencyEnum}`;
language_id: number;
applicant_id: number;

}


export class FilterApplicantLanguageResponseDTO {
  applicant_languages: FilterApplicantLanguageResponse[];
    total_pages?: number;
    total_count: number;
  
  constructor(
    applicant_languages: (ApplicantLanguage)[],
    total_count: number,
    total_pages?: number  ) {
    this.applicant_languages = applicant_languages.map((applicant_language) => ({
          ...applicant_language,
          id: applicant_language?.id,
created_at: applicant_language?.created_at,
updated_at: applicant_language?.updated_at,
proficiency: applicant_language?.proficiency,
language_id: applicant_language?.language_id,
applicant_id: applicant_language?.applicant_id
        }));
        this.total_pages = total_pages;
        this.total_count = total_count;
  }
}
