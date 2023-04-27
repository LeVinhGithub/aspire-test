
import { NumberField } from "src/decorators/field.decorator";

export class DeleteApplicantIndustryParamsDTO {
  @NumberField({ int: true})
  id: number;

}

export class DeleteApplicantIndustryResponseDTO {
  }
