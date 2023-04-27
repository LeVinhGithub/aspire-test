
import { NumberField, StringField, ObjectField } from "src/decorators/field.decorator";

export class DeleteTargetListParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class DeleteTargetListRequest {
  @StringField({})
  title: string;

}
export class DeleteTargetListRequestDTO {
  @ObjectField(DeleteTargetListRequest)
  target_lists: DeleteTargetListRequest;

}

export class DeleteTargetListResponseDTO {
  }
