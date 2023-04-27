
import { JobApplication, StatusEnum as JobApplicationStatusEnum } from "entities/job_applications";
import { NumberFieldOptional, EnumFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";

export class FilterJobApplicationRequest {
  @NumberFieldOptional({ int: true})
  applicant_id?: number;
@NumberFieldOptional({ int: true})
  job_opening_id?: number;
@EnumFieldOptional(() => JobApplicationStatusEnum)
  status?: JobApplicationStatusEnum;

}
export class FilterJobApplicationRequestDTO {
  @ObjectFieldOptional(FilterJobApplicationRequest)
  job_applications?: FilterJobApplicationRequest;
@NumberFieldOptional({ int: true})
  pagination_page?: number;
@NumberFieldOptional({ int: true})
  pagination_limit?: number;

}
export class FilterJobApplicationResponse {
  id: number;
created_at: Date;
updated_at: Date;
applicant_id: number;
job_opening_id: number;
status: `${JobApplicationStatusEnum}`;

}


export class FilterJobApplicationResponseDTO {
  job_applications: FilterJobApplicationResponse[];
    total_pages?: number;
    total_count: number;
  
  constructor(
    job_applications: (JobApplication)[],
    total_count: number,
    total_pages?: number  ) {
    this.job_applications = job_applications.map((job_application) => ({
          ...job_application,
          id: job_application?.id,
created_at: job_application?.created_at,
updated_at: job_application?.updated_at,
applicant_id: job_application?.applicant_id,
job_opening_id: job_application?.job_opening_id,
status: job_application?.status
        }));
        this.total_pages = total_pages;
        this.total_count = total_count;
  }
}
