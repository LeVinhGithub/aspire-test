
import { Controller, Query, Get as MethodGet, Param, Body, Post as MethodPost, Put as MethodPut, Delete as MethodDelete } from "@nestjs/common";
import { CompanyUserService } from "./company-users.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterCompanyUserResponseDTO, FilterCompanyUserRequestDTO, FilterCompanyUserRequest, ShowCompanyUserResponseDTO, ShowCompanyUserParamsDTO, ShowCompanyUserRequestDTO, CreateCompanyUserResponseDTO, CreateCompanyUserRequestDTO, UpdateCompanyUserResponseDTO, UpdateCompanyUserParamsDTO, UpdateCompanyUserRequestDTO, DeleteCompanyUserResponseDTO, DeleteCompanyUserParamsDTO, DeleteCompanyUserRequestDTO } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";
import { ApiUpload } from "decorators/api-upload.decorator";

@Controller()
@ApiTags('CompanyUser')
export class CompanyUserController {
  constructor(private readonly companyUserService: CompanyUserService) {} 
  
  @MethodGet('/api/company_users')
  @ApiNestedQuery('company_users', FilterCompanyUserRequest)
  filter(@Query() queries: FilterCompanyUserRequestDTO): Promise<FilterCompanyUserResponseDTO> {
    return this.companyUserService.filter(queries);
  }   

  @MethodGet('/api/company_users/:id')
  show(@Param() params: ShowCompanyUserParamsDTO, @Query() queries: ShowCompanyUserRequestDTO): Promise<ShowCompanyUserResponseDTO> {
    return this.companyUserService.show(params, queries);
  }   

  @MethodPost('/api/company_users')
  @ApiUpload()
  create(@Body() request: CreateCompanyUserRequestDTO): Promise<CreateCompanyUserResponseDTO> {
    return this.companyUserService.create(request);
  }   

  @MethodPut('/api/company_users/:id')
  @ApiUpload()
  update(@Param() params: UpdateCompanyUserParamsDTO, @Body() request: UpdateCompanyUserRequestDTO): Promise<UpdateCompanyUserResponseDTO> {
    return this.companyUserService.update(params, request);
  }   

  @MethodDelete('/api/company_users/:id')
  delete(@Param() params: DeleteCompanyUserParamsDTO, @Body() request: DeleteCompanyUserRequestDTO): Promise<DeleteCompanyUserResponseDTO> {
    return this.companyUserService.delete(params, request);
  }   
}
