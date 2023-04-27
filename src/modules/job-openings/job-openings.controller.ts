
import { Controller, Query, Get as MethodGet, Param, Body, Post as MethodPost, Put as MethodPut, Delete as MethodDelete } from "@nestjs/common";
import { JobOpeningService } from "./job-openings.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterJobOpeningResponseDTO, FilterJobOpeningRequestDTO, FilterJobOpeningRequest, ShowJobOpeningResponseDTO, ShowJobOpeningParamsDTO, ShowJobOpeningRequestDTO, CreateJobOpeningResponseDTO, CreateJobOpeningRequestDTO, UpdateJobOpeningResponseDTO, UpdateJobOpeningParamsDTO, UpdateJobOpeningRequestDTO, DeleteJobOpeningResponseDTO, DeleteJobOpeningParamsDTO, DeleteJobOpeningRequestDTO } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";
import { ApiUpload } from "decorators/api-upload.decorator";

@Controller()
@ApiTags('JobOpening')
export class JobOpeningController {
  constructor(private readonly jobOpeningService: JobOpeningService) {} 
  
  @MethodGet('/api/job_openings')
  @ApiNestedQuery('job_openings', FilterJobOpeningRequest)
  filter(@Query() queries: FilterJobOpeningRequestDTO): Promise<FilterJobOpeningResponseDTO> {
    return this.jobOpeningService.filter(queries);
  }   

  @MethodGet('/api/job_openings/:id')
  show(@Param() params: ShowJobOpeningParamsDTO, @Query() queries: ShowJobOpeningRequestDTO): Promise<ShowJobOpeningResponseDTO> {
    return this.jobOpeningService.show(params, queries);
  }   

  @MethodPost('/api/job_openings')
  @ApiUpload()
  create(@Body() request: CreateJobOpeningRequestDTO): Promise<CreateJobOpeningResponseDTO> {
    return this.jobOpeningService.create(request);
  }   

  @MethodPut('/api/job_openings/:id')
  @ApiUpload()
  update(@Param() params: UpdateJobOpeningParamsDTO, @Body() request: UpdateJobOpeningRequestDTO): Promise<UpdateJobOpeningResponseDTO> {
    return this.jobOpeningService.update(params, request);
  }   

  @MethodDelete('/api/job_openings/:id')
  delete(@Param() params: DeleteJobOpeningParamsDTO, @Body() request: DeleteJobOpeningRequestDTO): Promise<DeleteJobOpeningResponseDTO> {
    return this.jobOpeningService.delete(params, request);
  }   
}
