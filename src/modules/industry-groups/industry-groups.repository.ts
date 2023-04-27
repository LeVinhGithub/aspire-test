
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { IndustryGroup } from 'entities/industry_groups';

@Injectable()
export class IndustryGroupRepository extends BaseRepository<IndustryGroup> {}
