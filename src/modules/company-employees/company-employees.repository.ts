
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { CompanyEmployee } from 'entities/company_employees';

@Injectable()
export class CompanyEmployeeRepository extends BaseRepository<CompanyEmployee> {}
