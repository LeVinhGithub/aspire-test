
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterIncomeRangeResponseDTO, FilterIncomeRangeRequestDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryRelation, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { IncomeRange } from "entities/income_ranges";
import { IncomeRangeRepository } from "./income-ranges.repository";

@Injectable()
export class IncomeRangeService {
  constructor(
    @InjectRepository(IncomeRange)
    readonly repository: IncomeRangeRepository,
    
  ) {}

  async filter(queries: FilterIncomeRangeRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'name', value: queries?.income_ranges?.name, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE },
            { column: 'name', value: queries?.income_ranges?.name, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'applicants', alias: 'applicants'},
        { column: 'applicants.applicant_languages', alias: 'applicants_applicant_languages'},
        { column: 'applicants.applicant_schools', alias: 'applicants_applicant_schools'},
        { column: 'applicants.resume_file', alias: 'applicants_resume_file'},
        { column: 'applicants.applicant_industries', alias: 'applicants_applicant_industries'},
        { column: 'applicants.messages', alias: 'applicants_messages'},
        { column: 'applicants_messages.attachment', alias: 'applicants_messages_attachment'},
        { column: 'applicants.job_applications', alias: 'applicants_job_applications'},
        { column: 'applicants.job_opening_favorites', alias: 'applicants_job_opening_favorites'},
        { column: 'applicants.job_experiences', alias: 'applicants_job_experiences'},
        { column: 'applicants.skills', alias: 'applicants_skills'},
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
        
    const orders: QueryOrder[] = [{ orderBy: 'income_ranges.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [income_ranges, totalCount, totalPages] = await this.repository.findMany({ conditions, relations, pagination, orders })
    
    return new FilterIncomeRangeResponseDTO(income_ranges, totalCount, totalPages)
  }
}
