
import { NumberField, StringField, ObjectField } from "src/decorators/field.decorator";

export class DeleteCompanyParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class DeleteCompanyRequest {
  @StringField({})
  name: string;
@StringField({})
  slug: string;

}
export class DeleteCompanyRequestDTO {
  @ObjectField(DeleteCompanyRequest)
  companies: DeleteCompanyRequest;

}

export class DeleteCompanyResponseDTO {
  }
