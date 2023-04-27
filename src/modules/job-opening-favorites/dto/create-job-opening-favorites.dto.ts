
import { JobOpeningFavorite } from "entities/job_opening_favorites";
import { NumberField, ObjectField } from "src/decorators/field.decorator";

export class CreateJobOpeningFavoriteRequest {
  @NumberField({ int: true})
  job_opening_id: number;
@NumberField({ int: true})
  applicant_id: number;

}
export class CreateJobOpeningFavoriteRequestDTO {
  @ObjectField(CreateJobOpeningFavoriteRequest)
  job_opening_favorites: CreateJobOpeningFavoriteRequest;

}
export class CreateJobOpeningFavoriteResponse {
  id: number;
created_at: Date;
updated_at: Date;
job_opening_id: number;
applicant_id: number;

}
export class CreateErrorObjectResponse {
  
}

export class CreateJobOpeningFavoriteResponseDTO {
  
  job_opening_favorite: CreateJobOpeningFavoriteResponse
    error_object: Object;
  
  
  constructor(
    job_opening_favorite: JobOpeningFavorite,
    error_object?: Object  ) {
    this.job_opening_favorite = { ...job_opening_favorite, id: job_opening_favorite?.id,
created_at: job_opening_favorite?.created_at,
updated_at: job_opening_favorite?.updated_at,
job_opening_id: job_opening_favorite?.job_opening_id,
applicant_id: job_opening_favorite?.applicant_id };
        this.error_object = error_object;
      }
  }
