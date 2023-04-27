
import { Controller, Query, Get as MethodGet, Body, Post as MethodPost, Param, Put as MethodPut, Delete as MethodDelete } from "@nestjs/common";
import { ApplicantLanguageService } from "./applicant-languages.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterApplicantLanguageResponseDTO, FilterApplicantLanguageRequestDTO, FilterApplicantLanguageRequest, CreateApplicantLanguageResponseDTO, CreateApplicantLanguageRequestDTO, UpdateApplicantLanguageResponseDTO, UpdateApplicantLanguageParamsDTO, UpdateApplicantLanguageRequestDTO, DeleteApplicantLanguageResponseDTO, DeleteApplicantLanguageParamsDTO } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";

@Controller()
@ApiTags('ApplicantLanguage')
export class ApplicantLanguageController {
  constructor(private readonly applicantLanguageService: ApplicantLanguageService) {} 
  
  @MethodGet('/api/applicant_languages')
  @ApiNestedQuery('applicant_languages', FilterApplicantLanguageRequest)
  filter(@Query() queries: FilterApplicantLanguageRequestDTO): Promise<FilterApplicantLanguageResponseDTO> {
    return this.applicantLanguageService.filter(queries);
  }   

  @MethodPost('/api/applicant_languages')
  create(@Body() request: CreateApplicantLanguageRequestDTO): Promise<CreateApplicantLanguageResponseDTO> {
    return this.applicantLanguageService.create(request);
  }   

  @MethodPut('/api/applicant_languages/:id')
  update(@Param() params: UpdateApplicantLanguageParamsDTO, @Body() request: UpdateApplicantLanguageRequestDTO): Promise<UpdateApplicantLanguageResponseDTO> {
    return this.applicantLanguageService.update(params, request);
  }   

  @MethodDelete('/api/applicant_languages/:id')
  delete(@Param() params: DeleteApplicantLanguageParamsDTO): Promise<DeleteApplicantLanguageResponseDTO> {
    return this.applicantLanguageService.delete(params);
  }   
}
