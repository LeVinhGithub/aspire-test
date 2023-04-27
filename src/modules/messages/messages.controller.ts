
import { Controller, Query, Get as MethodGet, Param, Body, Post as MethodPost, Put as MethodPut, Delete as MethodDelete } from "@nestjs/common";
import { MessageService } from "./messages.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterMessageResponseDTO, FilterMessageRequestDTO, FilterMessageRequest, ShowMessageResponseDTO, ShowMessageParamsDTO, CreateMessageResponseDTO, CreateMessageRequestDTO, UpdateMessageResponseDTO, UpdateMessageParamsDTO, UpdateMessageRequestDTO, DeleteMessageResponseDTO, DeleteMessageParamsDTO } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";
import { ApiUpload } from "decorators/api-upload.decorator";

@Controller()
@ApiTags('Message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {} 
  
  @MethodGet('/api/messages')
  @ApiNestedQuery('messages', FilterMessageRequest)
  filter(@Query() queries: FilterMessageRequestDTO): Promise<FilterMessageResponseDTO> {
    return this.messageService.filter(queries);
  }   

  @MethodGet('/api/messages/:id')
  show(@Param() params: ShowMessageParamsDTO): Promise<ShowMessageResponseDTO> {
    return this.messageService.show(params);
  }   

  @MethodPost('/api/messages')
  @ApiUpload()
  create(@Body() request: CreateMessageRequestDTO): Promise<CreateMessageResponseDTO> {
    return this.messageService.create(request);
  }   

  @MethodPut('/api/messages/:id')
  @ApiUpload()
  update(@Param() params: UpdateMessageParamsDTO, @Body() request: UpdateMessageRequestDTO): Promise<UpdateMessageResponseDTO> {
    return this.messageService.update(params, request);
  }   

  @MethodDelete('/api/messages/:id')
  delete(@Param() params: DeleteMessageParamsDTO): Promise<DeleteMessageResponseDTO> {
    return this.messageService.delete(params);
  }   
}
