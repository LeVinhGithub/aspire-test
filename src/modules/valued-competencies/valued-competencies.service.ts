
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterValuedCompetencyResponseDTO, FilterValuedCompetencyRequestDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryRelation, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { ValuedCompetency } from "entities/valued_competencies";
import { ValuedCompetencyRepository } from "./valued-competencies.repository";

@Injectable()
export class ValuedCompetencyService {
  constructor(
    @InjectRepository(ValuedCompetency)
    readonly repository: ValuedCompetencyRepository,
    
  ) {}

  async filter(queries: FilterValuedCompetencyRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'name', value: queries?.valued_competencies?.name, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'job_opening_valued_competencies', alias: 'job_opening_valued_competencies'},    
    ]
        
    const pagination: QueryPagination = {
      page: queries?.pagination_page,
      limit: queries?.pagination_limit
    }
        
    const orders: QueryOrder[] = [{ orderBy: 'valued_competencies.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [valued_competencies, totalCount, totalPages] = await this.repository.findMany({ conditions, relations, pagination, orders })
    
    return new FilterValuedCompetencyResponseDTO(valued_competencies, totalCount, totalPages)
  }
}
