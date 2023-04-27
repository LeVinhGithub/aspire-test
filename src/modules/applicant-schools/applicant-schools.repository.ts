
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { ApplicantSchool } from 'entities/applicant_schools';

@Injectable()
export class ApplicantSchoolRepository extends BaseRepository<ApplicantSchool> {}
