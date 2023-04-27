
import { Controller, Query, Get as MethodGet, Param, Body, Post as MethodPost, Put as MethodPut, Delete as MethodDelete } from "@nestjs/common";
import { ScoutTemplateService } from "./scout-templates.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterScoutTemplateResponseDTO, FilterScoutTemplateRequestDTO, FilterScoutTemplateRequest, ShowScoutTemplateResponseDTO, ShowScoutTemplateParamsDTO, CreateScoutTemplateResponseDTO, CreateScoutTemplateRequestDTO, UpdateScoutTemplateResponseDTO, UpdateScoutTemplateParamsDTO, UpdateScoutTemplateRequestDTO, DeleteScoutTemplateResponseDTO, DeleteScoutTemplateParamsDTO } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";

@Controller()
@ApiTags('ScoutTemplate')
export class ScoutTemplateController {
  constructor(private readonly scoutTemplateService: ScoutTemplateService) {} 
  
  @MethodGet('/api/scout_templates')
  @ApiNestedQuery('scout_templates', FilterScoutTemplateRequest)
  filter(@Query() queries: FilterScoutTemplateRequestDTO): Promise<FilterScoutTemplateResponseDTO> {
    return this.scoutTemplateService.filter(queries);
  }   

  @MethodGet('/api/scout_templates/:id')
  show(@Param() params: ShowScoutTemplateParamsDTO): Promise<ShowScoutTemplateResponseDTO> {
    return this.scoutTemplateService.show(params);
  }   

  @MethodPost('/api/scout_templates')
  create(@Body() request: CreateScoutTemplateRequestDTO): Promise<CreateScoutTemplateResponseDTO> {
    return this.scoutTemplateService.create(request);
  }   

  @MethodPut('/api/scout_templates/:id')
  update(@Param() params: UpdateScoutTemplateParamsDTO, @Body() request: UpdateScoutTemplateRequestDTO): Promise<UpdateScoutTemplateResponseDTO> {
    return this.scoutTemplateService.update(params, request);
  }   

  @MethodDelete('/api/scout_templates/:id')
  delete(@Param() params: DeleteScoutTemplateParamsDTO): Promise<DeleteScoutTemplateResponseDTO> {
    return this.scoutTemplateService.delete(params);
  }   
}
