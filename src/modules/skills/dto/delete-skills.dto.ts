
import { NumberField, StringField, ObjectField } from "src/decorators/field.decorator";

export class DeleteSkillParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class DeleteSkillRequest {
  @StringField({})
  name: string;

}
export class DeleteSkillRequestDTO {
  @ObjectField(DeleteSkillRequest)
  skills: DeleteSkillRequest;

}

export class DeleteSkillResponseDTO {
  }
