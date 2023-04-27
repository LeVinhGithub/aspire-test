
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterLocationResponseDTO, FilterLocationRequestDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryRelation, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { Location } from "entities/locations";
import { LocationRepository } from "./locations.repository";

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    readonly repository: LocationRepository,
    
  ) {}

  async filter(queries: FilterLocationRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'name', value: queries?.locations?.name, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE },
            { column: 'is_prefecture', value: queries?.locations?.is_prefecture, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'job_openings', alias: 'job_openings'},
        { column: 'job_openings.job_applications', alias: 'job_openings_job_applications'},
        { column: 'job_openings.job_opening_favorites', alias: 'job_openings_job_opening_favorites'},
        { column: 'job_openings.job_opening_valued_competencies', alias: 'job_openings_job_opening_valued_competencies'},
        { column: 'job_openings.image', alias: 'job_openings_image'},    
    ]
        
    const pagination: QueryPagination = {
      page: queries?.pagination_page,
      limit: queries?.pagination_limit
    }
        
    const orders: QueryOrder[] = [{ orderBy: 'locations.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [locations, totalCount, totalPages] = await this.repository.findMany({ conditions, relations, pagination, orders })
    
    return new FilterLocationResponseDTO(locations, totalCount, totalPages)
  }
}
