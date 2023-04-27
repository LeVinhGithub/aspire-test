
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { JobExperienceService } from "./job-experiences.service";
import { JobExperienceController } from "./job-experiences.controller";
import { JobExperienceRepository } from "./job-experiences.repository";
import { JobExperience } from "entities/job_experiences";

@Module({
  imports: [TypeOrmModule.forFeature([JobExperience])],
  providers: [provideCustomRepository(JobExperience, JobExperienceRepository), JobExperienceService],
  controllers: [JobExperienceController],
})
export class JobExperienceModule {}
