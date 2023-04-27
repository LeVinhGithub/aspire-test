
import { Controller, Query, Get as MethodGet, Body, Post as MethodPost, Param, Put as MethodPut, Delete as MethodDelete } from "@nestjs/common";
import { SkillService } from "./skills.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterSkillResponseDTO, FilterSkillRequestDTO, FilterSkillRequest, CreateSkillResponseDTO, CreateSkillRequestDTO, UpdateSkillResponseDTO, UpdateSkillParamsDTO, UpdateSkillRequestDTO, DeleteSkillResponseDTO, DeleteSkillParamsDTO, DeleteSkillRequestDTO } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";

@Controller()
@ApiTags('Skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {} 
  
  @MethodGet('/api/skills')
  @ApiNestedQuery('skills', FilterSkillRequest)
  filter(@Query() queries: FilterSkillRequestDTO): Promise<FilterSkillResponseDTO> {
    return this.skillService.filter(queries);
  }   

  @MethodPost('/api/skills')
  create(@Body() request: CreateSkillRequestDTO): Promise<CreateSkillResponseDTO> {
    return this.skillService.create(request);
  }   

  @MethodPut('/api/skills/:id')
  update(@Param() params: UpdateSkillParamsDTO, @Body() request: UpdateSkillRequestDTO): Promise<UpdateSkillResponseDTO> {
    return this.skillService.update(params, request);
  }   

  @MethodDelete('/api/skills/:id')
  delete(@Param() params: DeleteSkillParamsDTO, @Body() request: DeleteSkillRequestDTO): Promise<DeleteSkillResponseDTO> {
    return this.skillService.delete(params, request);
  }   
}
