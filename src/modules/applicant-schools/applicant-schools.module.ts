
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { ApplicantSchoolService } from "./applicant-schools.service";
import { ApplicantSchoolController } from "./applicant-schools.controller";
import { ApplicantSchoolRepository } from "./applicant-schools.repository";
import { ApplicantSchool } from "entities/applicant_schools";

@Module({
  imports: [TypeOrmModule.forFeature([ApplicantSchool])],
  providers: [provideCustomRepository(ApplicantSchool, ApplicantSchoolRepository), ApplicantSchoolService],
  controllers: [ApplicantSchoolController],
})
export class ApplicantSchoolModule {}
