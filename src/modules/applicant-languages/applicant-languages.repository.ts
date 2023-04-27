
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { ApplicantLanguage } from 'entities/applicant_languages';

@Injectable()
export class ApplicantLanguageRepository extends BaseRepository<ApplicantLanguage> {}
