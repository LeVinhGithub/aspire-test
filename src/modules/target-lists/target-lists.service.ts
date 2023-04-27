
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterTargetListResponseDTO, FilterTargetListRequestDTO, ShowTargetListResponseDTO, ShowTargetListParamsDTO, ShowTargetListRequestDTO, CreateTargetListResponseDTO, CreateTargetListRequestDTO, UpdateTargetListResponseDTO, UpdateTargetListParamsDTO, UpdateTargetListRequestDTO, DeleteTargetListResponseDTO, DeleteTargetListParamsDTO, DeleteTargetListRequestDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryRelation, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { TargetList } from "entities/target_lists";
import { TargetListRepository } from "./target-lists.repository";

@Injectable()
export class TargetListService {
  constructor(
    @InjectRepository(TargetList)
    readonly repository: TargetListRepository,
    
  ) {}

  async filter(queries: FilterTargetListRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'title', value: queries?.target_lists?.title, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE },
            { column: 'company_id', value: queries?.target_lists?.company_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'company', alias: 'companies'},
        { column: 'companies.logo', alias: 'companies_logo'},
        { column: 'companies.representative_photo', alias: 'companies_representative_photo'},
        { column: 'companies.image', alias: 'companies_image'},    
    ]
        
    const pagination: QueryPagination = {
      page: queries?.pagination_page,
      limit: queries?.pagination_limit
    }
        
    const orders: QueryOrder[] = [{ orderBy: 'target_lists.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [target_lists, totalCount, totalPages] = await this.repository.findMany({ conditions, relations, pagination, orders })
    
    return new FilterTargetListResponseDTO(target_lists, totalCount, totalPages)
  }
  async show(params: ShowTargetListParamsDTO,queries: ShowTargetListRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'target_lists.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'company', alias: 'companies'},
        { column: 'companies.logo', alias: 'companies_logo'},
        { column: 'companies.representative_photo', alias: 'companies_representative_photo'},
        { column: 'companies.image', alias: 'companies_image'},
        { column: 'target_list_applicants', alias: 'target_list_applicants'},
        { column: 'target_list_applicants.applicant', alias: 'target_list_applicants_applicants'},
        { column: 'target_list_applicants_applicants.resume_file', alias: 'target_list_applicants_applicants_resume_file'},
        { column: 'target_list_applicants_applicants.applicant_industries', alias: 'target_list_applicants_applicants_applicant_industries'},
        { column: 'target_list_applicants_applicants_applicant_industries.industry', alias: 'target_list_applicants_applicants_applicant_industries_industries'},
        { column: 'target_list_applicants_applicants.applicant_schools', alias: 'target_list_applicants_applicants_applicant_schools'},
        { column: 'target_list_applicants_applicants_applicant_schools.school_type', alias: 'target_list_applicants_applicants_applicant_schools_school_types'},
        { column: 'target_list_applicants_applicants.income_range', alias: 'target_list_applicants_applicants_income_ranges'},    
    ]
                
        const entity = await this.repository.getOne({ conditions })
        const show = await this.repository.getRelations(entity, { relations })
        
    return new ShowTargetListResponseDTO(show)
  }
  async create(request: CreateTargetListRequestDTO) {
        
    const relations: QueryRelation[] = [
        { column: 'company', alias: 'companies'},
        { column: 'companies.logo', alias: 'companies_logo'},
        { column: 'companies.representative_photo', alias: 'companies_representative_photo'},
        { column: 'companies.image', alias: 'companies_image'},    
    ]
                
    const data = {
            title: request?.target_lists?.title,
            company_id: request?.target_lists?.company_id,          }
    
        const entity = await this.repository.createOne({ data })
        const create = await this.repository.getRelations(entity, { relations })
        
    return new CreateTargetListResponseDTO(create)
  }
  async update(params: UpdateTargetListParamsDTO,request: UpdateTargetListRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'target_lists.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_AND },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'company', alias: 'companies'},
        { column: 'companies.logo', alias: 'companies_logo'},
        { column: 'companies.representative_photo', alias: 'companies_representative_photo'},
        { column: 'companies.image', alias: 'companies_image'},    
    ]
                
    const data = {
            title: request?.target_lists?.title,
            company_id: request?.target_lists?.company_id,          }
    
        const entity = await this.repository.updateOne({ conditions, data })
        const update = await this.repository.getRelations(entity, { relations })
        
    return new UpdateTargetListResponseDTO(update)
  }
  async delete(params: DeleteTargetListParamsDTO,request: DeleteTargetListRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'target_lists.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
                    
        await this.repository.removeOne({ conditions })
    
    return new DeleteTargetListResponseDTO()
  }
}
