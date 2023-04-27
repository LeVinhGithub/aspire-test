
import { Controller, Body, Post as MethodPost, Param, Delete as MethodDelete } from "@nestjs/common";
import { TargetListApplicantService } from "./target-list-applicants.service";
import { ApiTags } from "@nestjs/swagger";
import { CreateTargetListApplicantResponseDTO, CreateTargetListApplicantRequestDTO, DeleteTargetListApplicantResponseDTO, DeleteTargetListApplicantParamsDTO } from "./dto";

@Controller()
@ApiTags('TargetListApplicant')
export class TargetListApplicantController {
  constructor(private readonly targetListApplicantService: TargetListApplicantService) {} 
  
  @MethodPost('/api/target_list_applicants')
  create(@Body() request: CreateTargetListApplicantRequestDTO): Promise<CreateTargetListApplicantResponseDTO> {
    return this.targetListApplicantService.create(request);
  }   

  @MethodDelete('/api/target_list_applicants/:id')
  delete(@Param() params: DeleteTargetListApplicantParamsDTO): Promise<DeleteTargetListApplicantResponseDTO> {
    return this.targetListApplicantService.delete(params);
  }   
}
