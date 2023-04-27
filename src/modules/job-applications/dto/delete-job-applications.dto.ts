
import { NumberField } from "src/decorators/field.decorator";

export class DeleteJobApplicationParamsDTO {
  @NumberField({ int: true})
  id: number;

}

export class DeleteJobApplicationResponseDTO {
  }
