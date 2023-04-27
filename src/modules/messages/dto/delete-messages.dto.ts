
import { NumberField } from "src/decorators/field.decorator";

export class DeleteMessageParamsDTO {
  @NumberField({ int: true})
  id: number;

}

export class DeleteMessageResponseDTO {
  }
