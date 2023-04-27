
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { JobExperience } from 'entities/job_experiences';

@Injectable()
export class JobExperienceRepository extends BaseRepository<JobExperience> {}
