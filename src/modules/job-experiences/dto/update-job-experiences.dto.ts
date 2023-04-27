
import { JobExperience } from "entities/job_experiences";
import { NumberField, StringFieldOptional, DateFieldOptional, NumberFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";

export class UpdateJobExperienceParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class UpdateJobExperienceRequest {
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
export class UpdateJobExperienceRequestDTO {
  @ObjectFieldOptional(UpdateJobExperienceRequest)
  job_experiences?: UpdateJobExperienceRequest;

}
export class UpdateJobExperienceResponse {
  id: number;
created_at: Date;
updated_at: Date;
company_name: string;
start_date: Date;
end_date: Date;
applicant_id: number;
job_title_id: number;

}
export class UpdateErrorObjectResponse {
  
}

export class UpdateJobExperienceResponseDTO {
  
  job_experience: UpdateJobExperienceResponse
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
