
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterJobOpeningResponseDTO, FilterJobOpeningRequestDTO, ShowJobOpeningResponseDTO, ShowJobOpeningParamsDTO, ShowJobOpeningRequestDTO, CreateJobOpeningResponseDTO, CreateJobOpeningRequestDTO, UpdateJobOpeningResponseDTO, UpdateJobOpeningParamsDTO, UpdateJobOpeningRequestDTO, DeleteJobOpeningResponseDTO, DeleteJobOpeningParamsDTO, DeleteJobOpeningRequestDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryRelation, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { UploadService } from "src/shared/storage/upload.service";
import { JobOpening } from "entities/job_openings";
import { JobOpeningRepository } from "./job-openings.repository";

@Injectable()
export class JobOpeningService {
  constructor(
    @InjectRepository(JobOpening)
    readonly repository: JobOpeningRepository,
    private readonly uploadService: UploadService,
  ) {}

  async filter(queries: FilterJobOpeningRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'department', value: queries?.job_openings?.department, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE },
            { column: 'position', value: queries?.job_openings?.position, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'occupation_type_id', value: queries?.job_openings?.occupation_type_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'location_id', value: queries?.job_openings?.overseas_territory_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'income_range_id', value: queries?.job_openings?.income_range_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'job_description', value: queries?.job_openings?.job_description, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'is_remote_available', value: queries?.job_openings?.is_remote_available, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'employment_status_id', value: queries?.job_openings?.employment_status_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'company_id', value: queries?.job_openings?.company_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'trial_period', value: queries?.job_openings?.trial_period, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'working_hours', value: queries?.job_openings?.working_hours, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'avg_overtime_hours', value: queries?.job_openings?.avg_overtime_hours, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'trial_period_conditions', value: queries?.job_openings?.trial_period_conditions, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'workplace', value: queries?.job_openings?.workplace, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'qualification', value: queries?.job_openings?.qualification, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'benefits', value: queries?.job_openings?.benefits, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'vacation', value: queries?.job_openings?.vacation, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'bonus', value: queries?.job_openings?.bonus, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'vacation', value: queries?.job_openings?.vacation, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'vacation', value: queries?.job_openings?.vacation, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'bonus', value: queries?.job_openings?.bonuses, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'promotion', value: queries?.job_openings?.promotion, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'appeal_point', value: queries?.job_openings?.appeal_point, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'passive_smoking_countermeasure_id', value: queries?.job_openings?.passive_smoking_countermeasure_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'career_direction_id', value: queries?.job_openings?.career_direction_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'job_title_id', value: queries?.job_openings?.job_title_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'future_career_path', value: queries?.job_openings?.career_path, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'trending_keywords', value: queries?.job_openings?.trending_keywords, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'business_trip_availability', value: queries?.job_openings?.business_trip_availability, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'transfers', value: queries?.job_openings?.transfers, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'publication_start_date', value: queries?.job_openings?.publication_start_date, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'publication_end_date', value: queries?.job_openings?.publication_end_date, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'slug', value: queries?.job_openings?.slug, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'is_recommended', value: queries?.job_openings?.is_recommended, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'is_recommended', value: queries?.job_openings?.is_recommended, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'status', value: queries?.job_openings?.status, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'status', value: queries?.job_openings?.status, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'status', value: queries?.job_openings?.status, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'pv', value: queries?.job_openings?.pv, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'pv', value: queries?.job_openings?.pv, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'pv', value: queries?.job_openings?.pv, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'job_applications', alias: 'job_applications'},
        { column: 'job_opening_favorites', alias: 'job_opening_favorites'},
        { column: 'job_opening_valued_competencies', alias: 'job_opening_valued_competencies'},
        { column: 'image', alias: 'image'},
        { column: 'company', alias: 'companies'},
        { column: 'job_title', alias: 'job_titles'},    
    ]
        
    const pagination: QueryPagination = {
      page: queries?.pagination_page,
      limit: queries?.pagination_limit
    }
        
    const orders: QueryOrder[] = [{ orderBy: 'job_openings.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [job_openings, totalCount, totalPages] = await this.repository.findMany({ conditions, relations, pagination, orders })
    
    return new FilterJobOpeningResponseDTO(job_openings, totalCount, totalPages)
  }
  async show(params: ShowJobOpeningParamsDTO,queries: ShowJobOpeningRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'job_openings.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'job_applications', alias: 'job_applications'},
        { column: 'job_opening_favorites', alias: 'job_opening_favorites'},
        { column: 'job_opening_valued_competencies', alias: 'job_opening_valued_competencies'},
        { column: 'image', alias: 'image'},
        { column: 'company', alias: 'companies'},
        { column: 'job_title', alias: 'job_titles'},    
    ]
                
        const entity = await this.repository.getOne({ conditions })
        const show = await this.repository.getRelations(entity, { relations })
        
    return new ShowJobOpeningResponseDTO(show)
  }
  async create(request: CreateJobOpeningRequestDTO) {
        
    const relations: QueryRelation[] = [
        { column: 'job_applications', alias: 'job_applications'},
        { column: 'job_opening_favorites', alias: 'job_opening_favorites'},
        { column: 'job_opening_valued_competencies', alias: 'job_opening_valued_competencies'},
        { column: 'image', alias: 'image'},
        { column: 'job_title', alias: 'job_titles'},    
    ]
                
    const data = {
            department: request?.job_openings?.department,
            position: request?.job_openings?.position,
            occupation_type_id: request?.job_openings?.occupation_type_id,
            location_id: request?.job_openings?.overseas_territory_id,
            income_range_id: request?.job_openings?.income_range_id,
            job_description: request?.job_openings?.job_description,
            is_remote_available: request?.job_openings?.is_remote_available,
            employment_status_id: request?.job_openings?.employment_status_id,
            company_id: request?.job_openings?.company_id,
            trial_period: request?.job_openings?.trial_period,
            working_hours: request?.job_openings?.working_hours,
            avg_overtime_hours: request?.job_openings?.avg_overtime_hours,
            trial_period_conditions: request?.job_openings?.trial_period_conditions,
            workplace: request?.job_openings?.workplace,
            qualification: request?.job_openings?.qualification,
            benefits: request?.job_openings?.benefits,
            vacation: request?.job_openings?.vacation,
            bonus: request?.job_openings?.bonus,
            promotion: request?.job_openings?.promotion,
            appeal_point: request?.job_openings?.appeal_point,
            passive_smoking_countermeasure_id: request?.job_openings?.passive_smoking_countermeasure_id,
            career_direction_id: request?.job_openings?.career_direction_id,
            job_title_id: request?.job_openings?.job_title_id,
            future_career_path: request?.job_openings?.career_path,
            trending_keywords: request?.job_openings?.trending_keywords,
            business_trip_availability: request?.job_openings?.business_trip_availability,
            transfers: request?.job_openings?.transfers,
            publication_start_date: request?.job_openings?.publication_start_date,
            publication_end_date: request?.job_openings?.publication_end_date,
            slug: request?.job_openings?.slug,
            ...(
            request?.job_openings?.image
              ? { image: await this.uploadService.uploadFile(request?.job_openings?.image) }
              : {}
          ),
            is_recommended: request?.job_openings?.is_recommended,
            status: request?.job_openings?.status,
            pv: request?.job_openings?.pv,          }
    
        const entity = await this.repository.createOne({ data })
        const create = await this.repository.getRelations(entity, { relations })
        
    return new CreateJobOpeningResponseDTO(create)
  }
  async update(params: UpdateJobOpeningParamsDTO,request: UpdateJobOpeningRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'job_openings.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_AND },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'job_applications', alias: 'job_applications'},
        { column: 'job_opening_favorites', alias: 'job_opening_favorites'},
        { column: 'job_opening_valued_competencies', alias: 'job_opening_valued_competencies'},
        { column: 'image', alias: 'image'},
        { column: 'job_title', alias: 'job_titles'},    
    ]
                
    const data = {
            department: request?.job_openings?.department,
            position: request?.job_openings?.position,
            occupation_type_id: request?.job_openings?.occupation_type_id,
            location_id: request?.job_openings?.overseas_territory_id,
            income_range_id: request?.job_openings?.income_range_id,
            job_description: request?.job_openings?.job_description,
            is_remote_available: request?.job_openings?.is_remote_available,
            employment_status_id: request?.job_openings?.employment_status_id,
            company_id: request?.job_openings?.company_id,
            trial_period: request?.job_openings?.trial_period,
            working_hours: request?.job_openings?.working_hours,
            avg_overtime_hours: request?.job_openings?.avg_overtime_hours,
            trial_period_conditions: request?.job_openings?.trial_period_conditions,
            workplace: request?.job_openings?.workplace,
            qualification: request?.job_openings?.qualification,
            benefits: request?.job_openings?.benefits,
            vacation: request?.job_openings?.vacation,
            bonus: request?.job_openings?.bonus,
            promotion: request?.job_openings?.promotion,
            appeal_point: request?.job_openings?.appeal_point,
            passive_smoking_countermeasure_id: request?.job_openings?.passive_smoking_countermeasure_id,
            career_direction_id: request?.job_openings?.career_direction_id,
            job_title_id: request?.job_openings?.job_title_id,
            future_career_path: request?.job_openings?.career_path,
            trending_keywords: request?.job_openings?.trending_keywords,
            business_trip_availability: request?.job_openings?.business_trip_availability,
            transfers: request?.job_openings?.transfers,
            publication_start_date: request?.job_openings?.publication_start_date,
            publication_end_date: request?.job_openings?.publication_end_date,
            slug: request?.job_openings?.slug,
            ...(
            request?.job_openings?.image
              ? { image: await this.uploadService.uploadFile(request?.job_openings?.image) }
              : {}
          ),
            status: request?.job_openings?.status,
            pv: request?.job_openings?.pv,
            is_recommended: request?.job_openings?.is_recommended,          }
    
        const entity = await this.repository.updateOne({ conditions, data })
        const update = await this.repository.getRelations(entity, { relations })
        
    return new UpdateJobOpeningResponseDTO(update)
  }
  async delete(params: DeleteJobOpeningParamsDTO,request: DeleteJobOpeningRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'job_openings.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'image', alias: 'image'},
        { column: 'job_title', alias: 'job_titles'},    
    ]
                
        await this.repository.removeOne({ conditions, relations })
    
    return new DeleteJobOpeningResponseDTO()
  }
}
