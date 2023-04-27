
import { ScoutTemplate } from "entities/scout_templates";
import { StringFieldOptional, NumberFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";

export class FilterScoutTemplateRequest {
  @StringFieldOptional({ maxLength: 255, minLength: 0})
  title?: string;
@StringFieldOptional({ maxLength: 65535, minLength: 0})
  template_text?: string;
@NumberFieldOptional({ int: true})
  company_id?: number;

}
export class FilterScoutTemplateRequestDTO {
  @ObjectFieldOptional(FilterScoutTemplateRequest)
  scout_templates?: FilterScoutTemplateRequest;
@NumberFieldOptional({ int: true})
  pagination_page?: number;
@NumberFieldOptional({ int: true})
  pagination_limit?: number;

}
export class FilterScoutTemplateResponse {
  id: number;
created_at: Date;
updated_at: Date;
title: string;
template_text: string;
company_id: number;

}


export class FilterScoutTemplateResponseDTO {
  scout_templates: FilterScoutTemplateResponse[];
    total_pages?: number;
    total_count: number;
  
  constructor(
    scout_templates: (ScoutTemplate)[],
    total_count: number,
    total_pages?: number  ) {
    this.scout_templates = scout_templates.map((scout_template) => ({
          ...scout_template,
          id: scout_template?.id,
created_at: scout_template?.created_at,
updated_at: scout_template?.updated_at,
title: scout_template?.title,
template_text: scout_template?.template_text,
company_id: scout_template?.company_id
        }));
        this.total_pages = total_pages;
        this.total_count = total_count;
  }
}
