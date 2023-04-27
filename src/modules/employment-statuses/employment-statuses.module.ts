
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { EmploymentStatusService } from "./employment-statuses.service";
import { EmploymentStatusController } from "./employment-statuses.controller";
import { EmploymentStatusRepository } from "./employment-statuses.repository";
import { EmploymentStatus } from "entities/employment_statuses";

@Module({
  imports: [TypeOrmModule.forFeature([EmploymentStatus])],
  providers: [provideCustomRepository(EmploymentStatus, EmploymentStatusRepository), EmploymentStatusService],
  controllers: [EmploymentStatusController],
})
export class EmploymentStatusModule {}
