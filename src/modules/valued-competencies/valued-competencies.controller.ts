
import { Controller, Query, Get as MethodGet } from "@nestjs/common";
import { ValuedCompetencyService } from "./valued-competencies.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterValuedCompetencyResponseDTO, FilterValuedCompetencyRequestDTO, FilterValuedCompetencyRequest } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";

@Controller()
@ApiTags('ValuedCompetency')
export class ValuedCompetencyController {
  constructor(private readonly valuedCompetencyService: ValuedCompetencyService) {} 
  
  @MethodGet('/api/valued_competencies')
  @ApiNestedQuery('valued_competencies', FilterValuedCompetencyRequest)
  filter(@Query() queries: FilterValuedCompetencyRequestDTO): Promise<FilterValuedCompetencyResponseDTO> {
    return this.valuedCompetencyService.filter(queries);
  }   
}
