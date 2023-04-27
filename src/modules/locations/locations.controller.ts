
import { Controller, Query, Get as MethodGet } from "@nestjs/common";
import { LocationService } from "./locations.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterLocationResponseDTO, FilterLocationRequestDTO, FilterLocationRequest } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";

@Controller()
@ApiTags('Location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {} 
  
  @MethodGet('/api/locations')
  @ApiNestedQuery('locations', FilterLocationRequest)
  filter(@Query() queries: FilterLocationRequestDTO): Promise<FilterLocationResponseDTO> {
    return this.locationService.filter(queries);
  }   
}
