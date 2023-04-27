
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { Message } from 'entities/messages';

@Injectable()
export class MessageRepository extends BaseRepository<Message> {}
