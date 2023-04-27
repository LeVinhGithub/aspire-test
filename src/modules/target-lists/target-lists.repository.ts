
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { TargetList } from 'entities/target_lists';

@Injectable()
export class TargetListRepository extends BaseRepository<TargetList> {}
