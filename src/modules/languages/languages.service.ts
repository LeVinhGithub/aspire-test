
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterLanguageResponseDTO, FilterLanguageRequestDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryRelation, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { Language } from "entities/languages";
import { LanguageRepository } from "./languages.repository";

@Injectable()
export class LanguageService {
  constructor(
    @InjectRepository(Language)
    readonly repository: LanguageRepository,
    
  ) {}

  async filter(queries: FilterLanguageRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'name', value: queries?.languages?.name, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'applicant_languages', alias: 'applicant_languages'},    
    ]
        
    const pagination: QueryPagination = {
      page: queries?.pagination_page,
      limit: queries?.pagination_limit
    }
        
    const orders: QueryOrder[] = [{ orderBy: 'languages.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [languages, totalCount, totalPages] = await this.repository.findMany({ conditions, relations, pagination, orders })
    
    return new FilterLanguageResponseDTO(languages, totalCount, totalPages)
  }
}
