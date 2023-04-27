
import { JobApplication, StatusEnum as JobApplicationStatusEnum } from "entities/job_applications";
import { NumberField, EnumField, ObjectField } from "src/decorators/field.decorator";

export class CreateJobApplicationRequest {
  @NumberField({ int: true})
  applicant_id: number;
@NumberField({ int: true})
  job_opening_id: number;
@EnumField(() => JobApplicationStatusEnum)
  status: JobApplicationStatusEnum;

}
export class CreateJobApplicationRequestDTO {
  @ObjectField(CreateJobApplicationRequest)
  job_applications: CreateJobApplicationRequest;

}
export class CreateJobApplicationResponse {
  id: number;
created_at: Date;
updated_at: Date;
applicant_id: number;
job_opening_id: number;
status: `${JobApplicationStatusEnum}`;

}
export class CreateErrorObjectResponse {
  
}

export class CreateJobApplicationResponseDTO {
  
  job_application: CreateJobApplicationResponse
    error_object: Object;
  
  
  constructor(
    job_application: JobApplication,
    error_object?: Object  ) {
    this.job_application = { ...job_application, id: job_application?.id,
created_at: job_application?.created_at,
updated_at: job_application?.updated_at,
applicant_id: job_application?.applicant_id,
job_opening_id: job_application?.job_opening_id,
status: job_application?.status };
        this.error_object = error_object;
      }
  }
