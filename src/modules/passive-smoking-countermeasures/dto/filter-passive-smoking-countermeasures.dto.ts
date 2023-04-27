
import { PassiveSmokingCountermeasure } from "entities/passive_smoking_countermeasures";
import { StringFieldOptional, ObjectFieldOptional, NumberFieldOptional } from "src/decorators/field.decorator";
import { StatusEnum as JobApplicationStatusEnum } from "entities/job_applications";
import { StorageFile } from "entities/storage_files";

export class FilterPassiveSmokingCountermeasureRequest {
  @StringFieldOptional({ maxLength: 255, minLength: 0})
  name?: string;

}
export class FilterPassiveSmokingCountermeasureRequestDTO {
  @ObjectFieldOptional(FilterPassiveSmokingCountermeasureRequest)
  passive_smoking_countermeasures?: FilterPassiveSmokingCountermeasureRequest;
@NumberFieldOptional({ int: true})
  pagination_page?: number;
@NumberFieldOptional({ int: true})
  pagination_limit?: number;

}
export class JobApplicationJobOpeningFilterPassiveSmokingCountermeasureResponse {
  id: number;
created_at: Date;
updated_at: Date;
applicant_id: number;
job_opening_id: number;
status: `${JobApplicationStatusEnum}`;
approached_by_scout: boolean;

}
export class JobOpeningFavoriteJobOpeningFilterPassiveSmokingCountermeasureResponse {
  id: number;
created_at: Date;
updated_at: Date;
job_opening_id: number;

}
export class JobOpeningValuedCompetencyJobOpeningFilterPassiveSmokingCountermeasureResponse {
  id: number;
created_at: Date;
updated_at: Date;
job_opening_id: number;
valued_competency_id: number;

}
export class JobOpeningFilterPassiveSmokingCountermeasureResponse {
  id: number;
created_at: Date;
updated_at: Date;
deployment: string;
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
job_applications: JobApplicationJobOpeningFilterPassiveSmokingCountermeasureResponse[];
job_opening_favorites: JobOpeningFavoriteJobOpeningFilterPassiveSmokingCountermeasureResponse[];
job_opening_valued_competencies: JobOpeningValuedCompetencyJobOpeningFilterPassiveSmokingCountermeasureResponse[];
slug: string;
image: StorageFile;
is_recommended: boolean;
publication_start_date: Date;
publication_end_date: Date;

}
export class FilterPassiveSmokingCountermeasureResponse {
  id: number;
created_at: Date;
updated_at: Date;
job_openings: JobOpeningFilterPassiveSmokingCountermeasureResponse[];
passive_smoking_countermeasure_id: number;
name: string;

}


export class FilterPassiveSmokingCountermeasureResponseDTO {
  passive_smoking_countermeasures: FilterPassiveSmokingCountermeasureResponse[];
    total_pages?: number;
    total_count: number;
  
  constructor(
    passive_smoking_countermeasures: (PassiveSmokingCountermeasure & { passive_smoking_countermeasure_id?: number })[],
    total_count: number,
    total_pages?: number  ) {
    this.passive_smoking_countermeasures = passive_smoking_countermeasures.map((passive_smoking_countermeasure) => ({
          ...passive_smoking_countermeasure,
          id: passive_smoking_countermeasure?.id,
created_at: passive_smoking_countermeasure?.created_at,
updated_at: passive_smoking_countermeasure?.updated_at,
job_openings: passive_smoking_countermeasure?.job_openings?.map((job_opening) => ({
            ...job_opening,
            id: job_opening?.id,
created_at: job_opening?.created_at,
updated_at: job_opening?.updated_at,
deployment: job_opening?.department,
position: job_opening?.position,
occupation_type_id: job_opening?.occupation_type_id,
location_id: job_opening?.location_id,
income_range_id: job_opening?.income_range_id,
job_description: job_opening?.job_description,
is_remote_available: job_opening?.is_remote_available,
employment_status_id: job_opening?.employment_status_id,
company_id: job_opening?.company_id,
trial_period: job_opening?.trial_period,
working_hours: job_opening?.working_hours,
avg_overtime_hours: job_opening?.avg_overtime_hours,
trial_period_conditions: job_opening?.trial_period_conditions,
workplace: job_opening?.workplace,
qualification: job_opening?.qualification,
benefits: job_opening?.benefits,
vacation: job_opening?.vacation,
bonus: job_opening?.bonus,
promotion: job_opening?.promotion,
appeal_point: job_opening?.appeal_point,
passive_smoking_countermeasure_id: job_opening?.passive_smoking_countermeasure_id,
career_direction_id: job_opening?.career_direction_id,
job_title_id: job_opening?.job_title_id,
future_career_path: job_opening?.future_career_path,
trending_keywords: job_opening?.trending_keywords,
business_trip_availability: job_opening?.business_trip_availability,
transfers: job_opening?.transfers,
job_applications: job_opening?.job_applications?.map((job_application) => ({
            ...job_application,
            id: job_application?.id,
created_at: job_application?.created_at,
updated_at: job_application?.updated_at,
applicant_id: job_application?.applicant_id,
job_opening_id: job_application?.job_opening_id,
status: job_application?.status,
approached_by_scout: job_application?.approached_by_scout
          })),
job_opening_favorites: job_opening?.job_opening_favorites?.map((job_opening_favorite) => ({
            ...job_opening_favorite,
            id: job_opening_favorite?.id,
created_at: job_opening_favorite?.created_at,
updated_at: job_opening_favorite?.updated_at,
job_opening_id: job_opening_favorite?.job_opening_id
          })),
job_opening_valued_competencies: job_opening?.job_opening_valued_competencies?.map((job_opening_valued_competency) => ({
            ...job_opening_valued_competency,
            id: job_opening_valued_competency?.id,
created_at: job_opening_valued_competency?.created_at,
updated_at: job_opening_valued_competency?.updated_at,
job_opening_id: job_opening_valued_competency?.job_opening_id,
valued_competency_id: job_opening_valued_competency?.valued_competency_id
          })),
slug: job_opening?.slug,
image: job_opening?.image,
is_recommended: job_opening?.is_recommended,
publication_start_date: job_opening?.publication_start_date,
publication_end_date: job_opening?.publication_end_date
          })),
passive_smoking_countermeasure_id: passive_smoking_countermeasure?.passive_smoking_countermeasure_id,
name: passive_smoking_countermeasure?.name
        }));
        this.total_pages = total_pages;
        this.total_count = total_count;
  }
}
