
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterApplicantResponseDTO, FilterApplicantRequestDTO, ShowApplicantResponseDTO, ShowApplicantParamsDTO, ShowApplicantRequestDTO, CreateApplicantResponseDTO, CreateApplicantRequestDTO, UpdateApplicantResponseDTO, UpdateApplicantParamsDTO, UpdateApplicantRequestDTO, DeleteApplicantResponseDTO, DeleteApplicantParamsDTO, DeleteApplicantRequestDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryRelation, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { UploadService } from "src/shared/storage/upload.service";
import { Applicant } from "entities/applicants";
import { ApplicantRepository } from "./applicants.repository";

@Injectable()
export class ApplicantService {
  constructor(
    @InjectRepository(Applicant)
    readonly repository: ApplicantRepository,
    private readonly uploadService: UploadService,
  ) {}

  async filter(queries: FilterApplicantRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'full_name', value: queries?.applicants?.full_name, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE },
            { column: 'furigana', value: queries?.applicants?.furigana, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'phone_number', value: queries?.applicants?.phone_number, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'birthdate', value: queries?.applicants?.dob, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'location_id', value: queries?.applicants?.overseas_territory_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'address', value: queries?.applicants?.address, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'income_range_id', value: queries?.applicants?.income_range_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'availability', value: queries?.applicants?.availability, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'resume_file', value: queries?.applicants?.resume_file, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'description', value: queries?.applicants?.description, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'management_experience_id', value: queries?.applicants?.management_experience_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'email', value: queries?.applicants?.email, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'gender', value: queries?.applicants?.gender, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'restrictions.company_id', value: queries?.restrictions?.company_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'restrictions.applicant_id', value: queries?.restrictions?.applicant_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'is_onboarded', value: queries?.applicants?.is_onboarded, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'notes', value: queries?.applicants?.notes, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'current_company_name', value: queries?.applicants?.current_company_name, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'current_company_department', value: queries?.applicants?.current_company_department, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'current_company_position', value: queries?.applicants?.current_company_position, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'confirmation_email_resent_count', value: queries?.applicants?.confirmation_email_resent_count, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'number_of_companies', value: queries?.applicants?.number_of_companies, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'is_suspended', value: queries?.applicants?.is_suspended, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'desired_info', value: queries?.applicants?.desired_info, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'management_experience_years', value: queries?.applicants?.management_experience_years, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'applicants.restrictions', alias: 'restrictions'},
        { column: 'applicant_languages', alias: 'applicant_languages'},
        { column: 'applicant_schools', alias: 'applicant_schools'},
        { column: 'resume_file', alias: 'resume_file'},
        { column: 'applicant_industries', alias: 'applicant_industries'},
        { column: 'messages', alias: 'messages'},
        { column: 'messages.attachment', alias: 'messages_attachment'},
        { column: 'job_applications', alias: 'job_applications'},
        { column: 'job_opening_favorites', alias: 'job_opening_favorites'},
        { column: 'job_experiences', alias: 'job_experiences'},
        { column: 'restrictions.applicant', alias: 'restrictions_applicants'},
        { column: 'restrictions_applicants.resume_file', alias: 'restrictions_applicants_resume_file'},
        { column: 'restrictions_applicants.restrictions', alias: 'restrictions_applicants_restrictions'},
        { column: 'restrictions_applicants_restrictions.applicant', alias: 'restrictions_applicants_restrictions_applicants'},
        { column: 'restrictions_applicants_restrictions_applicants.resume_file', alias: 'restrictions_applicants_restrictions_applicants_resume_file'},
        { column: 'target_list_applicants', alias: 'target_list_applicants'},    
    ]
        
    const pagination: QueryPagination = {
      page: queries?.pagination_page,
      limit: queries?.pagination_limit
    }
        
    const orders: QueryOrder[] = [{ orderBy: 'applicants.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [applicants, totalCount, totalPages] = await this.repository.findMany({ conditions, relations, pagination, orders })
    
    return new FilterApplicantResponseDTO(applicants, totalCount, totalPages)
  }
  async show(params: ShowApplicantParamsDTO,queries: ShowApplicantRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'applicants.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'applicant_languages', alias: 'applicant_languages'},
        { column: 'applicant_schools', alias: 'applicant_schools'},
        { column: 'resume_file', alias: 'resume_file'},
        { column: 'applicant_industries', alias: 'applicant_industries'},
        { column: 'messages', alias: 'messages'},
        { column: 'messages.attachment', alias: 'messages_attachment'},
        { column: 'job_applications', alias: 'job_applications'},
        { column: 'job_opening_favorites', alias: 'job_opening_favorites'},
        { column: 'job_experiences', alias: 'job_experiences'},
        { column: 'restrictions', alias: 'restrictions'},
        { column: 'restrictions.applicant', alias: 'restrictions_applicants'},
        { column: 'restrictions_applicants.resume_file', alias: 'restrictions_applicants_resume_file'},
        { column: 'restrictions_applicants.restrictions', alias: 'restrictions_applicants_restrictions'},
        { column: 'restrictions_applicants_restrictions.applicant', alias: 'restrictions_applicants_restrictions_applicants'},
        { column: 'restrictions_applicants_restrictions_applicants.resume_file', alias: 'restrictions_applicants_restrictions_applicants_resume_file'},
        { column: 'target_list_applicants', alias: 'target_list_applicants'},    
    ]
                
        const entity = await this.repository.getOne({ conditions })
        const show = await this.repository.getRelations(entity, { relations })
        
    return new ShowApplicantResponseDTO(show)
  }
  async create(request: CreateApplicantRequestDTO) {
        
    const relations: QueryRelation[] = [
        { column: 'applicant_languages', alias: 'applicant_languages'},
        { column: 'applicant_schools', alias: 'applicant_schools'},
        { column: 'resume_file', alias: 'resume_file'},
        { column: 'applicant_industries', alias: 'applicant_industries'},
        { column: 'messages', alias: 'messages'},
        { column: 'messages.attachment', alias: 'messages_attachment'},
        { column: 'job_applications', alias: 'job_applications'},
        { column: 'job_opening_favorites', alias: 'job_opening_favorites'},
        { column: 'job_experiences', alias: 'job_experiences'},
        { column: 'restrictions', alias: 'restrictions'},
        { column: 'restrictions.applicant', alias: 'restrictions_applicants'},
        { column: 'restrictions_applicants.resume_file', alias: 'restrictions_applicants_resume_file'},
        { column: 'restrictions_applicants.restrictions', alias: 'restrictions_applicants_restrictions'},
        { column: 'restrictions_applicants_restrictions.applicant', alias: 'restrictions_applicants_restrictions_applicants'},
        { column: 'restrictions_applicants_restrictions_applicants.resume_file', alias: 'restrictions_applicants_restrictions_applicants_resume_file'},    
    ]
                
    const data = {
            full_name: request?.applicants?.full_name,
            furigana: request?.applicants?.furigana,
            phone_number: request?.applicants?.phone_number,
            birthdate: request?.applicants?.dob,
            location_id: request?.applicants?.overseas_territory_id,
            address: request?.applicants?.address,
            income_range_id: request?.applicants?.income_range_id,
            availability: request?.applicants?.availability,
            ...(
            request?.applicants?.resume_file
              ? { resume_file: await this.uploadService.uploadFile(request?.applicants?.resume_file) }
              : {}
          ),
            description: request?.applicants?.description,
            management_experience_id: request?.applicants?.management_experience_id,
            email: request?.applicants?.email,
            gender: request?.applicants?.gender,
            restrictions: [{ company_id: request?.restrictions?.company_id,applicant_id: request?.restrictions?.applicant_id }],
            is_onboarded: request?.applicants?.is_onboarded,
            notes: request?.applicants?.notes,
            current_company_name: request?.applicants?.current_company_name,
            current_company_department: request?.applicants?.current_company_department,
            current_company_position: request?.applicants?.current_company_position,
            confirmation_email_resent_count: request?.applicants?.confirmation_email_resent_count,
            number_of_companies: request?.applicants?.number_of_companies,
            is_suspended: request?.applicants?.is_suspended,
            desired_info: request?.applicants?.desired_info,
            management_experience_years: request?.applicants?.management_experience_years,          }
    
        const entity = await this.repository.createOne({ data })
        const create = await this.repository.getRelations(entity, { relations })
        
    return new CreateApplicantResponseDTO(create)
  }
  async update(params: UpdateApplicantParamsDTO,request: UpdateApplicantRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'applicants.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_AND },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'applicants.restrictions', alias: 'restrictions'},
        { column: 'applicant_languages', alias: 'applicant_languages'},
        { column: 'applicant_schools', alias: 'applicant_schools'},
        { column: 'resume_file', alias: 'resume_file'},
        { column: 'applicant_industries', alias: 'applicant_industries'},
        { column: 'messages', alias: 'messages'},
        { column: 'messages.attachment', alias: 'messages_attachment'},
        { column: 'job_applications', alias: 'job_applications'},
        { column: 'job_opening_favorites', alias: 'job_opening_favorites'},
        { column: 'job_experiences', alias: 'job_experiences'},
        { column: 'restrictions.applicant', alias: 'restrictions_applicants'},
        { column: 'restrictions_applicants.resume_file', alias: 'restrictions_applicants_resume_file'},
        { column: 'restrictions_applicants.restrictions', alias: 'restrictions_applicants_restrictions'},
        { column: 'restrictions_applicants_restrictions.applicant', alias: 'restrictions_applicants_restrictions_applicants'},
        { column: 'restrictions_applicants_restrictions_applicants.resume_file', alias: 'restrictions_applicants_restrictions_applicants_resume_file'},    
    ]
                
    const data = {
            full_name: request?.applicants?.full_name,
            furigana: request?.applicants?.furigana,
            phone_number: request?.applicants?.phone_number,
            birthdate: request?.applicants?.dob,
            location_id: request?.applicants?.overseas_territory_id,
            address: request?.applicants?.address,
            income_range_id: request?.applicants?.income_range_id,
            availability: request?.applicants?.availability,
            ...(
            request?.applicants?.resume_file
              ? { resume_file: await this.uploadService.uploadFile(request?.applicants?.resume_file) }
              : {}
          ),
            description: request?.applicants?.description,
            management_experience_id: request?.applicants?.management_experience_id,
            email: request?.applicants?.email,
            gender: request?.applicants?.gender,
            restrictions: [{ company_id: request?.restrictions?.company_id,applicant_id: request?.restrictions?.applicant_id }],
            is_onboarded: request?.applicants?.is_onboarded,
            notes: request?.applicants?.notes,
            current_company_name: request?.applicants?.current_company_name,
            current_company_department: request?.applicants?.current_company_department,
            current_company_position: request?.applicants?.current_company_position,
            confirmation_email_resent_count: request?.applicants?.confirmation_email_resent_count,
            number_of_companies: request?.applicants?.number_of_companies,
            is_suspended: request?.applicants?.is_suspended,
            desired_info: request?.applicants?.desired_info,
            management_experience_years: request?.applicants?.management_experience_years,          }
    
        const entity = await this.repository.updateOne({ conditions, data })
        const update = await this.repository.getRelations(entity, { relations })
        
    return new UpdateApplicantResponseDTO(update)
  }
  async delete(params: DeleteApplicantParamsDTO,request: DeleteApplicantRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'applicants.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
                    
        await this.repository.removeOne({ conditions })
    
    return new DeleteApplicantResponseDTO()
  }
}
