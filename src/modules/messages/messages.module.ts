
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { MessageService } from "./messages.service";
import { MessageController } from "./messages.controller";
import { MessageRepository } from "./messages.repository";
import { Message } from "entities/messages";
import { NestjsFormDataModule } from "nestjs-form-data";

@Module({
  imports: [TypeOrmModule.forFeature([Message]), NestjsFormDataModule],
  providers: [provideCustomRepository(Message, MessageRepository), MessageService],
  controllers: [MessageController],
})
export class MessageModule {}
