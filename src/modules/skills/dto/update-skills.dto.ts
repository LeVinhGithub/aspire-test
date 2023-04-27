
import { Skill, SkillTypeEnum as SkillSkillTypeEnum } from "entities/skills";
import { NumberField, StringFieldOptional, NumberFieldOptional, EnumFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";

export class UpdateSkillParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class UpdateSkillRequest {
  @StringFieldOptional({ maxLength: 255, minLength: 0})
  name?: string;
@NumberFieldOptional({ int: true})
  applicant_id?: number;
@EnumFieldOptional(() => SkillSkillTypeEnum)
  skill_type?: SkillSkillTypeEnum;

}
export class UpdateSkillRequestDTO {
  @ObjectFieldOptional(UpdateSkillRequest)
  skills?: UpdateSkillRequest;

}
export class UpdateSkillResponse {
  id: number;
created_at: Date;
updated_at: Date;
name: string;
applicant_id: number;

}
export class UpdateErrorObjectResponse {
  
}

export class UpdateSkillResponseDTO {
  
  skill: UpdateSkillResponse
    error_object: Object;
  
  
  constructor(
    skill: Skill,
    error_object?: Object  ) {
    this.skill = { ...skill, id: skill?.id,
created_at: skill?.created_at,
updated_at: skill?.updated_at,
name: skill?.name,
applicant_id: skill?.applicant_id };
        this.error_object = error_object;
      }
  }
