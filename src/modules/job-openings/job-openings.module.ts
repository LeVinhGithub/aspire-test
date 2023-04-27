
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { JobOpeningService } from "./job-openings.service";
import { JobOpeningController } from "./job-openings.controller";
import { JobOpeningRepository } from "./job-openings.repository";
import { JobOpening } from "entities/job_openings";
import { NestjsFormDataModule } from "nestjs-form-data";

@Module({
  imports: [TypeOrmModule.forFeature([JobOpening]), NestjsFormDataModule],
  providers: [provideCustomRepository(JobOpening, JobOpeningRepository), JobOpeningService],
  controllers: [JobOpeningController],
})
export class JobOpeningModule {}
