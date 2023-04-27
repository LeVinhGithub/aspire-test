
import { ApplicantLanguage, ProficiencyEnum as ApplicantLanguageProficiencyEnum } from "entities/applicant_languages";
import { NumberField, EnumFieldOptional, NumberFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";

export class UpdateApplicantLanguageParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class UpdateApplicantLanguageRequest {
  @EnumFieldOptional(() => ApplicantLanguageProficiencyEnum)
  proficiency?: ApplicantLanguageProficiencyEnum;
@NumberFieldOptional({ int: true})
  language_id?: number;
@NumberFieldOptional({ int: true})
  applicant_id?: number;

}
export class UpdateApplicantLanguageRequestDTO {
  @ObjectFieldOptional(UpdateApplicantLanguageRequest)
  applicant_languages?: UpdateApplicantLanguageRequest;

}
export class UpdateApplicantLanguageResponse {
  id: number;
created_at: Date;
updated_at: Date;
proficiency: `${ApplicantLanguageProficiencyEnum}`;
language_id: number;
applicant_id: number;

}
export class UpdateErrorObjectResponse {
  
}

export class UpdateApplicantLanguageResponseDTO {
  
  applicant_language: UpdateApplicantLanguageResponse
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
