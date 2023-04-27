
import { Controller, Query, Get as MethodGet, Body, Post as MethodPost, Param, Put as MethodPut, Delete as MethodDelete } from "@nestjs/common";
import { ApplicantSchoolService } from "./applicant-schools.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterApplicantSchoolResponseDTO, FilterApplicantSchoolRequestDTO, FilterApplicantSchoolRequest, CreateApplicantSchoolResponseDTO, CreateApplicantSchoolRequestDTO, UpdateApplicantSchoolResponseDTO, UpdateApplicantSchoolParamsDTO, UpdateApplicantSchoolRequestDTO, DeleteApplicantSchoolResponseDTO, DeleteApplicantSchoolParamsDTO, DeleteApplicantSchoolRequestDTO } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";

@Controller()
@ApiTags('ApplicantSchool')
export class ApplicantSchoolController {
  constructor(private readonly applicantSchoolService: ApplicantSchoolService) {} 
  
  @MethodGet('/api/applicant_schools')
  @ApiNestedQuery('applicant_schools', FilterApplicantSchoolRequest)
  filter(@Query() queries: FilterApplicantSchoolRequestDTO): Promise<FilterApplicantSchoolResponseDTO> {
    return this.applicantSchoolService.filter(queries);
  }   

  @MethodPost('/api/applicant_schools')
  create(@Body() request: CreateApplicantSchoolRequestDTO): Promise<CreateApplicantSchoolResponseDTO> {
    return this.applicantSchoolService.create(request);
  }   

  @MethodPut('/api/applicant_schools/:id')
  update(@Param() params: UpdateApplicantSchoolParamsDTO, @Body() request: UpdateApplicantSchoolRequestDTO): Promise<UpdateApplicantSchoolResponseDTO> {
    return this.applicantSchoolService.update(params, request);
  }   

  @MethodDelete('/api/applicant_schools/:id')
  delete(@Param() params: DeleteApplicantSchoolParamsDTO, @Body() request: DeleteApplicantSchoolRequestDTO): Promise<DeleteApplicantSchoolResponseDTO> {
    return this.applicantSchoolService.delete(params, request);
  }   
}
