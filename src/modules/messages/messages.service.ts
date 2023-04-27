
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FilterMessageResponseDTO, FilterMessageRequestDTO, ShowMessageResponseDTO, ShowMessageParamsDTO, CreateMessageResponseDTO, CreateMessageRequestDTO, UpdateMessageResponseDTO, UpdateMessageParamsDTO, UpdateMessageRequestDTO, DeleteMessageResponseDTO, DeleteMessageParamsDTO } from "./dto";
import { QueryCondition, QueryOperators, QueryWhereType, QueryRelation, QueryPagination, QueryOrder, QueryOrderDir } from "src/shared/base.repository";
import { UploadService } from "src/shared/storage/upload.service";
import { Message } from "entities/messages";
import { MessageRepository } from "./messages.repository";

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    readonly repository: MessageRepository,
    private readonly uploadService: UploadService,
  ) {}

  async filter(queries: FilterMessageRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'applicant_id', value: queries?.messages?.applicant_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },
            { column: 'text', value: queries?.messages?.text, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'attachment', value: queries?.messages?.attachment, operator: QueryOperators.START_WITH, whereType: QueryWhereType.WHERE_OR },
            { column: 'reply_to_message_id', value: queries?.messages?.reply_to_message_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },
            { column: 'company_id', value: queries?.messages?.company_id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_OR },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'attachment', alias: 'attachment'},
        { column: 'company', alias: 'companies'},
        { column: 'companies.logo', alias: 'companies_logo'},
        { column: 'companies.representative_photo', alias: 'companies_representative_photo'},
        { column: 'companies.messages', alias: 'companies_messages'},
        { column: 'companies_messages.attachment', alias: 'companies_messages_attachment'},
        { column: 'companies_messages.company', alias: 'companies_messages_companies'},
        { column: 'companies_messages_companies.logo', alias: 'companies_messages_companies_logo'},
        { column: 'companies_messages_companies.representative_photo', alias: 'companies_messages_companies_representative_photo'},
        { column: 'companies.image', alias: 'companies_image'},    
    ]
        
    const pagination: QueryPagination = {
      page: queries?.pagination_page,
      limit: queries?.pagination_limit
    }
        
    const orders: QueryOrder[] = [{ orderBy: 'messages.created_at', orderDir: QueryOrderDir.DESC }]
        
        const [messages, totalCount, totalPages] = await this.repository.findMany({ conditions, relations, pagination, orders })
    
    return new FilterMessageResponseDTO(messages, totalCount, totalPages)
  }
  async show(params: ShowMessageParamsDTO) {
        const conditions: QueryCondition[] = [
            { column: 'messages.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'attachment', alias: 'attachment'},
        { column: 'company', alias: 'companies'},
        { column: 'companies.logo', alias: 'companies_logo'},
        { column: 'companies.representative_photo', alias: 'companies_representative_photo'},
        { column: 'companies.messages', alias: 'companies_messages'},
        { column: 'companies_messages.attachment', alias: 'companies_messages_attachment'},
        { column: 'companies_messages.company', alias: 'companies_messages_companies'},
        { column: 'companies_messages_companies.logo', alias: 'companies_messages_companies_logo'},
        { column: 'companies_messages_companies.representative_photo', alias: 'companies_messages_companies_representative_photo'},
        { column: 'companies.image', alias: 'companies_image'},    
    ]
                
        const entity = await this.repository.getOne({ conditions })
        const show = await this.repository.getRelations(entity, { relations })
        
    return new ShowMessageResponseDTO(show)
  }
  async create(request: CreateMessageRequestDTO) {
        
    const relations: QueryRelation[] = [
        { column: 'attachment', alias: 'attachment'},
        { column: 'company', alias: 'companies'},
        { column: 'companies.logo', alias: 'companies_logo'},
        { column: 'companies.representative_photo', alias: 'companies_representative_photo'},
        { column: 'companies.messages', alias: 'companies_messages'},
        { column: 'companies_messages.attachment', alias: 'companies_messages_attachment'},
        { column: 'companies_messages.company', alias: 'companies_messages_companies'},
        { column: 'companies_messages_companies.logo', alias: 'companies_messages_companies_logo'},
        { column: 'companies_messages_companies.representative_photo', alias: 'companies_messages_companies_representative_photo'},
        { column: 'companies.image', alias: 'companies_image'},    
    ]
                
    const data = {
            applicant_id: request?.messages?.applicant_id,
            text: request?.messages?.text,
            ...(
            request?.messages?.attachment
              ? { attachment: await this.uploadService.uploadFile(request?.messages?.attachment) }
              : {}
          ),
            reply_to_message_id: request?.messages?.reply_to_message_id,
            company_id: request?.messages?.company_id,          }
    
        const entity = await this.repository.createOne({ data })
        const create = await this.repository.getRelations(entity, { relations })
        
    return new CreateMessageResponseDTO(create)
  }
  async update(params: UpdateMessageParamsDTO,request: UpdateMessageRequestDTO) {
        const conditions: QueryCondition[] = [
            { column: 'messages.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE_AND },      
    ]
        
    const relations: QueryRelation[] = [
        { column: 'attachment', alias: 'attachment'},
        { column: 'company', alias: 'companies'},
        { column: 'companies.logo', alias: 'companies_logo'},
        { column: 'companies.representative_photo', alias: 'companies_representative_photo'},
        { column: 'companies.messages', alias: 'companies_messages'},
        { column: 'companies_messages.attachment', alias: 'companies_messages_attachment'},
        { column: 'companies_messages.company', alias: 'companies_messages_companies'},
        { column: 'companies_messages_companies.logo', alias: 'companies_messages_companies_logo'},
        { column: 'companies_messages_companies.representative_photo', alias: 'companies_messages_companies_representative_photo'},
        { column: 'companies.image', alias: 'companies_image'},    
    ]
                
    const data = {
            applicant_id: request?.messages?.applicant_id,
            text: request?.messages?.text,
            ...(
            request?.messages?.attachment
              ? { attachment: await this.uploadService.uploadFile(request?.messages?.attachment) }
              : {}
          ),
            reply_to_message_id: request?.messages?.reply_to_message_id,
            company_id: request?.messages?.company_id,          }
    
        const entity = await this.repository.updateOne({ conditions, data })
        const update = await this.repository.getRelations(entity, { relations })
        
    return new UpdateMessageResponseDTO(update)
  }
  async delete(params: DeleteMessageParamsDTO) {
        const conditions: QueryCondition[] = [
            { column: 'messages.id', value: params.id, operator: QueryOperators.EQUAL, whereType: QueryWhereType.WHERE },      
    ]
                    
        await this.repository.removeOne({ conditions })
    
    return new DeleteMessageResponseDTO()
  }
}
