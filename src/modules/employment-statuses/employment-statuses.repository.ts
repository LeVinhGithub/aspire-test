
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { EmploymentStatus } from 'entities/employment_statuses';

@Injectable()
export class EmploymentStatusRepository extends BaseRepository<EmploymentStatus> {}
