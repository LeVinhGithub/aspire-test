
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterSkillResponseDTO, FilterSkillRequestDTO, CreateSkillResponseDTO, CreateSkillRequestDTO, UpdateSkillResponseDTO, UpdateSkillParamsDTO, UpdateSkillRequestDTO, DeleteSkillResponseDTO, DeleteSkillParamsDTO, DeleteSkillRequestDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { Skill } from "entities/skills";
import { SkillRepository } from "./skills.repository";

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(Skill)
    readonly repository: SkillRepository,
    
  ) {}

  async filter(queries: FilterSkillRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'name', value: queries?.skills?.name, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE },
            { column: 'applicant_id', value: queries?.skills?.applicant_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'skill_type', value: queries?.skills?.skill_type, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },      
    ]
            
    const pagination: QueryPagination = {
      page: queries?.pagination_page,
      limit: queries?.pagination_limit
    }
        
    const orders: QueryOrder[] = [{ orderBy: 'skills.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [skills, totalCount, totalPages] = await this.repository.findMany({ conditions, pagination, orders })
    
    return new FilterSkillResponseDTO(skills, totalCount, totalPages)
  }
  async create(request: CreateSkillRequestDTO) {
                    
    const data = {
            name: request?.skills?.name,
            applicant_id: request?.skills?.applicant_id,
            skill_type: request?.skills?.skill_type,          }
    
        const create = await this.repository.createOne({ data })
        
    return new CreateSkillResponseDTO(create)
  }
  async update(params: UpdateSkillParamsDTO,request: UpdateSkillRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'skills.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_AND },      
    ]
                    
    const data = {
            name: request?.skills?.name,
            applicant_id: request?.skills?.applicant_id,
            skill_type: request?.skills?.skill_type,          }
    
        const update = await this.repository.updateOne({ conditions, data })
        
    return new UpdateSkillResponseDTO(update)
  }
  async delete(params: DeleteSkillParamsDTO,request: DeleteSkillRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'skills.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
                    
        await this.repository.removeOne({ conditions })
    
    return new DeleteSkillResponseDTO()
  }
}
