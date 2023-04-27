
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterApplicantSchoolResponseDTO, FilterApplicantSchoolRequestDTO, CreateApplicantSchoolResponseDTO, CreateApplicantSchoolRequestDTO, UpdateApplicantSchoolResponseDTO, UpdateApplicantSchoolParamsDTO, UpdateApplicantSchoolRequestDTO, DeleteApplicantSchoolResponseDTO, DeleteApplicantSchoolParamsDTO, DeleteApplicantSchoolRequestDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { ApplicantSchool } from "entities/applicant_schools";
import { ApplicantSchoolRepository } from "./applicant-schools.repository";

@Injectable()
export class ApplicantSchoolService {
  constructor(
    @InjectRepository(ApplicantSchool)
    readonly repository: ApplicantSchoolRepository,
    
  ) {}

  async filter(queries: FilterApplicantSchoolRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'graduation_date', value: queries?.applicant_schools?.graduation_date, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },
            { column: 'name', value: queries?.applicant_schools?.name, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'degree', value: queries?.applicant_schools?.degree, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'major', value: queries?.applicant_schools?.major, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'school_type_id', value: queries?.applicant_schools?.school_type_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'applicant_id', value: queries?.applicant_schools?.applicant_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },      
    ]
            
    const pagination: QueryPagination = {
      page: queries?.pagination_page,
      limit: queries?.pagination_limit
    }
        
    const orders: QueryOrder[] = [{ orderBy: 'applicant_schools.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [applicant_schools, totalCount, totalPages] = await this.repository.findMany({ conditions, pagination, orders })
    
    return new FilterApplicantSchoolResponseDTO(applicant_schools, totalCount, totalPages)
  }
  async create(request: CreateApplicantSchoolRequestDTO) {
                    
    const data = {
            graduation_date: request?.applicant_schools?.graduation_date,
            name: request?.applicant_schools?.name,
            degree: request?.applicant_schools?.degree,
            major: request?.applicant_schools?.major,
            school_type_id: request?.applicant_schools?.school_type_id,
            applicant_id: request?.applicant_schools?.applicant_id,          }
    
        const create = await this.repository.createOne({ data })
        
    return new CreateApplicantSchoolResponseDTO(create)
  }
  async update(params: UpdateApplicantSchoolParamsDTO,request: UpdateApplicantSchoolRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'applicant_schools.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_AND },      
    ]
                    
    const data = {
            graduation_date: request?.applicant_schools?.graduation_date,
            name: request?.applicant_schools?.name,
            degree: request?.applicant_schools?.degree,
            major: request?.applicant_schools?.major,
            school_type_id: request?.applicant_schools?.school_type_id,
            applicant_id: request?.applicant_schools?.applicant_id,          }
    
        const update = await this.repository.updateOne({ conditions, data })
        
    return new UpdateApplicantSchoolResponseDTO(update)
  }
  async delete(params: DeleteApplicantSchoolParamsDTO,request: DeleteApplicantSchoolRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'applicant_schools.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
                    
        await this.repository.removeOne({ conditions })
    
    return new DeleteApplicantSchoolResponseDTO()
  }
}
