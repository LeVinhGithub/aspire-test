
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { RecruitmentNoteService } from "./recruitment-notes.service";
import { RecruitmentNoteController } from "./recruitment-notes.controller";
import { RecruitmentNoteRepository } from "./recruitment-notes.repository";
import { RecruitmentNote } from "entities/recruitment_notes";

@Module({
  imports: [TypeOrmModule.forFeature([RecruitmentNote])],
  providers: [provideCustomRepository(RecruitmentNote, RecruitmentNoteRepository), RecruitmentNoteService],
  controllers: [RecruitmentNoteController],
})
export class RecruitmentNoteModule {}
