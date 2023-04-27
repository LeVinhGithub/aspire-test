
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { Skill } from 'entities/skills';

@Injectable()
export class SkillRepository extends BaseRepository<Skill> {}
