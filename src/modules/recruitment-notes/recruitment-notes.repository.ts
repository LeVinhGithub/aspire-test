
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { RecruitmentNote } from 'entities/recruitment_notes';

@Injectable()
export class RecruitmentNoteRepository extends BaseRepository<RecruitmentNote> {}
