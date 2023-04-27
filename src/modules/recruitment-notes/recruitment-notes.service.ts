
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterRecruitmentNoteResponseDTO, FilterRecruitmentNoteRequestDTO, CreateRecruitmentNoteResponseDTO, CreateRecruitmentNoteRequestDTO, UpdateRecruitmentNoteResponseDTO, UpdateRecruitmentNoteParamsDTO, UpdateRecruitmentNoteRequestDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { RecruitmentNote } from "entities/recruitment_notes";
import { RecruitmentNoteRepository } from "./recruitment-notes.repository";

@Injectable()
export class RecruitmentNoteService {
  constructor(
    @InjectRepository(RecruitmentNote)
    readonly repository: RecruitmentNoteRepository,
    
  ) {}

  async filter(queries: FilterRecruitmentNoteRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'applicant_id', value: queries?.recruitment_notes?.applicant_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },
            { column: 'company_id', value: queries?.recruitment_notes?.company_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'note', value: queries?.recruitment_notes?.note, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },      
    ]
            
    const pagination: QueryPagination = {
      page: queries?.pagination_page,
      limit: queries?.pagination_limit
    }
        
    const orders: QueryOrder[] = [{ orderBy: 'recruitment_notes.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [recruitment_notes, totalCount, totalPages] = await this.repository.findMany({ conditions, pagination, orders })
    
    return new FilterRecruitmentNoteResponseDTO(recruitment_notes, totalCount, totalPages)
  }
  async create(request: CreateRecruitmentNoteRequestDTO) {
                    
    const data = {
            applicant_id: request?.recruitment_notes?.applicant_id,
            company_id: request?.recruitment_notes?.company_id,
            note: request?.recruitment_notes?.note,          }
    
        const create = await this.repository.createOne({ data })
        
    return new CreateRecruitmentNoteResponseDTO(create)
  }
  async update(params: UpdateRecruitmentNoteParamsDTO,request: UpdateRecruitmentNoteRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'recruitment_notes.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_AND },      
    ]
                    
    const data = {
            applicant_id: request?.recruitment_notes?.applicant_id,
            company_id: request?.recruitment_notes?.company_id,
            note: request?.recruitment_notes?.note,          }
    
        const update = await this.repository.updateOne({ conditions, data })
        
    return new UpdateRecruitmentNoteResponseDTO(update)
  }
}
