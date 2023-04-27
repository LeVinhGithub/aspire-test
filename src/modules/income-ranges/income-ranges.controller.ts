
import { Controller, Query, Get as MethodGet } from "@nestjs/common";
import { IncomeRangeService } from "./income-ranges.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterIncomeRangeResponseDTO, FilterIncomeRangeRequestDTO, FilterIncomeRangeRequest } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";

@Controller()
@ApiTags('IncomeRange')
export class IncomeRangeController {
  constructor(private readonly incomeRangeService: IncomeRangeService) {} 
  
  @MethodGet('/api/income_ranges')
  @ApiNestedQuery('income_ranges', FilterIncomeRangeRequest)
  filter(@Query() queries: FilterIncomeRangeRequestDTO): Promise<FilterIncomeRangeResponseDTO> {
    return this.incomeRangeService.filter(queries);
  }   
}
