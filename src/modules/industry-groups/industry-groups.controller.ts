
import { Controller, Query, Get as MethodGet } from "@nestjs/common";
import { IndustryGroupService } from "./industry-groups.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterIndustryGroupResponseDTO, FilterIndustryGroupRequestDTO, FilterIndustryGroupRequest } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";

@Controller()
@ApiTags('IndustryGroup')
export class IndustryGroupController {
  constructor(private readonly industryGroupService: IndustryGroupService) {} 
  
  @MethodGet('/api/industry_groups')
  @ApiNestedQuery('industry_groups', FilterIndustryGroupRequest)
  filter(@Query() queries: FilterIndustryGroupRequestDTO): Promise<FilterIndustryGroupResponseDTO> {
    return this.industryGroupService.filter(queries);
  }   
}
