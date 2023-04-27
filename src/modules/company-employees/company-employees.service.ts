
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterCompanyEmployeeResponseDTO, FilterCompanyEmployeeRequestDTO, ShowCompanyEmployeeResponseDTO, ShowCompanyEmployeeParamsDTO, ShowCompanyEmployeeRequestDTO, CreateCompanyEmployeeResponseDTO, CreateCompanyEmployeeRequestDTO, UpdateCompanyEmployeeResponseDTO, UpdateCompanyEmployeeParamsDTO, UpdateCompanyEmployeeRequestDTO, DeleteCompanyEmployeeResponseDTO, DeleteCompanyEmployeeParamsDTO, DeleteCompanyEmployeeRequestDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryRelation, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { UploadService } from "src/shared/storage/upload.service";
import { CompanyEmployee } from "entities/company_employees";
import { CompanyEmployeeRepository } from "./company-employees.repository";

@Injectable()
export class CompanyEmployeeService {
  constructor(
    @InjectRepository(CompanyEmployee)
    readonly repository: CompanyEmployeeRepository,
    private readonly uploadService: UploadService,
  ) {}

  async filter(queries: FilterCompanyEmployeeRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'name', value: queries?.companies?.name, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE },
            { column: 'location', value: queries?.companies?.location, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'launched_year', value: queries?.companies?.launched_year, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'business_details', value: queries?.companies?.business_details, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'number_of_employees', value: queries?.companies?.number_of_employees, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'industry_id', value: queries?.companies?.industry_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'mission', value: queries?.companies?.mission, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'vision', value: queries?.companies?.vision, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'value', value: queries?.companies?.value, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'representative_profile', value: queries?.companies?.representative_profile, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'listing_classification', value: queries?.companies?.ipo, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'representative_name', value: queries?.companies?.representative_name, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'slug', value: queries?.companies?.slug, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'capital', value: queries?.companies?.capital, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'company_id', value: queries?.company_employees?.company_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'full_name', value: queries?.company_employees?.full_name, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'profile', value: queries?.company_employees?.profile, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'is_high_rank_employee', value: queries?.company_employees?.is_high_rank_employee, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'company', alias: 'companies'},
        { column: 'companies.logo', alias: 'companies_logo'},
        { column: 'companies.representative_photo', alias: 'companies_representative_photo'},
        { column: 'companies.image', alias: 'companies_image'},
        { column: 'photo', alias: 'photo'},    
    ]
        
    const pagination: QueryPagination = {
      page: queries?.pagination_page,
      limit: queries?.pagination_limit
    }
        
    const orders: QueryOrder[] = [{ orderBy: 'company_employees.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [company_employees, totalCount, totalPages] = await this.repository.findMany({ conditions, relations, pagination, orders })
    
    return new FilterCompanyEmployeeResponseDTO(company_employees, totalCount, totalPages)
  }
  async show(params: ShowCompanyEmployeeParamsDTO,queries: ShowCompanyEmployeeRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'company_employees.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'company', alias: 'companies'},
        { column: 'companies.logo', alias: 'companies_logo'},
        { column: 'companies.representative_photo', alias: 'companies_representative_photo'},
        { column: 'companies.image', alias: 'companies_image'},
        { column: 'photo', alias: 'photo'},    
    ]
                
        const entity = await this.repository.getOne({ conditions })
        const show = await this.repository.getRelations(entity, { relations })
        
    return new ShowCompanyEmployeeResponseDTO(show)
  }
  async create(request: CreateCompanyEmployeeRequestDTO) {
        
    const relations: QueryRelation[] = [
        { column: 'company', alias: 'companies'},
        { column: 'companies.logo', alias: 'companies_logo'},
        { column: 'companies.representative_photo', alias: 'companies_representative_photo'},
        { column: 'companies.image', alias: 'companies_image'},
        { column: 'photo', alias: 'photo'},    
    ]
                
    const data = {
            name: request?.companies?.name,
            ...(
            request?.companies?.logo
              ? { logo: await this.uploadService.uploadFile(request?.companies?.logo) }
              : {}
          ),
            location: request?.companies?.location,
            launched_year: request?.companies?.launched_year,
            business_details: request?.companies?.business_details,
            number_of_employees: request?.companies?.number_of_employees,
            industry_id: request?.companies?.industry_id,
            mission: request?.companies?.mission,
            vision: request?.companies?.vision,
            value: request?.companies?.value,
            ...(
            request?.companies?.representative_photo
              ? { representative_photo: await this.uploadService.uploadFile(request?.companies?.representative_photo) }
              : {}
          ),
            representative_profile: request?.companies?.representative_profile,
            listing_classification: request?.companies?.ipo,
            representative_name: request?.companies?.representative_name,
            slug: request?.companies?.slug,
            ...(
            request?.companies?.image
              ? { image: await this.uploadService.uploadFile(request?.companies?.image) }
              : {}
          ),
            capital: request?.companies?.capital,
            company_id: request?.company_employees?.company_id,
            full_name: request?.company_employees?.full_name,
            profile: request?.company_employees?.profile,
            ...(
            request?.company_employees?.photo
              ? { photo: await this.uploadService.uploadFile(request?.company_employees?.photo) }
              : {}
          ),
            is_high_rank_employee: request?.company_employees?.is_high_rank_employee,          }
    
        const entity = await this.repository.createOne({ data })
        const create = await this.repository.getRelations(entity, { relations })
        
    return new CreateCompanyEmployeeResponseDTO(create)
  }
  async update(params: UpdateCompanyEmployeeParamsDTO,request: UpdateCompanyEmployeeRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'company_employees.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_AND },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'company', alias: 'companies'},
        { column: 'companies.logo', alias: 'companies_logo'},
        { column: 'companies.representative_photo', alias: 'companies_representative_photo'},
        { column: 'companies.image', alias: 'companies_image'},
        { column: 'photo', alias: 'photo'},    
    ]
                
    const data = {
            name: request?.companies?.name,
            ...(
            request?.companies?.logo
              ? { logo: await this.uploadService.uploadFile(request?.companies?.logo) }
              : {}
          ),
            location: request?.companies?.location,
            launched_year: request?.companies?.launched_year,
            business_details: request?.companies?.business_details,
            number_of_employees: request?.companies?.number_of_employees,
            industry_id: request?.companies?.industry_id,
            mission: request?.companies?.mission,
            vision: request?.companies?.vision,
            value: request?.companies?.value,
            ...(
            request?.companies?.representative_photo
              ? { representative_photo: await this.uploadService.uploadFile(request?.companies?.representative_photo) }
              : {}
          ),
            representative_profile: request?.companies?.representative_profile,
            listing_classification: request?.companies?.ipo,
            representative_name: request?.companies?.representative_name,
            slug: request?.companies?.slug,
            ...(
            request?.companies?.image
              ? { image: await this.uploadService.uploadFile(request?.companies?.image) }
              : {}
          ),
            capital: request?.companies?.capital,
            company_id: request?.company_employees?.company_id,
            full_name: request?.company_employees?.full_name,
            profile: request?.company_employees?.profile,
            ...(
            request?.company_employees?.photo
              ? { photo: await this.uploadService.uploadFile(request?.company_employees?.photo) }
              : {}
          ),
            is_high_rank_employee: request?.company_employees?.is_high_rank_employee,          }
    
        const entity = await this.repository.updateOne({ conditions, data })
        const update = await this.repository.getRelations(entity, { relations })
        
    return new UpdateCompanyEmployeeResponseDTO(update)
  }
  async delete(params: DeleteCompanyEmployeeParamsDTO,request: DeleteCompanyEmployeeRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'company_employees.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
                    
        await this.repository.removeOne({ conditions })
    
    return new DeleteCompanyEmployeeResponseDTO()
  }
}
