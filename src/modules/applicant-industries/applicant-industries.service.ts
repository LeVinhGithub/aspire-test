
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterApplicantIndustryResponseDTO, FilterApplicantIndustryRequestDTO, CreateApplicantIndustryResponseDTO, CreateApplicantIndustryRequestDTO, UpdateApplicantIndustryResponseDTO, UpdateApplicantIndustryParamsDTO, UpdateApplicantIndustryRequestDTO, DeleteApplicantIndustryResponseDTO, DeleteApplicantIndustryParamsDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { ApplicantIndustry } from "entities/applicant_industries";
import { ApplicantIndustryRepository } from "./applicant-industries.repository";

@Injectable()
export class ApplicantIndustryService {
  constructor(
    @InjectRepository(ApplicantIndustry)
    readonly repository: ApplicantIndustryRepository,
    
  ) {}

  async filter(queries: FilterApplicantIndustryRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'industry_id', value: queries?.applicant_industries?.industry_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },
            { column: 'applicant_id', value: queries?.applicant_industries?.applicant_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },      
    ]
            
    const pagination: QueryPagination = {
      page: queries?.pagination_page,
      limit: queries?.pagination_limit
    }
        
    const orders: QueryOrder[] = [{ orderBy: 'applicant_industries.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [applicant_industries, totalCount, totalPages] = await this.repository.findMany({ conditions, pagination, orders })
    
    return new FilterApplicantIndustryResponseDTO(applicant_industries, totalCount, totalPages)
  }
  async create(request: CreateApplicantIndustryRequestDTO) {
                    
    const data = {
            industry_id: request?.applicant_industries?.industry_id,
            applicant_id: request?.applicant_industries?.applicant_id,          }
    
        const create = await this.repository.createOne({ data })
        
    return new CreateApplicantIndustryResponseDTO(create)
  }
  async update(params: UpdateApplicantIndustryParamsDTO,request: UpdateApplicantIndustryRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'applicant_industries.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_AND },      
    ]
                    
    const data = {
            industry_id: request?.applicant_industries?.industry_id,
            applicant_id: request?.applicant_industries?.applicant_id,          }
    
        const update = await this.repository.updateOne({ conditions, data })
        
    return new UpdateApplicantIndustryResponseDTO(update)
  }
  async delete(params: DeleteApplicantIndustryParamsDTO) {
        const conditions: QueryCondition[] = [
            { column: 'applicant_industries.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
                    
        await this.repository.removeOne({ conditions })
    
    return new DeleteApplicantIndustryResponseDTO()
  }
}
