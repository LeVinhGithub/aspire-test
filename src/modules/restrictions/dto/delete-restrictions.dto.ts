
import { NumberField } from "src/decorators/field.decorator";

export class DeleteRestrictionParamsDTO {
  @NumberField({ int: true})
  id: number;

}

export class DeleteRestrictionResponseDTO {
  }
