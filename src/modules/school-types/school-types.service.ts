
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterSchoolTypeResponseDTO, FilterSchoolTypeRequestDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryRelation, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { SchoolType } from "entities/school_types";
import { SchoolTypeRepository } from "./school-types.repository";

@Injectable()
export class SchoolTypeService {
  constructor(
    @InjectRepository(SchoolType)
    readonly repository: SchoolTypeRepository,
    
  ) {}

  async filter(queries: FilterSchoolTypeRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'name', value: queries?.school_types?.name, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'applicant_schools', alias: 'applicant_schools'},    
    ]
        
    const pagination: QueryPagination = {
      page: queries?.pagination_page,
      limit: queries?.pagination_limit
    }
        
    const orders: QueryOrder[] = [{ orderBy: 'school_types.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [school_types, totalCount, totalPages] = await this.repository.findMany({ conditions, relations, pagination, orders })
    
    return new FilterSchoolTypeResponseDTO(school_types, totalCount, totalPages)
  }
}
