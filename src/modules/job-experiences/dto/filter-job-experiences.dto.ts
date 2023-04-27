
import { JobExperience } from "entities/job_experiences";
import { StringFieldOptional, DateFieldOptional, NumberFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";

export class FilterJobExperienceRequest {
  @StringFieldOptional({ maxLength: 255, minLength: 0})
  company_name?: string;
@DateFieldOptional({ inPast: true})
  start_date?: Date;
@DateFieldOptional({ inPast: true})
  end_date?: Date;
@NumberFieldOptional({ int: true})
  applicant_id?: number;
@NumberFieldOptional({ int: true})
  job_title_id?: number;

}
export class FilterJobExperienceRequestDTO {
  @ObjectFieldOptional(FilterJobExperienceRequest)
  job_experiences?: FilterJobExperienceRequest;
@NumberFieldOptional({ int: true})
  pagination_page?: number;
@NumberFieldOptional({ int: true})
  pagination_limit?: number;

}
export class FilterJobExperienceResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_name: string;
start_date: Date;
end_date: Date;
applicant_id: number;
job_title_id: number;

}


export class FilterJobExperienceResponseDTO {
  job_experiences: FilterJobExperienceResponse[];
    total_pages?: number;
    total_count: number;
  
  constructor(
    job_experiences: (JobExperience)[],
    total_count: number,
    total_pages?: number  ) {
    this.job_experiences = job_experiences.map((job_experience) => ({
          ...job_experience,
          id: job_experience?.id,
created_at: job_experience?.created_at,
updated_at: job_experience?.updated_at,
company_name: job_experience?.company_name,
start_date: job_experience?.start_date,
end_date: job_experience?.end_date,
applicant_id: job_experience?.applicant_id,
job_title_id: job_experience?.job_title_id
        }));
        this.total_pages = total_pages;
        this.total_count = total_count;
  }
}
