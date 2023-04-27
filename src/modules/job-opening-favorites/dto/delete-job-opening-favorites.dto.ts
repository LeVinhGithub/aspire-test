
import { NumberField } from "src/decorators/field.decorator";

export class DeleteJobOpeningFavoriteParamsDTO {
  @NumberField({ int: true})
  id: number;

}

export class DeleteJobOpeningFavoriteResponseDTO {
  }
