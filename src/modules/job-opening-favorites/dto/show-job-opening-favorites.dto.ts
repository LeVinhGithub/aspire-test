
import { JobOpeningFavorite } from "entities/job_opening_favorites";
import { NumberField } from "src/decorators/field.decorator";

export class ShowJobOpeningFavoriteParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class ShowJobOpeningFavoriteResponse {
  id: number;
created_at: Date;
updated_at: Date;
job_opening_id: number;
applicant_id: number;

}

export class ShowJobOpeningFavoriteResponseDTO {
  
  job_opening_favorite: ShowJobOpeningFavoriteResponse
  
  
  constructor(
    job_opening_favorite: JobOpeningFavorite,
      ) {
    this.job_opening_favorite = { ...job_opening_favorite, id: job_opening_favorite?.id,
created_at: job_opening_favorite?.created_at,
updated_at: job_opening_favorite?.updated_at,
job_opening_id: job_opening_favorite?.job_opening_id,
applicant_id: job_opening_favorite?.applicant_id };
      }
  }
