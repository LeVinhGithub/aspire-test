
import { RecruitmentNote } from "entities/recruitment_notes";
import { NumberField, NumberFieldOptional, StringFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";

export class UpdateRecruitmentNoteParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class UpdateRecruitmentNoteRequest {
  @NumberFieldOptional({ int: true})
  applicant_id?: number;
@NumberFieldOptional({ int: true})
  company_id?: number;
@StringFieldOptional({ maxLength: 250, minLength: 0})
  note?: string;

}
export class UpdateRecruitmentNoteRequestDTO {
  @ObjectFieldOptional(UpdateRecruitmentNoteRequest)
  recruitment_notes?: UpdateRecruitmentNoteRequest;

}
export class UpdateRecruitmentNoteResponse {
  id: number;
created_at: Date;
updated_at: Date;
applicant_id: number;
company_id: number;
note: string;

}
export class UpdateErrorObjectResponse {
  
}

export class UpdateRecruitmentNoteResponseDTO {
  
  recruitment_note: UpdateRecruitmentNoteResponse
    error_object: Object;
  
  
  constructor(
    recruitment_note: RecruitmentNote,
    error_object?: Object  ) {
    this.recruitment_note = { ...recruitment_note, id: recruitment_note?.id,
created_at: recruitment_note?.created_at,
updated_at: recruitment_note?.updated_at,
applicant_id: recruitment_note?.applicant_id,
company_id: recruitment_note?.company_id,
note: recruitment_note?.note };
        this.error_object = error_object;
      }
  }
