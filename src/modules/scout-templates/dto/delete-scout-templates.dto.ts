
import { NumberField } from "src/decorators/field.decorator";

export class DeleteScoutTemplateParamsDTO {
  @NumberField({ int: true})
  id: number;

}

export class DeleteScoutTemplateResponseDTO {
  }
