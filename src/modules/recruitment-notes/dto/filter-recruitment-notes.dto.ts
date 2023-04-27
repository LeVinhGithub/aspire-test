
import { RecruitmentNote } from "entities/recruitment_notes";
import { NumberFieldOptional, StringFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";

export class FilterRecruitmentNoteRequest {
  @NumberFieldOptional({ int: true})
  applicant_id?: number;
@NumberFieldOptional({ int: true})
  company_id?: number;
@StringFieldOptional({ maxLength: 250, minLength: 0})
  note?: string;

}
export class FilterRecruitmentNoteRequestDTO {
  @ObjectFieldOptional(FilterRecruitmentNoteRequest)
  recruitment_notes?: FilterRecruitmentNoteRequest;
@NumberFieldOptional({ int: true})
  pagination_page?: number;
@NumberFieldOptional({ int: true})
  pagination_limit?: number;

}
export class FilterRecruitmentNoteResponse {
  id: number;
created_at: Date;
updated_at: Date;
applicant_id: number;
company_id: number;
note: string;

}


export class FilterRecruitmentNoteResponseDTO {
  recruitment_notes: FilterRecruitmentNoteResponse[];
    total_pages?: number;
    total_count: number;
  
  constructor(
    recruitment_notes: (RecruitmentNote)[],
    total_count: number,
    total_pages?: number  ) {
    this.recruitment_notes = recruitment_notes.map((recruitment_note) => ({
          ...recruitment_note,
          id: recruitment_note?.id,
created_at: recruitment_note?.created_at,
updated_at: recruitment_note?.updated_at,
applicant_id: recruitment_note?.applicant_id,
company_id: recruitment_note?.company_id,
note: recruitment_note?.note
        }));
        this.total_pages = total_pages;
        this.total_count = total_count;
  }
}
