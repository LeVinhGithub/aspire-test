
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { ApplicantIndustryService } from "./applicant-industries.service";
import { ApplicantIndustryController } from "./applicant-industries.controller";
import { ApplicantIndustryRepository } from "./applicant-industries.repository";
import { ApplicantIndustry } from "entities/applicant_industries";

@Module({
  imports: [TypeOrmModule.forFeature([ApplicantIndustry])],
  providers: [provideCustomRepository(ApplicantIndustry, ApplicantIndustryRepository), ApplicantIndustryService],
  controllers: [ApplicantIndustryController],
})
export class ApplicantIndustryModule {}
