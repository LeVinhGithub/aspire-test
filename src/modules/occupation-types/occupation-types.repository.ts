
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { OccupationType } from 'entities/occupation_types';

@Injectable()
export class OccupationTypeRepository extends BaseRepository<OccupationType> {}
