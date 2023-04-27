
import { Controller, Query, Get as MethodGet } from "@nestjs/common";
import { LanguageService } from "./languages.service";
import { ApiTags } from "@nestjs/swagger";
import { FilterLanguageResponseDTO, FilterLanguageRequestDTO, FilterLanguageRequest } from "./dto";
import { ApiNestedQuery } from "decorators/api-nested-query.decorator";

@Controller()
@ApiTags('Language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {} 
  
  @MethodGet('/api/languages')
  @ApiNestedQuery('languages', FilterLanguageRequest)
  filter(@Query() queries: FilterLanguageRequestDTO): Promise<FilterLanguageResponseDTO> {
    return this.languageService.filter(queries);
  }   
}
