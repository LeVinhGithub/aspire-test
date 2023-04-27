
import { Controller, Query, Get as MethodGet } from "@nestjs/common";
import { ManagementExperienceService } from "./management-experiences.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterManagementExperienceResponseDTO, FilterManagementExperienceRequestDTO, FilterManagementExperienceRequest } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";

@Controller()
@ApiTags('ManagementExperience')
export class ManagementExperienceController {
  constructor(private readonly managementExperienceService: ManagementExperienceService) {} 
  
  @MethodGet('/api/management_experiences')
  @ApiNestedQuery('management_experiences', FilterManagementExperienceRequest)
  filter(@Query() queries: FilterManagementExperienceRequestDTO): Promise<FilterManagementExperienceResponseDTO> {
    return this.managementExperienceService.filter(queries);
  }   
}
