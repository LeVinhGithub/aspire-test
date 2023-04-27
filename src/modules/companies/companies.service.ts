
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterCompanyResponseDTO, FilterCompanyRequestDTO, ShowCompanyResponseDTO, ShowCompanyParamsDTO, ShowCompanyRequestDTO, CreateCompanyResponseDTO, CreateCompanyRequestDTO, UpdateCompanyResponseDTO, UpdateCompanyParamsDTO, UpdateCompanyRequestDTO, DeleteCompanyResponseDTO, DeleteCompanyParamsDTO, DeleteCompanyRequestDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryRelation, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { UploadService } from "src/shared/storage/upload.service";
import { Company } from "entities/companies";
import { CompanyRepository } from "./companies.repository";

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    readonly repository: CompanyRepository,
    private readonly uploadService: UploadService,
  ) {}

  async filter(queries: FilterCompanyRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'name', value: queries?.companies?.name, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE },
            { column: 'logo', value: queries?.companies?.logo, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'location', value: queries?.companies?.location, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'launched_year', value: queries?.companies?.year_founded, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'business_details', value: queries?.companies?.business_details, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'number_of_employees', value: queries?.companies?.number_of_employees, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'industry_id', value: queries?.companies?.industry_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'mission', value: queries?.companies?.mission, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'vision', value: queries?.companies?.vision, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'value', value: queries?.companies?.value, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'representative_photo', value: queries?.companies?.representative_photo, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'representative_profile', value: queries?.companies?.representative_profile, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'listing_classification', value: queries?.companies?.ipo, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'representative_name', value: queries?.companies?.representative_name, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'slug', value: queries?.companies?.slug, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'restrictions.company_id', value: queries?.restrictions?.company_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'messages.applicant_id', value: queries?.messages?.applicant_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'messages.text', value: queries?.messages?.text, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'messages.reply_to_message_id', value: queries?.messages?.reply_to_message_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'messages.applicant_id', value: queries?.messages?.applicant_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'messages.text', value: queries?.messages?.text, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'messages.reply_to_message_id', value: queries?.messages?.reply_to_message_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'capital', value: queries?.companies?.capital, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'companies.restrictions', alias: 'restrictions'},
        { column: 'companies.messages', alias: 'messages'},
        { column: 'company_users', alias: 'company_users'},
        { column: 'company_users.photo', alias: 'company_users_photo'},
        { column: 'logo', alias: 'logo'},
        { column: 'representative_photo', alias: 'representative_photo'},
        { column: 'job_openings', alias: 'job_openings'},
        { column: 'job_openings.job_applications', alias: 'job_openings_job_applications'},
        { column: 'job_openings.job_opening_favorites', alias: 'job_openings_job_opening_favorites'},
        { column: 'job_openings.job_opening_valued_competencies', alias: 'job_openings_job_opening_valued_competencies'},
        { column: 'job_openings.image', alias: 'job_openings_image'},
        { column: 'messages.attachment', alias: 'messages_attachment'},
        { column: 'messages.company', alias: 'messages_companies'},
        { column: 'messages_companies.logo', alias: 'messages_companies_logo'},
        { column: 'messages_companies.representative_photo', alias: 'messages_companies_representative_photo'},
        { column: 'messages_companies.industry', alias: 'messages_companies_industries'},
        { column: 'messages_companies_industries.companies', alias: 'messages_companies_industries_companies'},
        { column: 'messages_companies_industries_companies.logo', alias: 'messages_companies_industries_companies_logo'},
        { column: 'messages_companies_industries_companies.representative_photo', alias: 'messages_companies_industries_companies_representative_photo'},
        { column: 'messages_companies_industries_companies.messages', alias: 'messages_companies_industries_companies_messages'},
        { column: 'messages_companies_industries_companies_messages.attachment', alias: 'messages_companies_industries_companies_messages_attachment'},
        { column: 'messages_companies_industries_companies_messages.company', alias: 'messages_companies_industries_companies_messages_companies'},
        { column: 'messages_companies_industries_companies_messages_companies.logo', alias: 'messages_companies_industries_companies_messages_companies_logo'},
        { column: 'messages_companies_industries_companies_messages_companies.representative_photo', alias: 'messages_companies_industries_companies_messages_companies_representative_photo'},
        { column: 'messages_companies_industries_companies_messages_companies.company_employees', alias: 'messages_companies_industries_companies_messages_companies_company_employees'},
        { column: 'messages_companies_industries_companies.company_employees', alias: 'messages_companies_industries_companies_company_employees'},
        { column: 'messages_companies.messages', alias: 'messages_companies_messages'},
        { column: 'messages_companies_messages.attachment', alias: 'messages_companies_messages_attachment'},
        { column: 'messages_companies_messages.company', alias: 'messages_companies_messages_companies'},
        { column: 'messages_companies_messages_companies.logo', alias: 'messages_companies_messages_companies_logo'},
        { column: 'messages_companies_messages_companies.representative_photo', alias: 'messages_companies_messages_companies_representative_photo'},
        { column: 'messages_companies_messages_companies.company_employees', alias: 'messages_companies_messages_companies_company_employees'},
        { column: 'messages_companies.company_employees', alias: 'messages_companies_company_employees'},
        { column: 'industry', alias: 'industries'},
        { column: 'industries.companies', alias: 'industries_companies'},
        { column: 'industries_companies.logo', alias: 'industries_companies_logo'},
        { column: 'industries_companies.representative_photo', alias: 'industries_companies_representative_photo'},
        { column: 'industries_companies.messages', alias: 'industries_companies_messages'},
        { column: 'industries_companies_messages.attachment', alias: 'industries_companies_messages_attachment'},
        { column: 'industries_companies_messages.company', alias: 'industries_companies_messages_companies'},
        { column: 'industries_companies_messages_companies.logo', alias: 'industries_companies_messages_companies_logo'},
        { column: 'industries_companies_messages_companies.representative_photo', alias: 'industries_companies_messages_companies_representative_photo'},
        { column: 'industries_companies_messages_companies.company_employees', alias: 'industries_companies_messages_companies_company_employees'},
        { column: 'industries_companies.company_employees', alias: 'industries_companies_company_employees'},
        { column: 'image', alias: 'image'},
        { column: 'company_employees', alias: 'company_employees'},
        { column: 'company_employees.photo', alias: 'company_employees_photo'},    
    ]
        
    const pagination: QueryPagination = {
      page: queries?.pagination_page,
      limit: queries?.pagination_limit
    }
        
    const orders: QueryOrder[] = [{ orderBy: 'companies.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [companies, totalCount, totalPages] = await this.repository.findMany({ conditions, relations, pagination, orders })
    
    return new FilterCompanyResponseDTO(companies, totalCount, totalPages)
  }
  async show(params: ShowCompanyParamsDTO,queries: ShowCompanyRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'companies.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'company_users', alias: 'company_users'},
        { column: 'company_users.photo', alias: 'company_users_photo'},
        { column: 'logo', alias: 'logo'},
        { column: 'representative_photo', alias: 'representative_photo'},
        { column: 'job_openings', alias: 'job_openings'},
        { column: 'job_openings.job_applications', alias: 'job_openings_job_applications'},
        { column: 'job_openings.job_opening_favorites', alias: 'job_openings_job_opening_favorites'},
        { column: 'job_openings.job_opening_valued_competencies', alias: 'job_openings_job_opening_valued_competencies'},
        { column: 'job_openings.image', alias: 'job_openings_image'},
        { column: 'messages', alias: 'messages'},
        { column: 'messages.attachment', alias: 'messages_attachment'},
        { column: 'messages.company', alias: 'messages_companies'},
        { column: 'messages_companies.logo', alias: 'messages_companies_logo'},
        { column: 'messages_companies.representative_photo', alias: 'messages_companies_representative_photo'},
        { column: 'messages_companies.industry', alias: 'messages_companies_industries'},
        { column: 'messages_companies_industries.companies', alias: 'messages_companies_industries_companies'},
        { column: 'messages_companies_industries_companies.logo', alias: 'messages_companies_industries_companies_logo'},
        { column: 'messages_companies_industries_companies.representative_photo', alias: 'messages_companies_industries_companies_representative_photo'},
        { column: 'messages_companies_industries_companies.messages', alias: 'messages_companies_industries_companies_messages'},
        { column: 'messages_companies_industries_companies_messages.attachment', alias: 'messages_companies_industries_companies_messages_attachment'},
        { column: 'messages_companies_industries_companies_messages.company', alias: 'messages_companies_industries_companies_messages_companies'},
        { column: 'messages_companies_industries_companies_messages_companies.logo', alias: 'messages_companies_industries_companies_messages_companies_logo'},
        { column: 'messages_companies_industries_companies_messages_companies.representative_photo', alias: 'messages_companies_industries_companies_messages_companies_representative_photo'},
        { column: 'messages_companies_industries_companies_messages_companies.company_employees', alias: 'messages_companies_industries_companies_messages_companies_company_employees'},
        { column: 'messages_companies_industries_companies.company_employees', alias: 'messages_companies_industries_companies_company_employees'},
        { column: 'messages_companies.messages', alias: 'messages_companies_messages'},
        { column: 'messages_companies_messages.attachment', alias: 'messages_companies_messages_attachment'},
        { column: 'messages_companies_messages.company', alias: 'messages_companies_messages_companies'},
        { column: 'messages_companies_messages_companies.logo', alias: 'messages_companies_messages_companies_logo'},
        { column: 'messages_companies_messages_companies.representative_photo', alias: 'messages_companies_messages_companies_representative_photo'},
        { column: 'messages_companies_messages_companies.company_employees', alias: 'messages_companies_messages_companies_company_employees'},
        { column: 'messages_companies.company_employees', alias: 'messages_companies_company_employees'},
        { column: 'restrictions', alias: 'restrictions'},
        { column: 'industry', alias: 'industries'},
        { column: 'industries.companies', alias: 'industries_companies'},
        { column: 'industries_companies.logo', alias: 'industries_companies_logo'},
        { column: 'industries_companies.representative_photo', alias: 'industries_companies_representative_photo'},
        { column: 'industries_companies.messages', alias: 'industries_companies_messages'},
        { column: 'industries_companies_messages.attachment', alias: 'industries_companies_messages_attachment'},
        { column: 'industries_companies_messages.company', alias: 'industries_companies_messages_companies'},
        { column: 'industries_companies_messages_companies.logo', alias: 'industries_companies_messages_companies_logo'},
        { column: 'industries_companies_messages_companies.representative_photo', alias: 'industries_companies_messages_companies_representative_photo'},
        { column: 'industries_companies_messages_companies.company_employees', alias: 'industries_companies_messages_companies_company_employees'},
        { column: 'industries_companies.company_employees', alias: 'industries_companies_company_employees'},
        { column: 'image', alias: 'image'},
        { column: 'company_employees', alias: 'company_employees'},
        { column: 'company_employees.photo', alias: 'company_employees_photo'},
        { column: 'scout_templates', alias: 'scout_templates'},
        { column: 'target_lists', alias: 'target_lists'},
        { column: 'target_lists.target_list_applicants', alias: 'target_lists_target_list_applicants'},
        { column: 'recruitment_notes', alias: 'recruitment_notes'},    
    ]
                
        const entity = await this.repository.getOne({ conditions })
        const show = await this.repository.getRelations(entity, { relations })
        
    return new ShowCompanyResponseDTO(show)
  }
  async create(request: CreateCompanyRequestDTO) {
        
    const relations: QueryRelation[] = [
        { column: 'company_users', alias: 'company_users'},
        { column: 'company_users.photo', alias: 'company_users_photo'},
        { column: 'logo', alias: 'logo'},
        { column: 'representative_photo', alias: 'representative_photo'},
        { column: 'job_openings', alias: 'job_openings'},
        { column: 'job_openings.job_applications', alias: 'job_openings_job_applications'},
        { column: 'job_openings.job_opening_favorites', alias: 'job_openings_job_opening_favorites'},
        { column: 'job_openings.job_opening_valued_competencies', alias: 'job_openings_job_opening_valued_competencies'},
        { column: 'job_openings.image', alias: 'job_openings_image'},
        { column: 'messages', alias: 'messages'},
        { column: 'messages.attachment', alias: 'messages_attachment'},
        { column: 'messages.company', alias: 'messages_companies'},
        { column: 'messages_companies.logo', alias: 'messages_companies_logo'},
        { column: 'messages_companies.representative_photo', alias: 'messages_companies_representative_photo'},
        { column: 'messages_companies.industry', alias: 'messages_companies_industries'},
        { column: 'messages_companies_industries.companies', alias: 'messages_companies_industries_companies'},
        { column: 'messages_companies_industries_companies.logo', alias: 'messages_companies_industries_companies_logo'},
        { column: 'messages_companies_industries_companies.representative_photo', alias: 'messages_companies_industries_companies_representative_photo'},
        { column: 'messages_companies_industries_companies.messages', alias: 'messages_companies_industries_companies_messages'},
        { column: 'messages_companies_industries_companies_messages.attachment', alias: 'messages_companies_industries_companies_messages_attachment'},
        { column: 'messages_companies_industries_companies_messages.company', alias: 'messages_companies_industries_companies_messages_companies'},
        { column: 'messages_companies_industries_companies_messages_companies.logo', alias: 'messages_companies_industries_companies_messages_companies_logo'},
        { column: 'messages_companies_industries_companies_messages_companies.representative_photo', alias: 'messages_companies_industries_companies_messages_companies_representative_photo'},
        { column: 'messages_companies_industries_companies_messages_companies.company_employees', alias: 'messages_companies_industries_companies_messages_companies_company_employees'},
        { column: 'messages_companies_industries_companies.company_employees', alias: 'messages_companies_industries_companies_company_employees'},
        { column: 'messages_companies.messages', alias: 'messages_companies_messages'},
        { column: 'messages_companies_messages.attachment', alias: 'messages_companies_messages_attachment'},
        { column: 'messages_companies_messages.company', alias: 'messages_companies_messages_companies'},
        { column: 'messages_companies_messages_companies.logo', alias: 'messages_companies_messages_companies_logo'},
        { column: 'messages_companies_messages_companies.representative_photo', alias: 'messages_companies_messages_companies_representative_photo'},
        { column: 'messages_companies_messages_companies.company_employees', alias: 'messages_companies_messages_companies_company_employees'},
        { column: 'messages_companies.company_employees', alias: 'messages_companies_company_employees'},
        { column: 'restrictions', alias: 'restrictions'},
        { column: 'industry', alias: 'industries'},
        { column: 'industries.companies', alias: 'industries_companies'},
        { column: 'industries_companies.logo', alias: 'industries_companies_logo'},
        { column: 'industries_companies.representative_photo', alias: 'industries_companies_representative_photo'},
        { column: 'industries_companies.messages', alias: 'industries_companies_messages'},
        { column: 'industries_companies_messages.attachment', alias: 'industries_companies_messages_attachment'},
        { column: 'industries_companies_messages.company', alias: 'industries_companies_messages_companies'},
        { column: 'industries_companies_messages_companies.logo', alias: 'industries_companies_messages_companies_logo'},
        { column: 'industries_companies_messages_companies.representative_photo', alias: 'industries_companies_messages_companies_representative_photo'},
        { column: 'industries_companies_messages_companies.company_employees', alias: 'industries_companies_messages_companies_company_employees'},
        { column: 'industries_companies.company_employees', alias: 'industries_companies_company_employees'},
        { column: 'image', alias: 'image'},
        { column: 'company_employees', alias: 'company_employees'},
        { column: 'company_employees.photo', alias: 'company_employees_photo'},    
    ]
                
    const data = {
            name: request?.companies?.name,
            ...(
            request?.companies?.logo
              ? { logo: await this.uploadService.uploadFile(request?.companies?.logo) }
              : {}
          ),
            location: request?.companies?.location,
            launched_year: request?.companies?.year_founded,
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
            restrictions: [{ company_id: request?.restrictions?.company_id }],
            messages: [{ applicant_id: request?.messages?.applicant_id,text: request?.messages?.text,...(
            request?.messages?.attachment
              ? { attachment: await this.uploadService.uploadFile(request?.messages?.attachment) }
              : {}
          ),reply_to_message_id: request?.messages?.reply_to_message_id }],
            ...(
            request?.companies?.image
              ? { image: await this.uploadService.uploadFile(request?.companies?.image) }
              : {}
          ),
            capital: request?.companies?.capital,
            business_id: request?.companies?.business_id,
            name_furigana: request?.companies?.name_furigana,          }
    
        const entity = await this.repository.createOne({ data })
        const create = await this.repository.getRelations(entity, { relations })
        
    return new CreateCompanyResponseDTO(create)
  }
  async update(params: UpdateCompanyParamsDTO,request: UpdateCompanyRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'companies.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_AND },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'companies.restrictions', alias: 'restrictions'},
        { column: 'companies.messages', alias: 'messages'},
        { column: 'company_users', alias: 'company_users'},
        { column: 'company_users.photo', alias: 'company_users_photo'},
        { column: 'logo', alias: 'logo'},
        { column: 'representative_photo', alias: 'representative_photo'},
        { column: 'job_openings', alias: 'job_openings'},
        { column: 'job_openings.job_applications', alias: 'job_openings_job_applications'},
        { column: 'job_openings.job_opening_favorites', alias: 'job_openings_job_opening_favorites'},
        { column: 'job_openings.job_opening_valued_competencies', alias: 'job_openings_job_opening_valued_competencies'},
        { column: 'job_openings.image', alias: 'job_openings_image'},
        { column: 'messages.attachment', alias: 'messages_attachment'},
        { column: 'messages.company', alias: 'messages_companies'},
        { column: 'messages_companies.logo', alias: 'messages_companies_logo'},
        { column: 'messages_companies.representative_photo', alias: 'messages_companies_representative_photo'},
        { column: 'messages_companies.industry', alias: 'messages_companies_industries'},
        { column: 'messages_companies_industries.companies', alias: 'messages_companies_industries_companies'},
        { column: 'messages_companies_industries_companies.logo', alias: 'messages_companies_industries_companies_logo'},
        { column: 'messages_companies_industries_companies.representative_photo', alias: 'messages_companies_industries_companies_representative_photo'},
        { column: 'messages_companies_industries_companies.messages', alias: 'messages_companies_industries_companies_messages'},
        { column: 'messages_companies_industries_companies_messages.attachment', alias: 'messages_companies_industries_companies_messages_attachment'},
        { column: 'messages_companies_industries_companies_messages.company', alias: 'messages_companies_industries_companies_messages_companies'},
        { column: 'messages_companies_industries_companies_messages_companies.logo', alias: 'messages_companies_industries_companies_messages_companies_logo'},
        { column: 'messages_companies_industries_companies_messages_companies.representative_photo', alias: 'messages_companies_industries_companies_messages_companies_representative_photo'},
        { column: 'messages_companies_industries_companies_messages_companies.company_employees', alias: 'messages_companies_industries_companies_messages_companies_company_employees'},
        { column: 'messages_companies_industries_companies.company_employees', alias: 'messages_companies_industries_companies_company_employees'},
        { column: 'messages_companies.messages', alias: 'messages_companies_messages'},
        { column: 'messages_companies_messages.attachment', alias: 'messages_companies_messages_attachment'},
        { column: 'messages_companies_messages.company', alias: 'messages_companies_messages_companies'},
        { column: 'messages_companies_messages_companies.logo', alias: 'messages_companies_messages_companies_logo'},
        { column: 'messages_companies_messages_companies.representative_photo', alias: 'messages_companies_messages_companies_representative_photo'},
        { column: 'messages_companies_messages_companies.company_employees', alias: 'messages_companies_messages_companies_company_employees'},
        { column: 'messages_companies.company_employees', alias: 'messages_companies_company_employees'},
        { column: 'industry', alias: 'industries'},
        { column: 'industries.companies', alias: 'industries_companies'},
        { column: 'industries_companies.logo', alias: 'industries_companies_logo'},
        { column: 'industries_companies.representative_photo', alias: 'industries_companies_representative_photo'},
        { column: 'industries_companies.messages', alias: 'industries_companies_messages'},
        { column: 'industries_companies_messages.attachment', alias: 'industries_companies_messages_attachment'},
        { column: 'industries_companies_messages.company', alias: 'industries_companies_messages_companies'},
        { column: 'industries_companies_messages_companies.logo', alias: 'industries_companies_messages_companies_logo'},
        { column: 'industries_companies_messages_companies.representative_photo', alias: 'industries_companies_messages_companies_representative_photo'},
        { column: 'industries_companies_messages_companies.company_employees', alias: 'industries_companies_messages_companies_company_employees'},
        { column: 'industries_companies.company_employees', alias: 'industries_companies_company_employees'},
        { column: 'image', alias: 'image'},
        { column: 'company_employees', alias: 'company_employees'},
        { column: 'company_employees.photo', alias: 'company_employees_photo'},    
    ]
                
    const data = {
            name: request?.companies?.name,
            logo: request?.companies?.logo,
            location: request?.companies?.location,
            launched_year: request?.companies?.year_founded,
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
            restrictions: [{ company_id: request?.restrictions?.company_id }],
            messages: [{ applicant_id: request?.messages?.applicant_id,text: request?.messages?.text,...(
            request?.messages?.attachment
              ? { attachment: await this.uploadService.uploadFile(request?.messages?.attachment) }
              : {}
          ),reply_to_message_id: request?.messages?.reply_to_message_id }],
            ...(
            request?.companies?.image
              ? { image: await this.uploadService.uploadFile(request?.companies?.image) }
              : {}
          ),
            capital: request?.companies?.capital,
            business_id: request?.companies?.business_id,
            name_furigana: request?.companies?.name_furigana,          }
    
        const entity = await this.repository.updateOne({ conditions, data })
        const update = await this.repository.getRelations(entity, { relations })
        
    return new UpdateCompanyResponseDTO(update)
  }
  async delete(params: DeleteCompanyParamsDTO,request: DeleteCompanyRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'companies.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
                    
        await this.repository.removeOne({ conditions })
    
    return new DeleteCompanyResponseDTO()
  }
}
