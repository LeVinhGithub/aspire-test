
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterRestrictionResponseDTO, FilterRestrictionRequestDTO, ShowRestrictionResponseDTO, ShowRestrictionParamsDTO, CreateRestrictionResponseDTO, CreateRestrictionRequestDTO, UpdateRestrictionResponseDTO, UpdateRestrictionParamsDTO, UpdateRestrictionRequestDTO, DeleteRestrictionResponseDTO, DeleteRestrictionParamsDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryRelation, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { Restriction } from "entities/restrictions";
import { RestrictionRepository } from "./restrictions.repository";

@Injectable()
export class RestrictionService {
  constructor(
    @InjectRepository(Restriction)
    readonly repository: RestrictionRepository,
    
  ) {}

  async filter(queries: FilterRestrictionRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'company_id', value: queries?.restrictions?.company_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },
            { column: 'applicant_id', value: queries?.restrictions?.applicant_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'reason', value: queries?.restrictions?.reason, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'company', alias: 'companies'},
        { column: 'companies.logo', alias: 'companies_logo'},
        { column: 'companies.representative_photo', alias: 'companies_representative_photo'},
        { column: 'companies.image', alias: 'companies_image'},
        { column: 'applicant', alias: 'applicants'},
        { column: 'applicants.resume_file', alias: 'applicants_resume_file'},
        { column: 'applicants.restrictions', alias: 'applicants_restrictions'},
        { column: 'applicants_restrictions.applicant', alias: 'applicants_restrictions_applicants'},
        { column: 'applicants_restrictions_applicants.resume_file', alias: 'applicants_restrictions_applicants_resume_file'},
        { column: 'applicants_restrictions_applicants.restrictions', alias: 'applicants_restrictions_applicants_restrictions'},    
    ]
        
    const pagination: QueryPagination = {
      page: queries?.pagination_page,
      limit: queries?.pagination_limit
    }
        
    const orders: QueryOrder[] = [{ orderBy: 'restrictions.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [restrictions, totalCount, totalPages] = await this.repository.findMany({ conditions, relations, pagination, orders })
    
    return new FilterRestrictionResponseDTO(restrictions, totalCount, totalPages)
  }
  async show(params: ShowRestrictionParamsDTO) {
        const conditions: QueryCondition[] = [
            { column: 'restrictions.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'company', alias: 'companies'},
        { column: 'companies.logo', alias: 'companies_logo'},
        { column: 'companies.representative_photo', alias: 'companies_representative_photo'},
        { column: 'companies.image', alias: 'companies_image'},
        { column: 'applicant', alias: 'applicants'},
        { column: 'applicants.resume_file', alias: 'applicants_resume_file'},
        { column: 'applicants.restrictions', alias: 'applicants_restrictions'},
        { column: 'applicants_restrictions.applicant', alias: 'applicants_restrictions_applicants'},
        { column: 'applicants_restrictions_applicants.resume_file', alias: 'applicants_restrictions_applicants_resume_file'},
        { column: 'applicants_restrictions_applicants.restrictions', alias: 'applicants_restrictions_applicants_restrictions'},    
    ]
                
        const entity = await this.repository.getOne({ conditions })
        const show = await this.repository.getRelations(entity, { relations })
        
    return new ShowRestrictionResponseDTO(show)
  }
  async create(request: CreateRestrictionRequestDTO) {
        
    const relations: QueryRelation[] = [
        { column: 'company', alias: 'companies'},
        { column: 'companies.logo', alias: 'companies_logo'},
        { column: 'companies.representative_photo', alias: 'companies_representative_photo'},
        { column: 'companies.image', alias: 'companies_image'},
        { column: 'applicant', alias: 'applicants'},
        { column: 'applicants.resume_file', alias: 'applicants_resume_file'},
        { column: 'applicants.restrictions', alias: 'applicants_restrictions'},
        { column: 'applicants_restrictions.applicant', alias: 'applicants_restrictions_applicants'},
        { column: 'applicants_restrictions_applicants.resume_file', alias: 'applicants_restrictions_applicants_resume_file'},
        { column: 'applicants_restrictions_applicants.restrictions', alias: 'applicants_restrictions_applicants_restrictions'},    
    ]
                
    const data = {
            company_id: request?.restrictions?.company_id,
            applicant_id: request?.restrictions?.applicant_id,
            reason: request?.restrictions?.reason,          }
    
        const entity = await this.repository.createOne({ data })
        const create = await this.repository.getRelations(entity, { relations })
        
    return new CreateRestrictionResponseDTO(create)
  }
  async update(params: UpdateRestrictionParamsDTO,request: UpdateRestrictionRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'restrictions.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_AND },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'company', alias: 'companies'},
        { column: 'companies.logo', alias: 'companies_logo'},
        { column: 'companies.representative_photo', alias: 'companies_representative_photo'},
        { column: 'companies.image', alias: 'companies_image'},
        { column: 'applicant', alias: 'applicants'},
        { column: 'applicants.resume_file', alias: 'applicants_resume_file'},
        { column: 'applicants.restrictions', alias: 'applicants_restrictions'},
        { column: 'applicants_restrictions.applicant', alias: 'applicants_restrictions_applicants'},
        { column: 'applicants_restrictions_applicants.resume_file', alias: 'applicants_restrictions_applicants_resume_file'},
        { column: 'applicants_restrictions_applicants.restrictions', alias: 'applicants_restrictions_applicants_restrictions'},    
    ]
                
    const data = {
            company_id: request?.restrictions?.company_id,
            applicant_id: request?.restrictions?.applicant_id,
            reason: request?.restrictions?.reason,          }
    
        const entity = await this.repository.updateOne({ conditions, data })
        const update = await this.repository.getRelations(entity, { relations })
        
    return new UpdateRestrictionResponseDTO(update)
  }
  async delete(params: DeleteRestrictionParamsDTO) {
        const conditions: QueryCondition[] = [
            { column: 'restrictions.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
                    
        await this.repository.removeOne({ conditions })
    
    return new DeleteRestrictionResponseDTO()
  }
}
