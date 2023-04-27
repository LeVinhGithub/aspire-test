
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterOccupationTypeResponseDTO, FilterOccupationTypeRequestDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryRelation, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { OccupationType } from "entities/occupation_types";
import { OccupationTypeRepository } from "./occupation-types.repository";

@Injectable()
export class OccupationTypeService {
  constructor(
    @InjectRepository(OccupationType)
    readonly repository: OccupationTypeRepository,
    
  ) {}

  async filter(queries: FilterOccupationTypeRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'name', value: queries?.occupation_types?.name, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE },      
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
        
    const orders: QueryOrder[] = [{ orderBy: 'occupation_types.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [occupation_types, totalCount, totalPages] = await this.repository.findMany({ conditions, relations, pagination, orders })
    
    return new FilterOccupationTypeResponseDTO(occupation_types, totalCount, totalPages)
  }
}
