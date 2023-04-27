
import { Skill, SkillTypeEnum as SkillSkillTypeEnum } from "entities/skills";
import { StringFieldOptional, NumberFieldOptional, EnumFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";

export class FilterSkillRequest {
  @StringFieldOptional({ maxLength: 255, minLength: 0})
  name?: string;
@NumberFieldOptional({ int: true})
  applicant_id?: number;
@EnumFieldOptional(() => SkillSkillTypeEnum)
  skill_type?: SkillSkillTypeEnum;

}
export class FilterSkillRequestDTO {
  @ObjectFieldOptional(FilterSkillRequest)
  skills?: FilterSkillRequest;
@NumberFieldOptional({ int: true})
  pagination_page?: number;
@NumberFieldOptional({ int: true})
  pagination_limit?: number;

}
export class FilterSkillResponse {
  id: number;
created_at: Date;
updated_at: Date;
name: string;
applicant_id: number;

}


export class FilterSkillResponseDTO {
  skills: FilterSkillResponse[];
    total_pages?: number;
    total_count: number;
  
  constructor(
    skills: (Skill)[],
    total_count: number,
    total_pages?: number  ) {
    this.skills = skills.map((skill) => ({
          ...skill,
          id: skill?.id,
created_at: skill?.created_at,
updated_at: skill?.updated_at,
name: skill?.name,
applicant_id: skill?.applicant_id
        }));
        this.total_pages = total_pages;
        this.total_count = total_count;
  }
}
