
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { ApplicantLanguageService } from "./applicant-languages.service";
import { ApplicantLanguageController } from "./applicant-languages.controller";
import { ApplicantLanguageRepository } from "./applicant-languages.repository";
import { ApplicantLanguage } from "entities/applicant_languages";

@Module({
  imports: [TypeOrmModule.forFeature([ApplicantLanguage])],
  providers: [provideCustomRepository(ApplicantLanguage, ApplicantLanguageRepository), ApplicantLanguageService],
  controllers: [ApplicantLanguageController],
})
export class ApplicantLanguageModule {}
