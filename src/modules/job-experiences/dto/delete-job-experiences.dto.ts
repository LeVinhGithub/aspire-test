
import { NumberField, StringField, ObjectField } from "src/decorators/field.decorator";

export class DeleteJobExperienceParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class DeleteJobExperienceRequest {
  @StringField({})
  company_name: string;

}
export class DeleteJobExperienceRequestDTO {
  @ObjectField(DeleteJobExperienceRequest)
  job_experiences: DeleteJobExperienceRequest;

}

export class DeleteJobExperienceResponseDTO {
  }
