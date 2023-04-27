
import { ScoutTemplate } from "entities/scout_templates";
import { StringFieldOptional, NumberField, ObjectField } from "src/decorators/field.decorator";

export class CreateScoutTemplateRequest {
  @StringFieldOptional({ maxLength: 255, minLength: 0})
  title?: string;
@StringFieldOptional({ maxLength: 65535, minLength: 0})
  template_text?: string;
@NumberField({ int: true})
  company_id: number;

}
export class CreateScoutTemplateRequestDTO {
  @ObjectField(CreateScoutTemplateRequest)
  scout_templates: CreateScoutTemplateRequest;

}
export class CreateScoutTemplateResponse {
  id: number;
created_at: Date;
updated_at: Date;
title: string;
template_text: string;
company_id: number;

}
export class CreateErrorObjectResponse {
  
}

export class CreateScoutTemplateResponseDTO {
  
  scout_template: CreateScoutTemplateResponse
    error_object: Object;
  
  
  constructor(
    scout_template: ScoutTemplate,
    error_object?: Object  ) {
    this.scout_template = { ...scout_template, id: scout_template?.id,
created_at: scout_template?.created_at,
updated_at: scout_template?.updated_at,
title: scout_template?.title,
template_text: scout_template?.template_text,
company_id: scout_template?.company_id };
        this.error_object = error_object;
      }
  }
