
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { provideCustomRepository } from 'src/utils/repository';
import { CompanyEmployeeService } from "./company-employees.service";
import { CompanyEmployeeController } from "./company-employees.controller";
import { CompanyEmployeeRepository } from "./company-employees.repository";
import { CompanyEmployee } from "entities/company_employees";
import { NestjsFormDataModule } from "nestjs-form-data";

@Module({
  imports: [TypeOrmModule.forFeature([CompanyEmployee]), NestjsFormDataModule],
  providers: [provideCustomRepository(CompanyEmployee, CompanyEmployeeRepository), CompanyEmployeeService],
  controllers: [CompanyEmployeeController],
})
export class CompanyEmployeeModule {}
