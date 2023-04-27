
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { Company } from 'entities/companies';

@Injectable()
export class CompanyRepository extends BaseRepository<Company> {}
