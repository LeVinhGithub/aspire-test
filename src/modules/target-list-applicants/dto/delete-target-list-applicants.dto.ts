
import { NumberField } from "src/decorators/field.decorator";

export class DeleteTargetListApplicantParamsDTO {
  @NumberField({ int: true})
  id: number;

}

export class DeleteTargetListApplicantResponseDTO {
  }
