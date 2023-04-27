
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { ValuedCompetency } from 'entities/valued_competencies';

@Injectable()
export class ValuedCompetencyRepository extends BaseRepository<ValuedCompetency> {}
