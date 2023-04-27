
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { Applicant } from 'entities/applicants';

@Injectable()
export class ApplicantRepository extends BaseRepository<Applicant> {}
