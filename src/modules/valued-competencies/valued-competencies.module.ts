
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { ValuedCompetencyService } from "./valued-competencies.service";
import { ValuedCompetencyController } from "./valued-competencies.controller";
import { ValuedCompetencyRepository } from "./valued-competencies.repository";
import { ValuedCompetency } from "entities/valued_competencies";

@Module({
  imports: [TypeOrmModule.forFeature([ValuedCompetency])],
  providers: [provideCustomRepository(ValuedCompetency, ValuedCompetencyRepository), ValuedCompetencyService],
  controllers: [ValuedCompetencyController],
})
export class ValuedCompetencyModule {}
