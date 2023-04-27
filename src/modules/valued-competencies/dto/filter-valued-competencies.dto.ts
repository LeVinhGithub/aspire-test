
import { ValuedCompetency } from "entities/valued_competencies";
import { StringFieldOptional, ObjectFieldOptional, NumberFieldOptional } from "src/decorators/field.decorator";

export class FilterValuedCompetencyRequest {
  @StringFieldOptional({ maxLength: 255, minLength: 0})
  name?: string;

}
export class FilterValuedCompetencyRequestDTO {
  @ObjectFieldOptional(FilterValuedCompetencyRequest)
  valued_competencies?: FilterValuedCompetencyRequest;
@NumberFieldOptional({ int: true})
  pagination_page?: number;
@NumberFieldOptional({ int: true})
  pagination_limit?: number;

}
export class JobOpeningValuedCompetencyFilterValuedCompetencyResponse {
  id: number;
created_at: Date;
updated_at: Date;
job_opening_id: number;
valued_competency_id: number;

}
export class FilterValuedCompetencyResponse {
  id: number;
created_at: Date;
updated_at: Date;
name: string;
job_opening_valued_competencies: JobOpeningValuedCompetencyFilterValuedCompetencyResponse[];
valued_competency_id: number;

}


export class FilterValuedCompetencyResponseDTO {
  valued_competencies: FilterValuedCompetencyResponse[];
    total_pages?: number;
    total_count: number;
  
  constructor(
    valued_competencies: (ValuedCompetency & { valued_competency_id?: number })[],
    total_count: number,
    total_pages?: number  ) {
    this.valued_competencies = valued_competencies.map((valued_competency) => ({
          ...valued_competency,
          id: valued_competency?.id,
created_at: valued_competency?.created_at,
updated_at: valued_competency?.updated_at,
name: valued_competency?.name,
job_opening_valued_competencies: valued_competency?.job_opening_valued_competencies?.map((job_opening_valued_competency) => ({
            ...job_opening_valued_competency,
            id: job_opening_valued_competency?.id,
created_at: job_opening_valued_competency?.created_at,
updated_at: job_opening_valued_competency?.updated_at,
job_opening_id: job_opening_valued_competency?.job_opening_id,
valued_competency_id: job_opening_valued_competency?.valued_competency_id
          })),
valued_competency_id: valued_competency?.valued_competency_id
        }));
        this.total_pages = total_pages;
        this.total_count = total_count;
  }
}
