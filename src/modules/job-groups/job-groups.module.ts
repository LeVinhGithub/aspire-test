
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { JobGroupService } from "./job-groups.service";
import { JobGroupController } from "./job-groups.controller";
import { JobGroupRepository } from "./job-groups.repository";
import { JobGroup } from "entities/job_groups";

@Module({
  imports: [TypeOrmModule.forFeature([JobGroup])],
  providers: [provideCustomRepository(JobGroup, JobGroupRepository), JobGroupService],
  controllers: [JobGroupController],
})
export class JobGroupModule {}
