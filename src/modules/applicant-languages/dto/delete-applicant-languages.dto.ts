
import { NumberField } from "src/decorators/field.decorator";

export class DeleteApplicantLanguageParamsDTO {
  @NumberField({ int: true})
  id: number;

}

export class DeleteApplicantLanguageResponseDTO {
  }
