
import { Language } from "entities/languages";
import { StringFieldOptional, ObjectFieldOptional, NumberFieldOptional } from "src/decorators/field.decorator";
import { ProficiencyEnum as ApplicantLanguageProficiencyEnum } from "entities/applicant_languages";

export class FilterLanguageRequest {
  @StringFieldOptional({ maxLength: 255, minLength: 0})
  name?: string;

}
export class FilterLanguageRequestDTO {
  @ObjectFieldOptional(FilterLanguageRequest)
  languages?: FilterLanguageRequest;
@NumberFieldOptional({ int: true})
  pagination_page?: number;
@NumberFieldOptional({ int: true})
  pagination_limit?: number;

}
export class ApplicantLanguageFilterLanguageResponse {
  id: number;
created_at: Date;
updated_at: Date;
proficiency: `${ApplicantLanguageProficiencyEnum}`;
language_id: number;
applicant_id: number;
other_language: string;

}
export class FilterLanguageResponse {
  id: number;
created_at: Date;
updated_at: Date;
name: string;
applicant_languages: ApplicantLanguageFilterLanguageResponse[];
language_id: number;

}


export class FilterLanguageResponseDTO {
  languages: FilterLanguageResponse[];
    total_pages?: number;
    total_count: number;
  
  constructor(
    languages: (Language & { language_id?: number })[],
    total_count: number,
    total_pages?: number  ) {
    this.languages = languages.map((language) => ({
          ...language,
          id: language?.id,
created_at: language?.created_at,
updated_at: language?.updated_at,
name: language?.name,
applicant_languages: language?.applicant_languages?.map((applicant_language) => ({
            ...applicant_language,
            id: applicant_language?.id,
created_at: applicant_language?.created_at,
updated_at: applicant_language?.updated_at,
proficiency: applicant_language?.proficiency,
language_id: applicant_language?.language_id,
applicant_id: applicant_language?.applicant_id,
other_language: applicant_language?.other_language
          })),
language_id: language?.language_id
        }));
        this.total_pages = total_pages;
        this.total_count = total_count;
  }
}
