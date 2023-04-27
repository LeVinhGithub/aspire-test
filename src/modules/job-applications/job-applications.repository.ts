
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { JobApplication } from 'entities/job_applications';

@Injectable()
export class JobApplicationRepository extends BaseRepository<JobApplication> {}
