
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { ManagementExperience } from 'entities/management_experiences';

@Injectable()
export class ManagementExperienceRepository extends BaseRepository<ManagementExperience> {}
