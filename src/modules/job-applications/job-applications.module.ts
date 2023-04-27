
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { JobApplicationService } from "./job-applications.service";
import { JobApplicationController } from "./job-applications.controller";
import { JobApplicationRepository } from "./job-applications.repository";
import { JobApplication } from "entities/job_applications";

@Module({
  imports: [TypeOrmModule.forFeature([JobApplication])],
  providers: [provideCustomRepository(JobApplication, JobApplicationRepository), JobApplicationService],
  controllers: [JobApplicationController],
})
export class JobApplicationModule {}
