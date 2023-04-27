
import { JobOpeningFavorite } from "entities/job_opening_favorites";
import { NumberField, NumberFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";

export class UpdateJobOpeningFavoriteParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class UpdateJobOpeningFavoriteRequest {
  @NumberFieldOptional({ int: true})
  job_opening_id?: number;
@NumberFieldOptional({ int: true})
  applicant_id?: number;

}
export class UpdateJobOpeningFavoriteRequestDTO {
  @ObjectFieldOptional(UpdateJobOpeningFavoriteRequest)
  job_opening_favorites?: UpdateJobOpeningFavoriteRequest;

}
export class UpdateJobOpeningFavoriteResponse {
  id: number;
created_at: Date;
updated_at: Date;
job_opening_id: number;
applicant_id: number;

}
export class UpdateErrorObjectResponse {
  
}

export class UpdateJobOpeningFavoriteResponseDTO {
  
  job_opening_favorite: UpdateJobOpeningFavoriteResponse
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
