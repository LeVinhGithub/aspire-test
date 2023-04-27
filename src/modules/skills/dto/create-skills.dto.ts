
import { Skill, SkillTypeEnum as SkillSkillTypeEnum } from "entities/skills";
import { StringField, NumberField, EnumFieldOptional, ObjectField } from "src/decorators/field.decorator";

export class CreateSkillRequest {
  @StringField({ maxLength: 255, minLength: 0})
  name: string;
@NumberField({ int: true})
  applicant_id: number;
@EnumFieldOptional(() => SkillSkillTypeEnum)
  skill_type?: SkillSkillTypeEnum;

}
export class CreateSkillRequestDTO {
  @ObjectField(CreateSkillRequest)
  skills: CreateSkillRequest;

}
export class CreateSkillResponse {
  id: number;
created_at: Date;
updated_at: Date;
name: string;
applicant_id: number;

}
export class CreateErrorObjectResponse {
  
}

export class CreateSkillResponseDTO {
  
  skill: CreateSkillResponse
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
