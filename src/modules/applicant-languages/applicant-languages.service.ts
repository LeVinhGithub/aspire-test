
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterApplicantLanguageResponseDTO, FilterApplicantLanguageRequestDTO, CreateApplicantLanguageResponseDTO, CreateApplicantLanguageRequestDTO, UpdateApplicantLanguageResponseDTO, UpdateApplicantLanguageParamsDTO, UpdateApplicantLanguageRequestDTO, DeleteApplicantLanguageResponseDTO, DeleteApplicantLanguageParamsDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { ApplicantLanguage } from "entities/applicant_languages";
import { ApplicantLanguageRepository } from "./applicant-languages.repository";

@Injectable()
export class ApplicantLanguageService {
  constructor(
    @InjectRepository(ApplicantLanguage)
    readonly repository: ApplicantLanguageRepository,
    
  ) {}

  async filter(queries: FilterApplicantLanguageRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'proficiency', value: queries?.applicant_languages?.proficiency, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },
            { column: 'language_id', value: queries?.applicant_languages?.language_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'applicant_id', value: queries?.applicant_languages?.applicant_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },      
    ]
            
    const pagination: QueryPagination = {
      page: queries?.pagination_page,
      limit: queries?.pagination_limit
    }
        
    const orders: QueryOrder[] = [{ orderBy: 'applicant_languages.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [applicant_languages, totalCount, totalPages] = await this.repository.findMany({ conditions, pagination, orders })
    
    return new FilterApplicantLanguageResponseDTO(applicant_languages, totalCount, totalPages)
  }
  async create(request: CreateApplicantLanguageRequestDTO) {
                    
    const data = {
            proficiency: request?.applicant_languages?.proficiency,
            language_id: request?.applicant_languages?.language_id,
            applicant_id: request?.applicant_languages?.applicant_id,          }
    
        const create = await this.repository.createOne({ data })
        
    return new CreateApplicantLanguageResponseDTO(create)
  }
  async update(params: UpdateApplicantLanguageParamsDTO,request: UpdateApplicantLanguageRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'applicant_languages.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_AND },      
    ]
                    
    const data = {
            proficiency: request?.applicant_languages?.proficiency,
            language_id: request?.applicant_languages?.language_id,
            applicant_id: request?.applicant_languages?.applicant_id,          }
    
        const update = await this.repository.updateOne({ conditions, data })
        
    return new UpdateApplicantLanguageResponseDTO(update)
  }
  async delete(params: DeleteApplicantLanguageParamsDTO) {
        const conditions: QueryCondition[] = [
            { column: 'applicant_languages.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
                    
        await this.repository.removeOne({ conditions })
    
    return new DeleteApplicantLanguageResponseDTO()
  }
}
