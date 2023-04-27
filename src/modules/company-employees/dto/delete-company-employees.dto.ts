
import { NumberField, StringField, ObjectField } from "src/decorators/field.decorator";

export class DeleteCompanyEmployeeParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class DeleteCompanyEmployeeRequest {
  @StringField({})
  full_name: string;

}
export class DeleteCompanyEmployeeRequestDTO {
  @ObjectField(DeleteCompanyEmployeeRequest)
  company_employees: DeleteCompanyEmployeeRequest;

}

export class DeleteCompanyEmployeeResponseDTO {
  }
