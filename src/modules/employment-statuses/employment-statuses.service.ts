
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterEmploymentStatusResponseDTO, FilterEmploymentStatusRequestDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryRelation, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { EmploymentStatus } from "entities/employment_statuses";
import { EmploymentStatusRepository } from "./employment-statuses.repository";

@Injectable()
export class EmploymentStatusService {
  constructor(
    @InjectRepository(EmploymentStatus)
    readonly repository: EmploymentStatusRepository,
    
  ) {}

  async filter(queries: FilterEmploymentStatusRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'name', value: queries?.employment_statuses?.name, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE },      
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
        
    const orders: QueryOrder[] = [{ orderBy: 'employment_statuses.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [employment_statuses, totalCount, totalPages] = await this.repository.findMany({ conditions, relations, pagination, orders })
    
    return new FilterEmploymentStatusResponseDTO(employment_statuses, totalCount, totalPages)
  }
}
