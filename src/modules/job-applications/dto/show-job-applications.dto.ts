
import { JobApplication, StatusEnum as JobApplicationStatusEnum } from "entities/job_applications";
import { NumberField } from "src/decorators/field.decorator";

export class ShowJobApplicationParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class ShowJobApplicationResponse {
  id: number;
created_at: Date;
updated_at: Date;
applicant_id: number;
job_opening_id: number;
status: `${JobApplicationStatusEnum}`;

}

export class ShowJobApplicationResponseDTO {
  
  job_application: ShowJobApplicationResponse
  
  
  constructor(
    job_application: JobApplication,
      ) {
    this.job_application = { ...job_application, id: job_application?.id,
created_at: job_application?.created_at,
updated_at: job_application?.updated_at,
applicant_id: job_application?.applicant_id,
job_opening_id: job_application?.job_opening_id,
status: job_application?.status };
      }
  }
