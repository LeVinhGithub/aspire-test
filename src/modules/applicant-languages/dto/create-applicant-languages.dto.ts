
import { ApplicantLanguage, ProficiencyEnum as ApplicantLanguageProficiencyEnum } from "entities/applicant_languages";
import { EnumField, NumberField, ObjectField } from "src/decorators/field.decorator";

export class CreateApplicantLanguageRequest {
  @EnumField(() => ApplicantLanguageProficiencyEnum)
  proficiency: ApplicantLanguageProficiencyEnum;
@NumberField({ int: true})
  language_id: number;
@NumberField({ int: true})
  applicant_id: number;

}
export class CreateApplicantLanguageRequestDTO {
  @ObjectField(CreateApplicantLanguageRequest)
  applicant_languages: CreateApplicantLanguageRequest;

}
export class CreateApplicantLanguageResponse {
  id: number;
created_at: Date;
updated_at: Date;
proficiency: `${ApplicantLanguageProficiencyEnum}`;
language_id: number;
applicant_id: number;

}
export class CreateErrorObjectResponse {
  
}

export class CreateApplicantLanguageResponseDTO {
  
  applicant_language: CreateApplicantLanguageResponse
    error_object: Object;
  
  
  constructor(
    applicant_language: ApplicantLanguage,
    error_object?: Object  ) {
    this.applicant_language = { ...applicant_language, id: applicant_language?.id,
created_at: applicant_language?.created_at,
updated_at: applicant_language?.updated_at,
proficiency: applicant_language?.proficiency,
language_id: applicant_language?.language_id,
applicant_id: applicant_language?.applicant_id };
        this.error_object = error_object;
      }
  }
