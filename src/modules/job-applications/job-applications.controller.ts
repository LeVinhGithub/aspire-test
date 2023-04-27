
import { Controller, Query, Get as MethodGet, Param, Body, Post as MethodPost, Put as MethodPut, Delete as MethodDelete } from "@nestjs/common";
import { JobApplicationService } from "./job-applications.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterJobApplicationResponseDTO, FilterJobApplicationRequestDTO, FilterJobApplicationRequest, ShowJobApplicationResponseDTO, ShowJobApplicationParamsDTO, CreateJobApplicationResponseDTO, CreateJobApplicationRequestDTO, UpdateJobApplicationResponseDTO, UpdateJobApplicationParamsDTO, UpdateJobApplicationRequestDTO, DeleteJobApplicationResponseDTO, DeleteJobApplicationParamsDTO } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";

@Controller()
@ApiTags('JobApplication')
export class JobApplicationController {
  constructor(private readonly jobApplicationService: JobApplicationService) {} 
  
  @MethodGet('/api/job_applications')
  @ApiNestedQuery('job_applications', FilterJobApplicationRequest)
  filter(@Query() queries: FilterJobApplicationRequestDTO): Promise<FilterJobApplicationResponseDTO> {
    return this.jobApplicationService.filter(queries);
  }   

  @MethodGet('/api/job_applications/:id')
  show(@Param() params: ShowJobApplicationParamsDTO): Promise<ShowJobApplicationResponseDTO> {
    return this.jobApplicationService.show(params);
  }   

  @MethodPost('/api/job_applications')
  create(@Body() request: CreateJobApplicationRequestDTO): Promise<CreateJobApplicationResponseDTO> {
    return this.jobApplicationService.create(request);
  }   

  @MethodPut('/api/job_applications/:id')
  update(@Param() params: UpdateJobApplicationParamsDTO, @Body() request: UpdateJobApplicationRequestDTO): Promise<UpdateJobApplicationResponseDTO> {
    return this.jobApplicationService.update(params, request);
  }   

  @MethodDelete('/api/job_applications/:id')
  delete(@Param() params: DeleteJobApplicationParamsDTO): Promise<DeleteJobApplicationResponseDTO> {
    return this.jobApplicationService.delete(params);
  }   
}
