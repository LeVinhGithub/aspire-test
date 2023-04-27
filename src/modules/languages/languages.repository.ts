
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { Language } from 'entities/languages';

@Injectable()
export class LanguageRepository extends BaseRepository<Language> {}
