
import { ScoutTemplate } from "entities/scout_templates";
import { NumberField, StringFieldOptional, NumberFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";

export class UpdateScoutTemplateParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class UpdateScoutTemplateRequest {
  @StringFieldOptional({ maxLength: 255, minLength: 0})
  title?: string;
@StringFieldOptional({ maxLength: 65535, minLength: 0})
  template_text?: string;
@NumberFieldOptional({ int: true})
  company_id?: number;

}
export class UpdateScoutTemplateRequestDTO {
  @ObjectFieldOptional(UpdateScoutTemplateRequest)
  scout_templates?: UpdateScoutTemplateRequest;

}
export class UpdateScoutTemplateResponse {
  id: number;
created_at: Date;
updated_at: Date;
title: string;
template_text: string;
company_id: number;

}
export class UpdateErrorObjectResponse {
  
}

export class UpdateScoutTemplateResponseDTO {
  
  scout_template: UpdateScoutTemplateResponse
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
