
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { TargetListApplicantService } from "./target-list-applicants.service";
import { TargetListApplicantController } from "./target-list-applicants.controller";
import { TargetListApplicantRepository } from "./target-list-applicants.repository";
import { TargetListApplicant } from "entities/target_list_applicants";

@Module({
  imports: [TypeOrmModule.forFeature([TargetListApplicant])],
  providers: [provideCustomRepository(TargetListApplicant, TargetListApplicantRepository), TargetListApplicantService],
  controllers: [TargetListApplicantController],
})
export class TargetListApplicantModule {}
