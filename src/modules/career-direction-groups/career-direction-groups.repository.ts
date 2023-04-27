
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { CareerDirectionGroup } from 'entities/career_direction_groups';

@Injectable()
export class CareerDirectionGroupRepository extends BaseRepository<CareerDirectionGroup> {}
