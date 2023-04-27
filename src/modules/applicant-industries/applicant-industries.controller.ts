
import { Controller, Query, Get as MethodGet, Body, Post as MethodPost, Param, Put as MethodPut, Delete as MethodDelete } from "@nestjs/common";
import { ApplicantIndustryService } from "./applicant-industries.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterApplicantIndustryResponseDTO, FilterApplicantIndustryRequestDTO, FilterApplicantIndustryRequest, CreateApplicantIndustryResponseDTO, CreateApplicantIndustryRequestDTO, UpdateApplicantIndustryResponseDTO, UpdateApplicantIndustryParamsDTO, UpdateApplicantIndustryRequestDTO, DeleteApplicantIndustryResponseDTO, DeleteApplicantIndustryParamsDTO } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";

@Controller()
@ApiTags('ApplicantIndustry')
export class ApplicantIndustryController {
  constructor(private readonly applicantIndustryService: ApplicantIndustryService) {} 
  
  @MethodGet('/api/applicant_industries')
  @ApiNestedQuery('applicant_industries', FilterApplicantIndustryRequest)
  filter(@Query() queries: FilterApplicantIndustryRequestDTO): Promise<FilterApplicantIndustryResponseDTO> {
    return this.applicantIndustryService.filter(queries);
  }   

  @MethodPost('/api/applicant_industries')
  create(@Body() request: CreateApplicantIndustryRequestDTO): Promise<CreateApplicantIndustryResponseDTO> {
    return this.applicantIndustryService.create(request);
  }   

  @MethodPut('/api/applicant_industries/:id')
  update(@Param() params: UpdateApplicantIndustryParamsDTO, @Body() request: UpdateApplicantIndustryRequestDTO): Promise<UpdateApplicantIndustryResponseDTO> {
    return this.applicantIndustryService.update(params, request);
  }   

  @MethodDelete('/api/applicant_industries/:id')
  delete(@Param() params: DeleteApplicantIndustryParamsDTO): Promise<DeleteApplicantIndustryResponseDTO> {
    return this.applicantIndustryService.delete(params);
  }   
}
