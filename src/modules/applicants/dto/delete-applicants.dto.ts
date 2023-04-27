
import { NumberField, StringField, ObjectField } from "src/decorators/field.decorator";

export class DeleteApplicantParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class DeleteApplicantRequest {
  @StringField({})
  email: string;

}
export class DeleteApplicantRequestDTO {
  @ObjectField(DeleteApplicantRequest)
  applicants: DeleteApplicantRequest;

}

export class DeleteApplicantResponseDTO {
  }
