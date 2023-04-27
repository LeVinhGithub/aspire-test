
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { ApplicantIndustry } from 'entities/applicant_industries';

@Injectable()
export class ApplicantIndustryRepository extends BaseRepository<ApplicantIndustry> {}
