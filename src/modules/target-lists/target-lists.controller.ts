
import { Controller, Query, Get as MethodGet, Param, Body, Post as MethodPost, Put as MethodPut, Delete as MethodDelete } from "@nestjs/common";
import { TargetListService } from "./target-lists.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterTargetListResponseDTO, FilterTargetListRequestDTO, FilterTargetListRequest, ShowTargetListResponseDTO, ShowTargetListParamsDTO, ShowTargetListRequestDTO, CreateTargetListResponseDTO, CreateTargetListRequestDTO, UpdateTargetListResponseDTO, UpdateTargetListParamsDTO, UpdateTargetListRequestDTO, DeleteTargetListResponseDTO, DeleteTargetListParamsDTO, DeleteTargetListRequestDTO } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";

@Controller()
@ApiTags('TargetList')
export class TargetListController {
  constructor(private readonly targetListService: TargetListService) {} 
  
  @MethodGet('/api/target_lists')
  @ApiNestedQuery('target_lists', FilterTargetListRequest)
  filter(@Query() queries: FilterTargetListRequestDTO): Promise<FilterTargetListResponseDTO> {
    return this.targetListService.filter(queries);
  }   

  @MethodGet('/api/target_lists/:id')
  show(@Param() params: ShowTargetListParamsDTO, @Query() queries: ShowTargetListRequestDTO): Promise<ShowTargetListResponseDTO> {
    return this.targetListService.show(params, queries);
  }   

  @MethodPost('/api/target_lists')
  create(@Body() request: CreateTargetListRequestDTO): Promise<CreateTargetListResponseDTO> {
    return this.targetListService.create(request);
  }   

  @MethodPut('/api/target_lists/:id')
  update(@Param() params: UpdateTargetListParamsDTO, @Body() request: UpdateTargetListRequestDTO): Promise<UpdateTargetListResponseDTO> {
    return this.targetListService.update(params, request);
  }   

  @MethodDelete('/api/target_lists/:id')
  delete(@Param() params: DeleteTargetListParamsDTO, @Body() request: DeleteTargetListRequestDTO): Promise<DeleteTargetListResponseDTO> {
    return this.targetListService.delete(params, request);
  }   
}
