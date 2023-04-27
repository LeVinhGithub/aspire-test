
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { SkillService } from "./skills.service";
import { SkillController } from "./skills.controller";
import { SkillRepository } from "./skills.repository";
import { Skill } from "entities/skills";

@Module({
  imports: [TypeOrmModule.forFeature([Skill])],
  providers: [provideCustomRepository(Skill, SkillRepository), SkillService],
  controllers: [SkillController],
})
export class SkillModule {}
