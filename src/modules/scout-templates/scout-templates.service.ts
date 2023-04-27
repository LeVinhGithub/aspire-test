
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterScoutTemplateResponseDTO, FilterScoutTemplateRequestDTO, ShowScoutTemplateResponseDTO, ShowScoutTemplateParamsDTO, CreateScoutTemplateResponseDTO, CreateScoutTemplateRequestDTO, UpdateScoutTemplateResponseDTO, UpdateScoutTemplateParamsDTO, UpdateScoutTemplateRequestDTO, DeleteScoutTemplateResponseDTO, DeleteScoutTemplateParamsDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { ScoutTemplate } from "entities/scout_templates";
import { ScoutTemplateRepository } from "./scout-templates.repository";

@Injectable()
export class ScoutTemplateService {
  constructor(
    @InjectRepository(ScoutTemplate)
    readonly repository: ScoutTemplateRepository,
    
  ) {}

  async filter(queries: FilterScoutTemplateRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'title', value: queries?.scout_templates?.title, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE },
            { column: 'template_text', value: queries?.scout_templates?.template_text, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'company_id', value: queries?.scout_templates?.company_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },      
    ]
            
    const pagination: QueryPagination = {
      page: queries?.pagination_page,
      limit: queries?.pagination_limit
    }
        
    const orders: QueryOrder[] = [{ orderBy: 'scout_templates.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [scout_templates, totalCount, totalPages] = await this.repository.findMany({ conditions, pagination, orders })
    
    return new FilterScoutTemplateResponseDTO(scout_templates, totalCount, totalPages)
  }
  async show(params: ShowScoutTemplateParamsDTO) {
        const conditions: QueryCondition[] = [
            { column: 'scout_templates.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
                    
        const show = await this.repository.getOne({ conditions })
        
    return new ShowScoutTemplateResponseDTO(show)
  }
  async create(request: CreateScoutTemplateRequestDTO) {
                    
    const data = {
            title: request?.scout_templates?.title,
            template_text: request?.scout_templates?.template_text,
            company_id: request?.scout_templates?.company_id,          }
    
        const create = await this.repository.createOne({ data })
        
    return new CreateScoutTemplateResponseDTO(create)
  }
  async update(params: UpdateScoutTemplateParamsDTO,request: UpdateScoutTemplateRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'scout_templates.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_AND },      
    ]
                    
    const data = {
            title: request?.scout_templates?.title,
            template_text: request?.scout_templates?.template_text,
            company_id: request?.scout_templates?.company_id,          }
    
        const update = await this.repository.updateOne({ conditions, data })
        
    return new UpdateScoutTemplateResponseDTO(update)
  }
  async delete(params: DeleteScoutTemplateParamsDTO) {
        const conditions: QueryCondition[] = [
            { column: 'scout_templates.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
                    
        await this.repository.removeOne({ conditions })
    
    return new DeleteScoutTemplateResponseDTO()
  }
}
