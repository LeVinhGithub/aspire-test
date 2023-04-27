
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterJobGroupResponseDTO, FilterJobGroupRequestDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryRelation, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { JobGroup } from "entities/job_groups";
import { JobGroupRepository } from "./job-groups.repository";

@Injectable()
export class JobGroupService {
  constructor(
    @InjectRepository(JobGroup)
    readonly repository: JobGroupRepository,
    
  ) {}

  async filter(queries: FilterJobGroupRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'name', value: queries?.job_groups?.name, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'job_titles', alias: 'job_titles'},
        { column: 'job_titles.job_openings', alias: 'job_titles_job_openings'},
        { column: 'job_titles_job_openings.job_applications', alias: 'job_titles_job_openings_job_applications'},
        { column: 'job_titles_job_openings.job_opening_favorites', alias: 'job_titles_job_openings_job_opening_favorites'},
        { column: 'job_titles_job_openings.job_opening_valued_competencies', alias: 'job_titles_job_openings_job_opening_valued_competencies'},
        { column: 'job_titles_job_openings.image', alias: 'job_titles_job_openings_image'},
        { column: 'job_titles.job_experiences', alias: 'job_titles_job_experiences'},    
    ]
        
    const pagination: QueryPagination = {
      page: queries?.pagination_page,
      limit: queries?.pagination_limit
    }
        
    const orders: QueryOrder[] = [{ orderBy: 'job_groups.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [job_groups, totalCount, totalPages] = await this.repository.findMany({ conditions, relations, pagination, orders })
    
    return new FilterJobGroupResponseDTO(job_groups, totalCount, totalPages)
  }
}
