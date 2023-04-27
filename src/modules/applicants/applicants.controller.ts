
import { Controller, Query, Get as MethodGet, Param, Body, Post as MethodPost, Put as MethodPut, Delete as MethodDelete } from "@nestjs/common";
import { ApplicantService } from "./applicants.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterApplicantResponseDTO, FilterApplicantRequestDTO, FilterApplicantRequest, FilterRestrictionRequest, ShowApplicantResponseDTO, ShowApplicantParamsDTO, ShowApplicantRequestDTO, CreateApplicantResponseDTO, CreateApplicantRequestDTO, UpdateApplicantResponseDTO, UpdateApplicantParamsDTO, UpdateApplicantRequestDTO, DeleteApplicantResponseDTO, DeleteApplicantParamsDTO, DeleteApplicantRequestDTO } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";
import { ApiUpload } from "decorators/api-upload.decorator";

@Controller()
@ApiTags('Applicant')
export class ApplicantController {
  constructor(private readonly applicantService: ApplicantService) {} 
  
  @MethodGet('/api/applicants')
  @ApiNestedQuery('applicants', FilterApplicantRequest)
  @ApiNestedQuery('restrictions', FilterRestrictionRequest)
  filter(@Query() queries: FilterApplicantRequestDTO): Promise<FilterApplicantResponseDTO> {
    return this.applicantService.filter(queries);
  }   

  @MethodGet('/api/applicants/:id')
  show(@Param() params: ShowApplicantParamsDTO, @Query() queries: ShowApplicantRequestDTO): Promise<ShowApplicantResponseDTO> {
    return this.applicantService.show(params, queries);
  }   

  @MethodPost('/api/applicants')
  @ApiUpload()
  create(@Body() request: CreateApplicantRequestDTO): Promise<CreateApplicantResponseDTO> {
    return this.applicantService.create(request);
  }   

  @MethodPut('/api/applicants/:id')
  @ApiUpload()
  update(@Param() params: UpdateApplicantParamsDTO, @Body() request: UpdateApplicantRequestDTO): Promise<UpdateApplicantResponseDTO> {
    return this.applicantService.update(params, request);
  }   

  @MethodDelete('/api/applicants/:id')
  delete(@Param() params: DeleteApplicantParamsDTO, @Body() request: DeleteApplicantRequestDTO): Promise<DeleteApplicantResponseDTO> {
    return this.applicantService.delete(params, request);
  }   
}
