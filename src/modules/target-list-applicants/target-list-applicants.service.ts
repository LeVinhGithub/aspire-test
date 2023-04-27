
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateTargetListApplicantResponseDTO, CreateTargetListApplicantRequestDTO, DeleteTargetListApplicantResponseDTO, DeleteTargetListApplicantParamsDTO } from "./dto";
import { QueryRelation, QueryCondition, QueryOperators, QueryWhereType } from "src/shared/base.repository";
import { TargetListApplicant } from "entities/target_list_applicants";
import { TargetListApplicantRepository } from "./target-list-applicants.repository";

@Injectable()
export class TargetListApplicantService {
  constructor(
    @InjectRepository(TargetListApplicant)
    readonly repository: TargetListApplicantRepository,
    
  ) {}

  async create(request: CreateTargetListApplicantRequestDTO) {
        
    const relations: QueryRelation[] = [
        { column: 'target_list', alias: 'target_lists'},
        { column: 'applicant', alias: 'applicants'},
        { column: 'applicants.resume_file', alias: 'applicants_resume_file'},    
    ]
                
    const data = {
            target_list_id: request?.target_list_applicants?.target_list_id,
            applicant_id: request?.target_list_applicants?.applicant_id,          }
    
        const entity = await this.repository.createOne({ data })
        const create = await this.repository.getRelations(entity, { relations })
        
    return new CreateTargetListApplicantResponseDTO(create)
  }
  async delete(params: DeleteTargetListApplicantParamsDTO) {
        const conditions: QueryCondition[] = [
            { column: 'target_list_applicants.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
                    
        await this.repository.removeOne({ conditions })
    
    return new DeleteTargetListApplicantResponseDTO()
  }
}
