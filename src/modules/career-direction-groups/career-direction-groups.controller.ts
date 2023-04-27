
import { Controller, Query, Get as MethodGet } from "@nestjs/common";
import { CareerDirectionGroupService } from "./career-direction-groups.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterCareerDirectionGroupResponseDTO, FilterCareerDirectionGroupRequestDTO, FilterCareerDirectionGroupRequest, FilterCareerDirectionRequest } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";

@Controller()
@ApiTags('CareerDirectionGroup')
export class CareerDirectionGroupController {
  constructor(private readonly careerDirectionGroupService: CareerDirectionGroupService) {} 
  
  @MethodGet('/api/career_direction_groups')
  @ApiNestedQuery('career_direction_groups', FilterCareerDirectionGroupRequest)
  @ApiNestedQuery('career_directions', FilterCareerDirectionRequest)
  filter(@Query() queries: FilterCareerDirectionGroupRequestDTO): Promise<FilterCareerDirectionGroupResponseDTO> {
    return this.careerDirectionGroupService.filter(queries);
  }   
}
