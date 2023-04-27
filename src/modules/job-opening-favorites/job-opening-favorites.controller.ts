
import { Controller, Query, Get as MethodGet, Param, Body, Post as MethodPost, Put as MethodPut, Delete as MethodDelete } from "@nestjs/common";
import { JobOpeningFavoriteService } from "./job-opening-favorites.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterJobOpeningFavoriteResponseDTO, FilterJobOpeningFavoriteRequestDTO, FilterJobOpeningFavoriteRequest, ShowJobOpeningFavoriteResponseDTO, ShowJobOpeningFavoriteParamsDTO, CreateJobOpeningFavoriteResponseDTO, CreateJobOpeningFavoriteRequestDTO, UpdateJobOpeningFavoriteResponseDTO, UpdateJobOpeningFavoriteParamsDTO, UpdateJobOpeningFavoriteRequestDTO, DeleteJobOpeningFavoriteResponseDTO, DeleteJobOpeningFavoriteParamsDTO } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";

@Controller()
@ApiTags('JobOpeningFavorite')
export class JobOpeningFavoriteController {
  constructor(private readonly jobOpeningFavoriteService: JobOpeningFavoriteService) {} 
  
  @MethodGet('/api/job_opening_favorites')
  @ApiNestedQuery('job_opening_favorites', FilterJobOpeningFavoriteRequest)
  filter(@Query() queries: FilterJobOpeningFavoriteRequestDTO): Promise<FilterJobOpeningFavoriteResponseDTO> {
    return this.jobOpeningFavoriteService.filter(queries);
  }   

  @MethodGet('/api/job_opening_favorites/:id')
  show(@Param() params: ShowJobOpeningFavoriteParamsDTO): Promise<ShowJobOpeningFavoriteResponseDTO> {
    return this.jobOpeningFavoriteService.show(params);
  }   

  @MethodPost('/api/job_opening_favorites')
  create(@Body() request: CreateJobOpeningFavoriteRequestDTO): Promise<CreateJobOpeningFavoriteResponseDTO> {
    return this.jobOpeningFavoriteService.create(request);
  }   

  @MethodPut('/api/job_opening_favorites/:id')
  update(@Param() params: UpdateJobOpeningFavoriteParamsDTO, @Body() request: UpdateJobOpeningFavoriteRequestDTO): Promise<UpdateJobOpeningFavoriteResponseDTO> {
    return this.jobOpeningFavoriteService.update(params, request);
  }   

  @MethodDelete('/api/job_opening_favorites/:id')
  delete(@Param() params: DeleteJobOpeningFavoriteParamsDTO): Promise<DeleteJobOpeningFavoriteResponseDTO> {
    return this.jobOpeningFavoriteService.delete(params);
  }   
}
