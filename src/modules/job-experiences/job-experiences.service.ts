
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterJobExperienceResponseDTO, FilterJobExperienceRequestDTO, CreateJobExperienceResponseDTO, CreateJobExperienceRequestDTO, UpdateJobExperienceResponseDTO, UpdateJobExperienceParamsDTO, UpdateJobExperienceRequestDTO, DeleteJobExperienceResponseDTO, DeleteJobExperienceParamsDTO, DeleteJobExperienceRequestDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { JobExperience } from "entities/job_experiences";
import { JobExperienceRepository } from "./job-experiences.repository";

@Injectable()
export class JobExperienceService {
  constructor(
    @InjectRepository(JobExperience)
    readonly repository: JobExperienceRepository,
    
  ) {}

  async filter(queries: FilterJobExperienceRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'company_name', value: queries?.job_experiences?.company_name, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE },
            { column: 'start_date', value: queries?.job_experiences?.start_date, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'end_date', value: queries?.job_experiences?.end_date, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'applicant_id', value: queries?.job_experiences?.applicant_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'job_title_id', value: queries?.job_experiences?.job_title_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },      
    ]
            
    const pagination: QueryPagination = {
      page: queries?.pagination_page,
      limit: queries?.pagination_limit
    }
        
    const orders: QueryOrder[] = [{ orderBy: 'job_experiences.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [job_experiences, totalCount, totalPages] = await this.repository.findMany({ conditions, pagination, orders })
    
    return new FilterJobExperienceResponseDTO(job_experiences, totalCount, totalPages)
  }
  async create(request: CreateJobExperienceRequestDTO) {
                    
    const data = {
            company_name: request?.job_experiences?.company_name,
            start_date: request?.job_experiences?.start_date,
            end_date: request?.job_experiences?.end_date,
            applicant_id: request?.job_experiences?.applicant_id,
            job_title_id: request?.job_experiences?.job_title_id,          }
    
        const create = await this.repository.createOne({ data })
        
    return new CreateJobExperienceResponseDTO(create)
  }
  async update(params: UpdateJobExperienceParamsDTO,request: UpdateJobExperienceRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'job_experiences.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_AND },      
    ]
                    
    const data = {
            company_name: request?.job_experiences?.company_name,
            start_date: request?.job_experiences?.start_date,
            end_date: request?.job_experiences?.end_date,
            applicant_id: request?.job_experiences?.applicant_id,
            job_title_id: request?.job_experiences?.job_title_id,          }
    
        const update = await this.repository.updateOne({ conditions, data })
        
    return new UpdateJobExperienceResponseDTO(update)
  }
  async delete(params: DeleteJobExperienceParamsDTO,request: DeleteJobExperienceRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'job_experiences.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
                    
        await this.repository.removeOne({ conditions })
    
    return new DeleteJobExperienceResponseDTO()
  }
}
