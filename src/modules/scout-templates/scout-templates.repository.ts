
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { ScoutTemplate } from 'entities/scout_templates';

@Injectable()
export class ScoutTemplateRepository extends BaseRepository<ScoutTemplate> {}
