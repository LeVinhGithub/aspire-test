
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterCareerDirectionGroupResponseDTO, FilterCareerDirectionGroupRequestDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryRelation, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { CareerDirectionGroup } from "entities/career_direction_groups";
import { CareerDirectionGroupRepository } from "./career-direction-groups.repository";

@Injectable()
export class CareerDirectionGroupService {
  constructor(
    @InjectRepository(CareerDirectionGroup)
    readonly repository: CareerDirectionGroupRepository,
    
  ) {}

  async filter(queries: FilterCareerDirectionGroupRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'name', value: queries?.career_direction_groups?.name, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE },
            { column: 'career_directions.career_direction_group_id', value: queries?.career_directions?.career_direction_group_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'career_direction_groups.career_directions', alias: 'career_directions'},
        { column: 'career_directions.job_openings', alias: 'career_directions_job_openings'},
        { column: 'career_directions_job_openings.job_applications', alias: 'career_directions_job_openings_job_applications'},
        { column: 'career_directions_job_openings.job_opening_favorites', alias: 'career_directions_job_openings_job_opening_favorites'},
        { column: 'career_directions_job_openings.job_opening_valued_competencies', alias: 'career_directions_job_openings_job_opening_valued_competencies'},
        { column: 'career_directions_job_openings.image', alias: 'career_directions_job_openings_image'},
        { column: 'career_directions.career_direction_group', alias: 'career_directions_career_direction_groups'},    
    ]
        
    const pagination: QueryPagination = {
      page: queries?.pagination_page,
      limit: queries?.pagination_limit
    }
        
    const orders: QueryOrder[] = [{ orderBy: 'career_direction_groups.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [career_direction_groups, totalCount, totalPages] = await this.repository.findMany({ conditions, relations, pagination, orders })
    
    return new FilterCareerDirectionGroupResponseDTO(career_direction_groups, totalCount, totalPages)
  }
}
