
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { IncomeRangeService } from "./income-ranges.service";
import { IncomeRangeController } from "./income-ranges.controller";
import { IncomeRangeRepository } from "./income-ranges.repository";
import { IncomeRange } from "entities/income_ranges";

@Module({
  imports: [TypeOrmModule.forFeature([IncomeRange])],
  providers: [provideCustomRepository(IncomeRange, IncomeRangeRepository), IncomeRangeService],
  controllers: [IncomeRangeController],
})
export class IncomeRangeModule {}
