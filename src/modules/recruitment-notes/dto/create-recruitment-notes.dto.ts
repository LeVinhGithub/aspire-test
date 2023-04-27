
import { RecruitmentNote } from "entities/recruitment_notes";
import { NumberField, StringFieldOptional, ObjectField } from "src/decorators/field.decorator";

export class CreateRecruitmentNoteRequest {
  @NumberField({ int: true})
  applicant_id: number;
@NumberField({ int: true})
  company_id: number;
@StringFieldOptional({ maxLength: 250, minLength: 0})
  note?: string;

}
export class CreateRecruitmentNoteRequestDTO {
  @ObjectField(CreateRecruitmentNoteRequest)
  recruitment_notes: CreateRecruitmentNoteRequest;

}
export class CreateRecruitmentNoteResponse {
  id: number;
created_at: Date;
updated_at: Date;
applicant_id: number;
company_id: number;
note: string;

}
export class CreateErrorObjectResponse {
  
}

export class CreateRecruitmentNoteResponseDTO {
  
  recruitment_note: CreateRecruitmentNoteResponse
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
