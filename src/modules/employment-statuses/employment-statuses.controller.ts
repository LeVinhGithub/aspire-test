
import { Controller, Query, Get as MethodGet } from "@nestjs/common";
import { EmploymentStatusService } from "./employment-statuses.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterEmploymentStatusResponseDTO, FilterEmploymentStatusRequestDTO, FilterEmploymentStatusRequest } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";

@Controller()
@ApiTags('EmploymentStatus')
export class EmploymentStatusController {
  constructor(private readonly employmentStatusService: EmploymentStatusService) {} 
  
  @MethodGet('/api/employment_statuses')
  @ApiNestedQuery('employment_statuses', FilterEmploymentStatusRequest)
  filter(@Query() queries: FilterEmploymentStatusRequestDTO): Promise<FilterEmploymentStatusResponseDTO> {
    return this.employmentStatusService.filter(queries);
  }   
}
