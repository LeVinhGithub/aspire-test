
import { Controller, Query, Get as MethodGet } from "@nestjs/common";
import { PassiveSmokingCountermeasureService } from "./passive-smoking-countermeasures.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterPassiveSmokingCountermeasureResponseDTO, FilterPassiveSmokingCountermeasureRequestDTO, FilterPassiveSmokingCountermeasureRequest } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";

@Controller()
@ApiTags('PassiveSmokingCountermeasure')
export class PassiveSmokingCountermeasureController {
  constructor(private readonly passiveSmokingCountermeasureService: PassiveSmokingCountermeasureService) {} 
  
  @MethodGet('/api/passive_smoking_countermeasures')
  @ApiNestedQuery('passive_smoking_countermeasures', FilterPassiveSmokingCountermeasureRequest)
  filter(@Query() queries: FilterPassiveSmokingCountermeasureRequestDTO): Promise<FilterPassiveSmokingCountermeasureResponseDTO> {
    return this.passiveSmokingCountermeasureService.filter(queries);
  }   
}
