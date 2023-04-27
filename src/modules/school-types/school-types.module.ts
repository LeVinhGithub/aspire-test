
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { SchoolTypeService } from "./school-types.service";
import { SchoolTypeController } from "./school-types.controller";
import { SchoolTypeRepository } from "./school-types.repository";
import { SchoolType } from "entities/school_types";

@Module({
  imports: [TypeOrmModule.forFeature([SchoolType])],
  providers: [provideCustomRepository(SchoolType, SchoolTypeRepository), SchoolTypeService],
  controllers: [SchoolTypeController],
})
export class SchoolTypeModule {}
