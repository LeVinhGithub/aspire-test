
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { OccupationTypeService } from "./occupation-types.service";
import { OccupationTypeController } from "./occupation-types.controller";
import { OccupationTypeRepository } from "./occupation-types.repository";
import { OccupationType } from "entities/occupation_types";

@Module({
  imports: [TypeOrmModule.forFeature([OccupationType])],
  providers: [provideCustomRepository(OccupationType, OccupationTypeRepository), OccupationTypeService],
  controllers: [OccupationTypeController],
})
export class OccupationTypeModule {}
