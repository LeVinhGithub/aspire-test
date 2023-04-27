
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { SchoolType } from 'entities/school_types';

@Injectable()
export class SchoolTypeRepository extends BaseRepository<SchoolType> {}
