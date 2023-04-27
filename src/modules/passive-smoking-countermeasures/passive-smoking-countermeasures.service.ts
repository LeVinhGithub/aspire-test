
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterPassiveSmokingCountermeasureResponseDTO, FilterPassiveSmokingCountermeasureRequestDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryRelation, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { PassiveSmokingCountermeasure } from "entities/passive_smoking_countermeasures";
import { PassiveSmokingCountermeasureRepository } from "./passive-smoking-countermeasures.repository";

@Injectable()
export class PassiveSmokingCountermeasureService {
  constructor(
    @InjectRepository(PassiveSmokingCountermeasure)
    readonly repository: PassiveSmokingCountermeasureRepository,
    
  ) {}

  async filter(queries: FilterPassiveSmokingCountermeasureRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'name', value: queries?.passive_smoking_countermeasures?.name, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE },      
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
        
    const orders: QueryOrder[] = [{ orderBy: 'passive_smoking_countermeasures.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [passive_smoking_countermeasures, totalCount, totalPages] = await this.repository.findMany({ conditions, relations, pagination, orders })
    
    return new FilterPassiveSmokingCountermeasureResponseDTO(passive_smoking_countermeasures, totalCount, totalPages)
  }
}
