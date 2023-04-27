
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { ApplicantService } from "./applicants.service";
import { ApplicantController } from "./applicants.controller";
import { ApplicantRepository } from "./applicants.repository";
import { Applicant } from "entities/applicants";
import { NestjsFormDataModule } from "nestjs-form-data";

@Module({
  imports: [TypeOrmModule.forFeature([Applicant]), NestjsFormDataModule],
  providers: [provideCustomRepository(Applicant, ApplicantRepository), ApplicantService],
  controllers: [ApplicantController],
})
export class ApplicantModule {}
