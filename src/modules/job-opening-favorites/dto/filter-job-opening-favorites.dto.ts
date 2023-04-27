
import { JobOpeningFavorite } from "entities/job_opening_favorites";
import { NumberFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";

export class FilterJobOpeningFavoriteRequest {
  @NumberFieldOptional({ int: true})
  job_opening_id?: number;
@NumberFieldOptional({ int: true})
  applicant_id?: number;

}
export class FilterJobOpeningFavoriteRequestDTO {
  @ObjectFieldOptional(FilterJobOpeningFavoriteRequest)
  job_opening_favorites?: FilterJobOpeningFavoriteRequest;
@NumberFieldOptional({ int: true})
  pagination_page?: number;
@NumberFieldOptional({ int: true})
  pagination_limit?: number;

}
export class FilterJobOpeningFavoriteResponse {
  id: number;
created_at: Date;
updated_at: Date;
job_opening_id: number;
applicant_id: number;

}


export class FilterJobOpeningFavoriteResponseDTO {
  job_opening_favorites: FilterJobOpeningFavoriteResponse[];
    total_pages?: number;
    total_count: number;
  
  constructor(
    job_opening_favorites: (JobOpeningFavorite)[],
    total_count: number,
    total_pages?: number  ) {
    this.job_opening_favorites = job_opening_favorites.map((job_opening_favorite) => ({
          ...job_opening_favorite,
          id: job_opening_favorite?.id,
created_at: job_opening_favorite?.created_at,
updated_at: job_opening_favorite?.updated_at,
job_opening_id: job_opening_favorite?.job_opening_id,
applicant_id: job_opening_favorite?.applicant_id
        }));
        this.total_pages = total_pages;
        this.total_count = total_count;
  }
}
