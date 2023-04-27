
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/shared/base.repository';
import { CompanyUser } from 'entities/company_users';

@Injectable()
export class CompanyUserRepository extends BaseRepository<CompanyUser> {}
