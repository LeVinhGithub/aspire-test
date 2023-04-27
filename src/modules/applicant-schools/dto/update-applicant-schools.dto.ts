
import { ApplicantSchool } from "entities/applicant_schools";
import { NumberField, DateFieldOptional, StringFieldOptional, NumberFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";

export class UpdateApplicantSchoolParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class UpdateApplicantSchoolRequest {
  @DateFieldOptional({})
  graduation_date?: Date;
@StringFieldOptional({ maxLength: 255, minLength: 0})
  name?: string;
@StringFieldOptional({ maxLength: 255, minLength: 0})
  degree?: string;
@StringFieldOptional({ maxLength: 255, minLength: 0})
  major?: string;
@NumberFieldOptional({ int: true})
  school_type_id?: number;
@NumberFieldOptional({ int: true})
  applicant_id?: number;

}
export class UpdateApplicantSchoolRequestDTO {
  @ObjectFieldOptional(UpdateApplicantSchoolRequest)
  applicant_schools?: UpdateApplicantSchoolRequest;

}
export class UpdateApplicantSchoolResponse {
  id: number;
created_at: Date;
updated_at: Date;
graduation_date: Date;
name: string;
degree: string;
major: string;
school_type_id: number;
applicant_id: number;

}
export class UpdateErrorObjectResponse {
  
}

export class UpdateApplicantSchoolResponseDTO {
  
  applicant_school: UpdateApplicantSchoolResponse
    error_object: Object;
  
  
  constructor(
    applicant_school: ApplicantSchool,
    error_object?: Object  ) {
    this.applicant_school = { ...applicant_school, id: applicant_school?.id,
created_at: applicant_school?.created_at,
updated_at: applicant_school?.updated_at,
graduation_date: applicant_school?.graduation_date,
name: applicant_school?.name,
degree: applicant_school?.degree,
major: applicant_school?.major,
school_type_id: applicant_school?.school_type_id,
applicant_id: applicant_school?.applicant_id };
        this.error_object = error_object;
      }
  }
