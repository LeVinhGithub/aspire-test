
import { Controller, Query, Get as MethodGet } from "@nestjs/common";
import { SchoolTypeService } from "./school-types.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterSchoolTypeResponseDTO, FilterSchoolTypeRequestDTO, FilterSchoolTypeRequest } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";

@Controller()
@ApiTags('SchoolType')
export class SchoolTypeController {
  constructor(private readonly schoolTypeService: SchoolTypeService) {} 
  
  @MethodGet('/api/school_types')
  @ApiNestedQuery('school_types', FilterSchoolTypeRequest)
  filter(@Query() queries: FilterSchoolTypeRequestDTO): Promise<FilterSchoolTypeResponseDTO> {
    return this.schoolTypeService.filter(queries);
  }   
}
