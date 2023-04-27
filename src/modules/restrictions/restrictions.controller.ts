
import { Controller, Query, Get as MethodGet, Param, Body, Post as MethodPost, Put as MethodPut, Delete as MethodDelete } from "@nestjs/common";
import { RestrictionService } from "./restrictions.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterRestrictionResponseDTO, FilterRestrictionRequestDTO, FilterRestrictionRequest, ShowRestrictionResponseDTO, ShowRestrictionParamsDTO, CreateRestrictionResponseDTO, CreateRestrictionRequestDTO, UpdateRestrictionResponseDTO, UpdateRestrictionParamsDTO, UpdateRestrictionRequestDTO, DeleteRestrictionResponseDTO, DeleteRestrictionParamsDTO } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";

@Controller()
@ApiTags('Restriction')
export class RestrictionController {
  constructor(private readonly restrictionService: RestrictionService) {} 
  
  @MethodGet('/api/restrictions')
  @ApiNestedQuery('restrictions', FilterRestrictionRequest)
  filter(@Query() queries: FilterRestrictionRequestDTO): Promise<FilterRestrictionResponseDTO> {
    return this.restrictionService.filter(queries);
  }   

  @MethodGet('/api/restrictions/:id')
  show(@Param() params: ShowRestrictionParamsDTO): Promise<ShowRestrictionResponseDTO> {
    return this.restrictionService.show(params);
  }   

  @MethodPost('/api/restrictions')
  create(@Body() request: CreateRestrictionRequestDTO): Promise<CreateRestrictionResponseDTO> {
    return this.restrictionService.create(request);
  }   

  @MethodPut('/api/restrictions/:id')
  update(@Param() params: UpdateRestrictionParamsDTO, @Body() request: UpdateRestrictionRequestDTO): Promise<UpdateRestrictionResponseDTO> {
    return this.restrictionService.update(params, request);
  }   

  @MethodDelete('/api/restrictions/:id')
  delete(@Param() params: DeleteRestrictionParamsDTO): Promise<DeleteRestrictionResponseDTO> {
    return this.restrictionService.delete(params);
  }   
}
