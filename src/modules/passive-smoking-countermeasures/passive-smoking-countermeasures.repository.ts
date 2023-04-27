
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { PassiveSmokingCountermeasure } from 'entities/passive_smoking_countermeasures';

@Injectable()
export class PassiveSmokingCountermeasureRepository extends BaseRepository<PassiveSmokingCountermeasure> {}
