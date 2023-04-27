
import { ApplicantSchool } from "entities/applicant_schools";
import { DateField, StringField, StringFieldOptional, NumberField, ObjectField } from "src/decorators/field.decorator";

export class CreateApplicantSchoolRequest {
  @DateField({})
  graduation_date: Date;
@StringField({ maxLength: 255, minLength: 0})
  name: string;
@StringFieldOptional({ maxLength: 255, minLength: 0})
  degree?: string;
@StringFieldOptional({ maxLength: 255, minLength: 0})
  major?: string;
@NumberField({ int: true})
  school_type_id: number;
@NumberField({ int: true})
  applicant_id: number;

}
export class CreateApplicantSchoolRequestDTO {
  @ObjectField(CreateApplicantSchoolRequest)
  applicant_schools: CreateApplicantSchoolRequest;

}
export class CreateApplicantSchoolResponse {
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
export class CreateErrorObjectResponse {
  
}

export class CreateApplicantSchoolResponseDTO {
  
  applicant_school: CreateApplicantSchoolResponse
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
