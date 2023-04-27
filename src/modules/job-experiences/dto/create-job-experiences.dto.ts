
import { JobExperience } from "entities/job_experiences";
import { StringField, DateField, DateFieldOptional, NumberField, ObjectField } from "src/decorators/field.decorator";

export class CreateJobExperienceRequest {
  @StringField({ maxLength: 255, minLength: 0})
  company_name: string;
@DateField({ inPast: true})
  start_date: Date;
@DateFieldOptional({ inPast: true})
  end_date?: Date;
@NumberField({ int: true})
  applicant_id: number;
@NumberField({ int: true})
  job_title_id: number;

}
export class CreateJobExperienceRequestDTO {
  @ObjectField(CreateJobExperienceRequest)
  job_experiences: CreateJobExperienceRequest;

}
export class CreateJobExperienceResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_name: string;
start_date: Date;
end_date: Date;
applicant_id: number;
job_title_id: number;

}
export class CreateErrorObjectResponse {
  
}

export class CreateJobExperienceResponseDTO {
  
  job_experience: CreateJobExperienceResponse
    error_object: Object;
  
  
  constructor(
    job_experience: JobExperience,
    error_object?: Object  ) {
    this.job_experience = { ...job_experience, id: job_experience?.id,
created_at: job_experience?.created_at,
updated_at: job_experience?.updated_at,
company_name: job_experience?.company_name,
start_date: job_experience?.start_date,
end_date: job_experience?.end_date,
applicant_id: job_experience?.applicant_id,
job_title_id: job_experience?.job_title_id };
        this.error_object = error_object;
      }
  }
