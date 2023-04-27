
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { CompanyUserService } from "./company-users.service";
import { CompanyUserController } from "./company-users.controller";
import { CompanyUserRepository } from "./company-users.repository";
import { CompanyUser } from "entities/company_users";
import { NestjsFormDataModule } from "nestjs-form-data";

@Module({
  imports: [TypeOrmModule.forFeature([CompanyUser]), NestjsFormDataModule],
  providers: [provideCustomRepository(CompanyUser, CompanyUserRepository), CompanyUserService],
  controllers: [CompanyUserController],
})
export class CompanyUserModule {}
