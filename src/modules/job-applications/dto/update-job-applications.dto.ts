
import { JobApplication, StatusEnum as JobApplicationStatusEnum } from "entities/job_applications";
import { NumberField, NumberFieldOptional, EnumFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";

export class UpdateJobApplicationParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class UpdateJobApplicationRequest {
  @NumberFieldOptional({ int: true})
  applicant_id?: number;
@NumberFieldOptional({ int: true})
  job_opening_id?: number;
@EnumFieldOptional(() => JobApplicationStatusEnum)
  status?: JobApplicationStatusEnum;

}
export class UpdateJobApplicationRequestDTO {
  @ObjectFieldOptional(UpdateJobApplicationRequest)
  job_applications?: UpdateJobApplicationRequest;

}
export class UpdateJobApplicationResponse {
  id: number;
created_at: Date;
updated_at: Date;
applicant_id: number;
job_opening_id: number;
status: `${JobApplicationStatusEnum}`;

}
export class UpdateErrorObjectResponse {
  
}

export class UpdateJobApplicationResponseDTO {
  
  job_application: UpdateJobApplicationResponse
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
