
import { SchoolType } from "entities/school_types";
import { StringFieldOptional, ObjectFieldOptional, NumberFieldOptional } from "src/decorators/field.decorator";

export class FilterSchoolTypeRequest {
  @StringFieldOptional({ maxLength: 100, minLength: 0})
  name?: string;

}
export class FilterSchoolTypeRequestDTO {
  @ObjectFieldOptional(FilterSchoolTypeRequest)
  school_types?: FilterSchoolTypeRequest;
@NumberFieldOptional({ int: true})
  pagination_page?: number;
@NumberFieldOptional({ int: true})
  pagination_limit?: number;

}
export class ApplicantSchoolFilterSchoolTypeResponse {
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
export class FilterSchoolTypeResponse {
  id: number;
created_at: Date;
updated_at: Date;
name: string;
applicant_schools: ApplicantSchoolFilterSchoolTypeResponse[];
school_type_id: number;

}


export class FilterSchoolTypeResponseDTO {
  school_types: FilterSchoolTypeResponse[];
    total_pages?: number;
    total_count: number;
  
  constructor(
    school_types: (SchoolType & { school_type_id?: number })[],
    total_count: number,
    total_pages?: number  ) {
    this.school_types = school_types.map((school_type) => ({
          ...school_type,
          id: school_type?.id,
created_at: school_type?.created_at,
updated_at: school_type?.updated_at,
name: school_type?.name,
applicant_schools: school_type?.applicant_schools?.map((applicant_school) => ({
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
          })),
school_type_id: school_type?.school_type_id
        }));
        this.total_pages = total_pages;
        this.total_count = total_count;
  }
}
