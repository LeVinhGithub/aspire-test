
import { Controller, Query, Get as MethodGet, Param, Body, Post as MethodPost, Put as MethodPut, Delete as MethodDelete } from "@nestjs/common";
import { CompanyEmployeeService } from "./company-employees.service";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";
import { FilterCompanyEmployeeResponseDTO, FilterCompanyEmployeeRequestDTO, FilterCompanyEmployeeRequest, FilterCompanyRequest, ShowCompanyEmployeeResponseDTO, ShowCompanyEmployeeParamsDTO, ShowCompanyEmployeeRequestDTO, CreateCompanyEmployeeResponseDTO, CreateCompanyEmployeeRequestDTO, UpdateCompanyEmployeeResponseDTO, UpdateCompanyEmployeeParamsDTO, UpdateCompanyEmployeeRequestDTO, DeleteCompanyEmployeeResponseDTO, DeleteCompanyEmployeeParamsDTO, DeleteCompanyEmployeeRequestDTO } from "./dto";
import { Auth } from "decorators/auth.decorator";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";
import { ApiUpload } from "decorators/api-upload.decorator";

@Controller()
@ApiTags('CompanyEmployee')
export class CompanyEmployeeController {
  constructor(private readonly companyEmployeeService: CompanyEmployeeService) {} 
  
  @MethodGet('/api/company_employees')
  @Auth()
  @ApiBearerAuth('BearerAuth')
  @ApiNestedQuery('company_employees', FilterCompanyEmployeeRequest)
  @ApiNestedQuery('companies', FilterCompanyRequest)
  filter(@Query() queries: FilterCompanyEmployeeRequestDTO): Promise<FilterCompanyEmployeeResponseDTO> {
    return this.companyEmployeeService.filter(queries);
  }   

  @MethodGet('/api/company_employees/:id')
  show(@Param() params: ShowCompanyEmployeeParamsDTO, @Query() queries: ShowCompanyEmployeeRequestDTO): Promise<ShowCompanyEmployeeResponseDTO> {
    return this.companyEmployeeService.show(params, queries);
  }   

  @MethodPost('/api/company_employees')
  @ApiUpload()
  create(@Body() request: CreateCompanyEmployeeRequestDTO): Promise<CreateCompanyEmployeeResponseDTO> {
    return this.companyEmployeeService.create(request);
  }   

  @MethodPut('/api/company_employees/:id')
  @ApiUpload()
  update(@Param() params: UpdateCompanyEmployeeParamsDTO, @Body() request: UpdateCompanyEmployeeRequestDTO): Promise<UpdateCompanyEmployeeResponseDTO> {
    return this.companyEmployeeService.update(params, request);
  }   

  @MethodDelete('/api/company_employees/:id')
  delete(@Param() params: DeleteCompanyEmployeeParamsDTO, @Body() request: DeleteCompanyEmployeeRequestDTO): Promise<DeleteCompanyEmployeeResponseDTO> {
    return this.companyEmployeeService.delete(params, request);
  }   
}
