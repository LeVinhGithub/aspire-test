
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterIndustryGroupResponseDTO, FilterIndustryGroupRequestDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryRelation, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { IndustryGroup } from "entities/industry_groups";
import { IndustryGroupRepository } from "./industry-groups.repository";

@Injectable()
export class IndustryGroupService {
  constructor(
    @InjectRepository(IndustryGroup)
    readonly repository: IndustryGroupRepository,
    
  ) {}

  async filter(queries: FilterIndustryGroupRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'name', value: queries?.industry_groups?.name, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'industries', alias: 'industries'},    
    ]
        
    const pagination: QueryPagination = {
      page: queries?.pagination_page,
      limit: queries?.pagination_limit
    }
        
    const orders: QueryOrder[] = [{ orderBy: 'industry_groups.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [industry_groups, totalCount, totalPages] = await this.repository.findMany({ conditions, relations, pagination, orders })
    
    return new FilterIndustryGroupResponseDTO(industry_groups, totalCount, totalPages)
  }
}
