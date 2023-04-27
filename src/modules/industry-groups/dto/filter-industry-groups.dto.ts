
import { IndustryGroup } from "entities/industry_groups";
import { StringFieldOptional, ObjectFieldOptional, NumberFieldOptional } from "src/decorators/field.decorator";

export class FilterIndustryGroupRequest {
  @StringFieldOptional({ maxLength: 255, minLength: 0})
  name?: string;

}
export class FilterIndustryGroupRequestDTO {
  @ObjectFieldOptional(FilterIndustryGroupRequest)
  industry_groups?: FilterIndustryGroupRequest;
@NumberFieldOptional({ int: true})
  pagination_page?: number;
@NumberFieldOptional({ int: true})
  pagination_limit?: number;

}
export class IndustryFilterIndustryGroupResponse {
  id: number;
created_at: Date;
updated_at: Date;
name: string;
industry_group_id: number;

}
export class FilterIndustryGroupResponse {
  id: number;
created_at: Date;
updated_at: Date;
name: string;
industries: IndustryFilterIndustryGroupResponse[];

}


export class FilterIndustryGroupResponseDTO {
  industry_groups: FilterIndustryGroupResponse[];
    total_pages?: number;
    total_count: number;
  
  constructor(
    industry_groups: (IndustryGroup)[],
    total_count: number,
    total_pages?: number  ) {
    this.industry_groups = industry_groups.map((industry_group) => ({
          ...industry_group,
          id: industry_group?.id,
created_at: industry_group?.created_at,
updated_at: industry_group?.updated_at,
name: industry_group?.name,
industries: industry_group?.industries?.map((industry) => ({
            ...industry,
            id: industry?.id,
created_at: industry?.created_at,
updated_at: industry?.updated_at,
name: industry?.name,
industry_group_id: industry?.industry_group_id
          }))
        }));
        this.total_pages = total_pages;
        this.total_count = total_count;
  }
}
