
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { PassiveSmokingCountermeasureService } from "./passive-smoking-countermeasures.service";
import { PassiveSmokingCountermeasureController } from "./passive-smoking-countermeasures.controller";
import { PassiveSmokingCountermeasureRepository } from "./passive-smoking-countermeasures.repository";
import { PassiveSmokingCountermeasure } from "entities/passive_smoking_countermeasures";

@Module({
  imports: [TypeOrmModule.forFeature([PassiveSmokingCountermeasure])],
  providers: [provideCustomRepository(PassiveSmokingCountermeasure, PassiveSmokingCountermeasureRepository), PassiveSmokingCountermeasureService],
  controllers: [PassiveSmokingCountermeasureController],
})
export class PassiveSmokingCountermeasureModule {}
