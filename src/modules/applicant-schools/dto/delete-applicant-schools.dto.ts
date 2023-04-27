
import { NumberField, DateField, StringField, ObjectField } from "src/decorators/field.decorator";

export class DeleteApplicantSchoolParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class DeleteApplicantSchoolRequest {
  @DateField({})
  graduation_date: Date;
@StringField({})
  name: string;
@NumberField({})
  applicant_id: number;
@NumberField({})
  school_type_id: number;

}
export class DeleteApplicantSchoolRequestDTO {
  @ObjectField(DeleteApplicantSchoolRequest)
  applicant_schools: DeleteApplicantSchoolRequest;

}

export class DeleteApplicantSchoolResponseDTO {
  }
