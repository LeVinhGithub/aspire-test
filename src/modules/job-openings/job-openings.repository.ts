
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { JobOpening } from 'entities/job_openings';

@Injectable()
export class JobOpeningRepository extends BaseRepository<JobOpening> {}
