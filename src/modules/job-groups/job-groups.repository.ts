
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { JobGroup } from 'entities/job_groups';

@Injectable()
export class JobGroupRepository extends BaseRepository<JobGroup> {}
