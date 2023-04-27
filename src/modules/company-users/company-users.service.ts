
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterCompanyUserResponseDTO, FilterCompanyUserRequestDTO, ShowCompanyUserResponseDTO, ShowCompanyUserParamsDTO, ShowCompanyUserRequestDTO, CreateCompanyUserResponseDTO, CreateCompanyUserRequestDTO, UpdateCompanyUserResponseDTO, UpdateCompanyUserParamsDTO, UpdateCompanyUserRequestDTO, DeleteCompanyUserResponseDTO, DeleteCompanyUserParamsDTO, DeleteCompanyUserRequestDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryRelation, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { UploadService } from "src/shared/storage/upload.service";
import { CompanyUser } from "entities/company_users";
import { CompanyUserRepository } from "./company-users.repository";

@Injectable()
export class CompanyUserService {
  constructor(
    @InjectRepository(CompanyUser)
    readonly repository: CompanyUserRepository,
    private readonly uploadService: UploadService,
  ) {}

  async filter(queries: FilterCompanyUserRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'company_id', value: queries?.company_users?.company_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },
            { column: 'full_name', value: queries?.company_users?.full_name, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'position', value: queries?.company_users?.position, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'email', value: queries?.company_users?.email, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'role', value: queries?.company_users?.role, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'phone_number', value: queries?.company_users?.phone_number, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'photo', alias: 'photo'},    
    ]
        
    const pagination: QueryPagination = {
      page: queries?.pagination_page,
      limit: queries?.pagination_limit
    }
        
    const orders: QueryOrder[] = [{ orderBy: 'company_users.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [company_users, totalCount, totalPages] = await this.repository.findMany({ conditions, relations, pagination, orders })
    
    return new FilterCompanyUserResponseDTO(company_users, totalCount, totalPages)
  }
  async show(params: ShowCompanyUserParamsDTO,queries: ShowCompanyUserRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'company_users.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'photo', alias: 'photo'},    
    ]
                
        const entity = await this.repository.getOne({ conditions })
        const show = await this.repository.getRelations(entity, { relations })
        
    return new ShowCompanyUserResponseDTO(show)
  }
  async create(request: CreateCompanyUserRequestDTO) {
        
    const relations: QueryRelation[] = [
        { column: 'photo', alias: 'photo'},    
    ]
                
    const data = {
            company_id: request?.company_users?.company_id,
            full_name: request?.company_users?.full_name,
            position: request?.company_users?.position,
            ...(
            request?.company_users?.photo
              ? { photo: await this.uploadService.uploadFile(request?.company_users?.photo) }
              : {}
          ),
            email: request?.company_users?.email,
            role: request?.company_users?.role,
            phone_number: request?.company_users?.phone_number,          }
    
        const entity = await this.repository.createOne({ data })
        const create = await this.repository.getRelations(entity, { relations })
        
    return new CreateCompanyUserResponseDTO(create)
  }
  async update(params: UpdateCompanyUserParamsDTO,request: UpdateCompanyUserRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'company_users.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_AND },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'photo', alias: 'photo'},    
    ]
                
    const data = {
            company_id: request?.company_users?.company_id,
            full_name: request?.company_users?.full_name,
            position: request?.company_users?.position,
            ...(
            request?.company_users?.photo
              ? { photo: await this.uploadService.uploadFile(request?.company_users?.photo) }
              : {}
          ),
            email: request?.company_users?.email,
            role: request?.company_users?.role,
            phone_number: request?.company_users?.phone_number,          }
    
        const entity = await this.repository.updateOne({ conditions, data })
        const update = await this.repository.getRelations(entity, { relations })
        
    return new UpdateCompanyUserResponseDTO(update)
  }
  async delete(params: DeleteCompanyUserParamsDTO,request: DeleteCompanyUserRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'company_users.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
                    
        await this.repository.removeOne({ conditions })
    
    return new DeleteCompanyUserResponseDTO()
  }
}
