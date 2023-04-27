
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterJobApplicationResponseDTO, FilterJobApplicationRequestDTO, ShowJobApplicationResponseDTO, ShowJobApplicationParamsDTO, CreateJobApplicationResponseDTO, CreateJobApplicationRequestDTO, UpdateJobApplicationResponseDTO, UpdateJobApplicationParamsDTO, UpdateJobApplicationRequestDTO, DeleteJobApplicationResponseDTO, DeleteJobApplicationParamsDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { JobApplication } from "entities/job_applications";
import { JobApplicationRepository } from "./job-applications.repository";

@Injectable()
export class JobApplicationService {
  constructor(
    @InjectRepository(JobApplication)
    readonly repository: JobApplicationRepository,
    
  ) {}

  async filter(queries: FilterJobApplicationRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'applicant_id', value: queries?.job_applications?.applicant_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },
            { column: 'job_opening_id', value: queries?.job_applications?.job_opening_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'status', value: queries?.job_applications?.status, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },      
    ]
            
    const pagination: QueryPagination = {
      page: queries?.pagination_page,
      limit: queries?.pagination_limit
    }
        
    const orders: QueryOrder[] = [{ orderBy: 'job_applications.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [job_applications, totalCount, totalPages] = await this.repository.findMany({ conditions, pagination, orders })
    
    return new FilterJobApplicationResponseDTO(job_applications, totalCount, totalPages)
  }
  async show(params: ShowJobApplicationParamsDTO) {
        const conditions: QueryCondition[] = [
            { column: 'job_applications.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
                    
        const show = await this.repository.getOne({ conditions })
        
    return new ShowJobApplicationResponseDTO(show)
  }
  async create(request: CreateJobApplicationRequestDTO) {
                    
    const data = {
            applicant_id: request?.job_applications?.applicant_id,
            job_opening_id: request?.job_applications?.job_opening_id,
            status: request?.job_applications?.status,          }
    
        const create = await this.repository.createOne({ data })
        
    return new CreateJobApplicationResponseDTO(create)
  }
  async update(params: UpdateJobApplicationParamsDTO,request: UpdateJobApplicationRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'job_applications.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_AND },      
    ]
                    
    const data = {
            applicant_id: request?.job_applications?.applicant_id,
            job_opening_id: request?.job_applications?.job_opening_id,
            status: request?.job_applications?.status,          }
    
        const update = await this.repository.updateOne({ conditions, data })
        
    return new UpdateJobApplicationResponseDTO(update)
  }
  async delete(params: DeleteJobApplicationParamsDTO) {
        const conditions: QueryCondition[] = [
            { column: 'job_applications.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
                    
        await this.repository.removeOne({ conditions })
    
    return new DeleteJobApplicationResponseDTO()
  }
}
