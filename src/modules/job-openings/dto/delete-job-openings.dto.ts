
import { NumberField, StringField, DateField, ObjectField } from "src/decorators/field.decorator";
import { StorageFile } from "entities/storage_files";
import { StatusEnum as JobOpeningStatusEnum } from "entities/job_openings";

export class DeleteJobOpeningParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class DeleteJobOpeningRequest {
  @NumberField({})
  income_range_id: number;
@NumberField({})
  employment_status_id: number;
@NumberField({})
  occupation_type_id: number;
@StringField({})
  job_description: string;
@NumberField({})
  company_id: number;
@StringField({})
  trial_period: string;
@StringField({})
  working_hours: string;
@StringField({})
  department: string;
@StringField({})
  avg_overtime_hours: string;
@StringField({})
  qualification: string;
@StringField({})
  trial_period_conditions: string;
@NumberField({})
  passive_smoking_countermeasure_id: number;
@StringField({})
  vacation: string;
@NumberField({})
  career_direction_id: number;
@NumberField({})
  job_title_id: number;
@StringField({})
  slug: string;
@DateField({})
  publication_start_date: Date;

}
export class DeleteJobOpeningRequestDTO {
  @ObjectField(DeleteJobOpeningRequest)
  job_openings: DeleteJobOpeningRequest;

}
export class JobTitleDeleteJobOpeningResponse {
  id: number;
created_at: Date;
name: string;

}
export class DeleteJobOpeningResponse {
  id: number;
created_at: Date;
updated_at: Date;
department: string;
position: string;
occupation_type_id: number;
location_id: number;
income_range_id: number;
job_description: string;
is_remote_available: boolean;
employment_status_id: number;
company_id: number;
trial_period: string;
working_hours: string;
avg_overtime_hours: string;
trial_period_conditions: string;
workplace: string;
qualification: string;
benefits: string;
vacation: string;
bonus: string;
promotion: string;
appeal_point: string;
passive_smoking_countermeasure_id: number;
career_direction_id: number;
job_title_id: number;
future_career_path: string;
trending_keywords: string;
business_trip_availability: boolean;
transfers: boolean;
publication_start_date: Date;
publication_end_date: Date;
slug: string;
image: StorageFile;
is_recommended: boolean;
status: `${JobOpeningStatusEnum}`;
pv: number;
job_title: JobTitleDeleteJobOpeningResponse;

}

export class DeleteJobOpeningResponseDTO {
  }
