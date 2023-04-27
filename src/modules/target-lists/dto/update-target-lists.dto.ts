
import { TargetList } from "entities/target_lists";
import { NumberField, StringFieldOptional, NumberFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";
import { StorageFile } from "entities/storage_files";
import { ListingClassificationEnum as CompanyListingClassificationEnum } from "entities/companies";

export class UpdateTargetListParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class UpdateTargetListRequest {
  @StringFieldOptional({ maxLength: 255, minLength: 0})
  title?: string;
@NumberFieldOptional({ int: true})
  company_id?: number;

}
export class UpdateTargetListRequestDTO {
  @ObjectFieldOptional(UpdateTargetListRequest)
  target_lists?: UpdateTargetListRequest;

}
export class CompanyUpdateTargetListResponse {
  id: number;
created_at: Date;
updated_at: Date;
name: string;
logo: StorageFile;
location: string;
launched_year: string;
business_details: string;
number_of_employees: number;
industry_id: number;
mission: string;
vision: string;
value: string;
representative_photo: StorageFile;
representative_profile: string;
listing_classification: `${CompanyListingClassificationEnum}`;
representative_name: string;
slug: string;
image: StorageFile;
capital: string;
ipo: boolean;
business_id: string;
name_furigana: string;

}
export class UpdateTargetListResponse {
  id: number;
created_at: Date;
updated_at: Date;
title: string;
company_id: number;
company: CompanyUpdateTargetListResponse;

}
export class UpdateErrorObjectResponse {
  
}

export class UpdateTargetListResponseDTO {
  
  target_list: UpdateTargetListResponse
    error_object: Object;
  
  
  constructor(
    target_list: TargetList,
    error_object?: Object  ) {
    this.target_list = { ...target_list, id: target_list?.id,
created_at: target_list?.created_at,
updated_at: target_list?.updated_at,
title: target_list?.title,
company_id: target_list?.company_id,
company: {
            id: target_list?.company?.id,
created_at: target_list?.company?.created_at,
updated_at: target_list?.company?.updated_at,
name: target_list?.company?.name,
logo: target_list?.company?.logo,
location: target_list?.company?.location,
launched_year: target_list?.company?.launched_year,
business_details: target_list?.company?.business_details,
number_of_employees: target_list?.company?.number_of_employees,
industry_id: target_list?.company?.industry_id,
mission: target_list?.company?.mission,
vision: target_list?.company?.vision,
value: target_list?.company?.value,
representative_photo: target_list?.company?.representative_photo,
representative_profile: target_list?.company?.representative_profile,
listing_classification: target_list?.company?.listing_classification,
representative_name: target_list?.company?.representative_name,
slug: target_list?.company?.slug,
image: target_list?.company?.image,
capital: target_list?.company?.capital,
ipo: target_list?.company?.ipo,
business_id: target_list?.company?.business_id,
name_furigana: target_list?.company?.name_furigana
          } };
        this.error_object = error_object;
      }
  }