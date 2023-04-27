
import { ScoutTemplate } from "entities/scout_templates";
import { NumberField } from "src/decorators/field.decorator";

export class ShowScoutTemplateParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class ShowScoutTemplateResponse {
  id: number;
created_at: Date;
updated_at: Date;
title: string;
template_text: string;
company_id: number;

}

export class ShowScoutTemplateResponseDTO {
  
  scout_template: ShowScoutTemplateResponse
  
  
  constructor(
    scout_template: ScoutTemplate,
      ) {
    this.scout_template = { ...scout_template, id: scout_template?.id,
created_at: scout_template?.created_at,
updated_at: scout_template?.updated_at,
title: scout_template?.title,
template_text: scout_template?.template_text,
company_id: scout_template?.company_id };
      }
  }
