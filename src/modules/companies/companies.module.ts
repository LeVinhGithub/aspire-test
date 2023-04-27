
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { CompanyService } from "./companies.service";
import { CompanyController } from "./companies.controller";
import { CompanyRepository } from "./companies.repository";
import { Company } from "entities/companies";
import { NestjsFormDataModule } from "nestjs-form-data";

@Module({
  imports: [TypeOrmModule.forFeature([Company]), NestjsFormDataModule],
  providers: [provideCustomRepository(Company, CompanyRepository), CompanyService],
  controllers: [CompanyController],
})
export class CompanyModule {}
