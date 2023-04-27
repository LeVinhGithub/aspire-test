
import { ApplicantSchool } from "entities/applicant_schools";
import { DateFieldOptional, StringFieldOptional, NumberFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";

export class FilterApplicantSchoolRequest {
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
export class FilterApplicantSchoolRequestDTO {
  @ObjectFieldOptional(FilterApplicantSchoolRequest)
  applicant_schools?: FilterApplicantSchoolRequest;
@NumberFieldOptional({ int: true})
  pagination_page?: number;
@NumberFieldOptional({ int: true})
  pagination_limit?: number;

}
export class FilterApplicantSchoolResponse {
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


export class FilterApplicantSchoolResponseDTO {
  applicant_schools: FilterApplicantSchoolResponse[];
    total_pages?: number;
    total_count: number;
  
  constructor(
    applicant_schools: (ApplicantSchool)[],
    total_count: number,
    total_pages?: number  ) {
    this.applicant_schools = applicant_schools.map((applicant_school) => ({
          ...applicant_school,
          id: applicant_school?.id,
created_at: applicant_school?.created_at,
updated_at: applicant_school?.updated_at,
graduation_date: applicant_school?.graduation_date,
name: applicant_school?.name,
degree: applicant_school?.degree,
major: applicant_school?.major,
school_type_id: applicant_school?.school_type_id,
applicant_id: applicant_school?.applicant_id
        }));
        this.total_pages = total_pages;
        this.total_count = total_count;
  }
}
