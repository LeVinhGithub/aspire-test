
import { Controller, Query, Get as MethodGet, Body, Post as MethodPost, Param, Put as MethodPut } from "@nestjs/common";
import { RecruitmentNoteService } from "./recruitment-notes.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterRecruitmentNoteResponseDTO, FilterRecruitmentNoteRequestDTO, FilterRecruitmentNoteRequest, CreateRecruitmentNoteResponseDTO, CreateRecruitmentNoteRequestDTO, UpdateRecruitmentNoteResponseDTO, UpdateRecruitmentNoteParamsDTO, UpdateRecruitmentNoteRequestDTO } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";

@Controller()
@ApiTags('RecruitmentNote')
export class RecruitmentNoteController {
  constructor(private readonly recruitmentNoteService: RecruitmentNoteService) {} 
  
  @MethodGet('/api/recruitment_notes')
  @ApiNestedQuery('recruitment_notes', FilterRecruitmentNoteRequest)
  filter(@Query() queries: FilterRecruitmentNoteRequestDTO): Promise<FilterRecruitmentNoteResponseDTO> {
    return this.recruitmentNoteService.filter(queries);
  }   

  @MethodPost('/api/recruitment_notes')
  create(@Body() request: CreateRecruitmentNoteRequestDTO): Promise<CreateRecruitmentNoteResponseDTO> {
    return this.recruitmentNoteService.create(request);
  }   

  @MethodPut('/api/recruitment_notes/:id')
  update(@Param() params: UpdateRecruitmentNoteParamsDTO, @Body() request: UpdateRecruitmentNoteRequestDTO): Promise<UpdateRecruitmentNoteResponseDTO> {
    return this.recruitmentNoteService.update(params, request);
  }   
}
