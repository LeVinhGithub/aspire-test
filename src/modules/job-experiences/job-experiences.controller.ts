
import { Controller, Query, Get as MethodGet, Body, Post as MethodPost, Param, Put as MethodPut, Delete as MethodDelete } from "@nestjs/common";
import { JobExperienceService } from "./job-experiences.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterJobExperienceResponseDTO, FilterJobExperienceRequestDTO, FilterJobExperienceRequest, CreateJobExperienceResponseDTO, CreateJobExperienceRequestDTO, UpdateJobExperienceResponseDTO, UpdateJobExperienceParamsDTO, UpdateJobExperienceRequestDTO, DeleteJobExperienceResponseDTO, DeleteJobExperienceParamsDTO, DeleteJobExperienceRequestDTO } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";

@Controller()
@ApiTags('JobExperience')
export class JobExperienceController {
  constructor(private readonly jobExperienceService: JobExperienceService) {} 
  
  @MethodGet('/api/job_experiences')
  @ApiNestedQuery('job_experiences', FilterJobExperienceRequest)
  filter(@Query() queries: FilterJobExperienceRequestDTO): Promise<FilterJobExperienceResponseDTO> {
    return this.jobExperienceService.filter(queries);
  }   

  @MethodPost('/api/job_experiences')
  create(@Body() request: CreateJobExperienceRequestDTO): Promise<CreateJobExperienceResponseDTO> {
    return this.jobExperienceService.create(request);
  }   

  @MethodPut('/api/job_experiences/:id')
  update(@Param() params: UpdateJobExperienceParamsDTO, @Body() request: UpdateJobExperienceRequestDTO): Promise<UpdateJobExperienceResponseDTO> {
    return this.jobExperienceService.update(params, request);
  }   

  @MethodDelete('/api/job_experiences/:id')
  delete(@Param() params: DeleteJobExperienceParamsDTO, @Body() request: DeleteJobExperienceRequestDTO): Promise<DeleteJobExperienceResponseDTO> {
    return this.jobExperienceService.delete(params, request);
  }   
}
