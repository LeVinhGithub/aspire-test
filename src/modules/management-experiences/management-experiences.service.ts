
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterManagementExperienceResponseDTO, FilterManagementExperienceRequestDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryRelation, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { ManagementExperience } from "entities/management_experiences";
import { ManagementExperienceRepository } from "./management-experiences.repository";

@Injectable()
export class ManagementExperienceService {
  constructor(
    @InjectRepository(ManagementExperience)
    readonly repository: ManagementExperienceRepository,
    
  ) {}

  async filter(queries: FilterManagementExperienceRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'name', value: queries?.management_experiences?.name, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'applicants', alias: 'applicants'},
        { column: 'applicants.resume_file', alias: 'applicants_resume_file'},
        { column: 'applicants.applicant_languages', alias: 'applicants_applicant_languages'},
        { column: 'applicants.applicant_schools', alias: 'applicants_applicant_schools'},    
    ]
        
    const pagination: QueryPagination = {
      page: queries?.pagination_page,
      limit: queries?.pagination_limit
    }
        
    const orders: QueryOrder[] = [{ orderBy: 'management_experiences.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [management_experiences, totalCount, totalPages] = await this.repository.findMany({ conditions, relations, pagination, orders })
    
    return new FilterManagementExperienceResponseDTO(management_experiences, totalCount, totalPages)
  }
}
