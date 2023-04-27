
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { IncomeRange } from 'entities/income_ranges';

@Injectable()
export class IncomeRangeRepository extends BaseRepository<IncomeRange> {}
