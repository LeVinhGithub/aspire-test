
import { Controller, Query, Get as MethodGet, Param, Body, Post as MethodPost, Put as MethodPut, Delete as MethodDelete } from "@nestjs/common";
import { CompanyService } from "./companies.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterCompanyResponseDTO, FilterCompanyRequestDTO, FilterCompanyRequest, FilterRestrictionRequest, FilterMessageRequest, FilterCompanyEmployeeRequest, ShowCompanyResponseDTO, ShowCompanyParamsDTO, ShowCompanyRequestDTO, CreateCompanyResponseDTO, CreateCompanyRequestDTO, UpdateCompanyResponseDTO, UpdateCompanyParamsDTO, UpdateCompanyRequestDTO, DeleteCompanyResponseDTO, DeleteCompanyParamsDTO, DeleteCompanyRequestDTO } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";
import { ApiUpload } from "decorators/api-upload.decorator";

@Controller()
@ApiTags('Company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {} 
  
  @MethodGet('/api/companies')
  @ApiNestedQuery('companies', FilterCompanyRequest)
  @ApiNestedQuery('restrictions', FilterRestrictionRequest)
  @ApiNestedQuery('messages', FilterMessageRequest)
  @ApiNestedQuery('company_employees', FilterCompanyEmployeeRequest)
  filter(@Query() queries: FilterCompanyRequestDTO): Promise<FilterCompanyResponseDTO> {
    return this.companyService.filter(queries);
  }   

  @MethodGet('/api/companies/:id')
  show(@Param() params: ShowCompanyParamsDTO, @Query() queries: ShowCompanyRequestDTO): Promise<ShowCompanyResponseDTO> {
    return this.companyService.show(params, queries);
  }   

  @MethodPost('/api/companies')
  @ApiUpload()
  create(@Body() request: CreateCompanyRequestDTO): Promise<CreateCompanyResponseDTO> {
    return this.companyService.create(request);
  }   

  @MethodPut('/api/companies/:id')
  @ApiUpload()
  update(@Param() params: UpdateCompanyParamsDTO, @Body() request: UpdateCompanyRequestDTO): Promise<UpdateCompanyResponseDTO> {
    return this.companyService.update(params, request);
  }   

  @MethodDelete('/api/companies/:id')
  delete(@Param() params: DeleteCompanyParamsDTO, @Body() request: DeleteCompanyRequestDTO): Promise<DeleteCompanyResponseDTO> {
    return this.companyService.delete(params, request);
  }   
}
