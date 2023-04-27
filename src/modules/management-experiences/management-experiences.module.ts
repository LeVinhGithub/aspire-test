
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { ManagementExperienceService } from "./management-experiences.service";
import { ManagementExperienceController } from "./management-experiences.controller";
import { ManagementExperienceRepository } from "./management-experiences.repository";
import { ManagementExperience } from "entities/management_experiences";

@Module({
  imports: [TypeOrmModule.forFeature([ManagementExperience])],
  providers: [provideCustomRepository(ManagementExperience, ManagementExperienceRepository), ManagementExperienceService],
  controllers: [ManagementExperienceController],
})
export class ManagementExperienceModule {}
