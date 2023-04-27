
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { ScoutTemplateService } from "./scout-templates.service";
import { ScoutTemplateController } from "./scout-templates.controller";
import { ScoutTemplateRepository } from "./scout-templates.repository";
import { ScoutTemplate } from "entities/scout_templates";

@Module({
  imports: [TypeOrmModule.forFeature([ScoutTemplate])],
  providers: [provideCustomRepository(ScoutTemplate, ScoutTemplateRepository), ScoutTemplateService],
  controllers: [ScoutTemplateController],
})
export class ScoutTemplateModule {}
