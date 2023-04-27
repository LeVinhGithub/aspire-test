
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { Restriction } from 'entities/restrictions';

@Injectable()
export class RestrictionRepository extends BaseRepository<Restriction> {}
