
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterJobOpeningFavoriteResponseDTO, FilterJobOpeningFavoriteRequestDTO, ShowJobOpeningFavoriteResponseDTO, ShowJobOpeningFavoriteParamsDTO, CreateJobOpeningFavoriteResponseDTO, CreateJobOpeningFavoriteRequestDTO, UpdateJobOpeningFavoriteResponseDTO, UpdateJobOpeningFavoriteParamsDTO, UpdateJobOpeningFavoriteRequestDTO, DeleteJobOpeningFavoriteResponseDTO, DeleteJobOpeningFavoriteParamsDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { JobOpeningFavorite } from "entities/job_opening_favorites";
import { JobOpeningFavoriteRepository } from "./job-opening-favorites.repository";

@Injectable()
export class JobOpeningFavoriteService {
  constructor(
    @InjectRepository(JobOpeningFavorite)
    readonly repository: JobOpeningFavoriteRepository,
    
  ) {}

  async filter(queries: FilterJobOpeningFavoriteRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'job_opening_id', value: queries?.job_opening_favorites?.job_opening_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },
            { column: 'applicant_id', value: queries?.job_opening_favorites?.applicant_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },      
    ]
            
    const pagination: QueryPagination = {
      page: queries?.pagination_page,
      limit: queries?.pagination_limit
    }
        
    const orders: QueryOrder[] = [{ orderBy: 'job_opening_favorites.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [job_opening_favorites, totalCount, totalPages] = await this.repository.findMany({ conditions, pagination, orders })
    
    return new FilterJobOpeningFavoriteResponseDTO(job_opening_favorites, totalCount, totalPages)
  }
  async show(params: ShowJobOpeningFavoriteParamsDTO) {
        const conditions: QueryCondition[] = [
            { column: 'job_opening_favorites.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
                    
        const show = await this.repository.getOne({ conditions })
        
    return new ShowJobOpeningFavoriteResponseDTO(show)
  }
  async create(request: CreateJobOpeningFavoriteRequestDTO) {
                    
    const data = {
            job_opening_id: request?.job_opening_favorites?.job_opening_id,
            applicant_id: request?.job_opening_favorites?.applicant_id,          }
    
        const create = await this.repository.createOne({ data })
        
    return new CreateJobOpeningFavoriteResponseDTO(create)
  }
  async update(params: UpdateJobOpeningFavoriteParamsDTO,request: UpdateJobOpeningFavoriteRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'job_opening_favorites.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_AND },      
    ]
                    
    const data = {
            job_opening_id: request?.job_opening_favorites?.job_opening_id,
            applicant_id: request?.job_opening_favorites?.applicant_id,          }
    
        const update = await this.repository.updateOne({ conditions, data })
        
    return new UpdateJobOpeningFavoriteResponseDTO(update)
  }
  async delete(params: DeleteJobOpeningFavoriteParamsDTO) {
        const conditions: QueryCondition[] = [
            { column: 'job_opening_favorites.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
                    
        await this.repository.removeOne({ conditions })
    
    return new DeleteJobOpeningFavoriteResponseDTO()
  }
}
