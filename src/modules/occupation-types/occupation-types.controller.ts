
import { Controller, Query, Get as MethodGet } from "@nestjs/common";
import { OccupationTypeService } from "./occupation-types.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterOccupationTypeResponseDTO, FilterOccupationTypeRequestDTO, FilterOccupationTypeRequest } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";

@Controller()
@ApiTags('OccupationType')
export class OccupationTypeController {
  constructor(private readonly occupationTypeService: OccupationTypeService) {} 
  
  @MethodGet('/api/occupation_types')
  @ApiNestedQuery('occupation_types', FilterOccupationTypeRequest)
  filter(@Query() queries: FilterOccupationTypeRequestDTO): Promise<FilterOccupationTypeResponseDTO> {
    return this.occupationTypeService.filter(queries);
  }   
}
