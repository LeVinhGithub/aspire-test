
import { Controller, Query, Get as MethodGet } from "@nestjs/common";
import { JobGroupService } from "./job-groups.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterJobGroupResponseDTO, FilterJobGroupRequestDTO, FilterJobGroupRequest } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";

@Controller()
@ApiTags('JobGroup')
export class JobGroupController {
  constructor(private readonly jobGroupService: JobGroupService) {} 
  
  @MethodGet('/api/job_groups')
  @ApiNestedQuery('job_groups', FilterJobGroupRequest)
  filter(@Query() queries: FilterJobGroupRequestDTO): Promise<FilterJobGroupResponseDTO> {
    return this.jobGroupService.filter(queries);
  }   
}
