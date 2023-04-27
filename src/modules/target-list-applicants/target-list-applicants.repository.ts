
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { TargetListApplicant } from 'entities/target_list_applicants';

@Injectable()
export class TargetListApplicantRepository extends BaseRepository<TargetListApplicant> {}
