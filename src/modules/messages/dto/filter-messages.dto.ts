
import { Message } from "entities/messages";
import { NumberFieldOptional, StringFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";
import { StorageFile } from "entities/storage_files";
import { ListingClassificationEnum as CompanyListingClassificationEnum } from "entities/companies";

export class FilterMessageRequest {
  @NumberFieldOptional({ int: true})
  applicant_id?: number;
@StringFieldOptional({ maxLength: 1000, minLength: 0})
  text?: string;
@StringFieldOptional({})
  attachment?: string;
@NumberFieldOptional({ int: true, minimum: 1, maximum: 2147483646})
  reply_to_message_id?: number;
@NumberFieldOptional({ int: true})
  company_id?: number;

}
export class FilterMessageRequestDTO {
  @ObjectFieldOptional(FilterMessageRequest)
  messages?: FilterMessageRequest;
@NumberFieldOptional({ int: true})
  pagination_page?: number;
@NumberFieldOptional({ int: true})
  pagination_limit?: number;

}
export class CompanyMessageCompanyFilterMessageResponse {
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
ipo: `${CompanyListingClassificationEnum}`;
representative_name: string;
slug: string;

}
export class MessageCompanyFilterMessageResponse {
  id: number;
created_at: Date;
updated_at: Date;
applicant_id: number;
text: string;
attachment: StorageFile;
reply_to_message_id: number;
company_id: number;
company: CompanyMessageCompanyFilterMessageResponse;

}
export class CompanyFilterMessageResponse {
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
ipo: `${CompanyListingClassificationEnum}`;
representative_name: string;
slug: string;
messages: MessageCompanyFilterMessageResponse[];
image: StorageFile;
capital: string;

}
export class FilterMessageResponse {
  id: number;
created_at: Date;
updated_at: Date;
applicant_id: number;
text: string;
attachment: StorageFile;
reply_to_message_id: number;
company_id: number;
company: CompanyFilterMessageResponse;

}


export class FilterMessageResponseDTO {
  messages: FilterMessageResponse[];
    total_pages?: number;
    total_count: number;
  
  constructor(
    messages: (Message)[],
    total_count: number,
    total_pages?: number  ) {
    this.messages = messages.map((message) => ({
          ...message,
          id: message?.id,
created_at: message?.created_at,
updated_at: message?.updated_at,
applicant_id: message?.applicant_id,
text: message?.text,
attachment: message?.attachment,
reply_to_message_id: message?.reply_to_message_id,
company_id: message?.company_id,
company: {
            id: message?.company?.id,
created_at: message?.company?.created_at,
updated_at: message?.company?.updated_at,
name: message?.company?.name,
logo: message?.company?.logo,
location: message?.company?.location,
launched_year: message?.company?.launched_year,
business_details: message?.company?.business_details,
number_of_employees: message?.company?.number_of_employees,
industry_id: message?.company?.industry_id,
mission: message?.company?.mission,
vision: message?.company?.vision,
value: message?.company?.value,
representative_photo: message?.company?.representative_photo,
representative_profile: message?.company?.representative_profile,
ipo: message?.company?.listing_classification,
representative_name: message?.company?.representative_name,
slug: message?.company?.slug,
messages: message?.company?.messages?.map((message) => ({
            ...message,
            id: message?.id,
created_at: message?.created_at,
updated_at: message?.updated_at,
applicant_id: message?.applicant_id,
text: message?.text,
attachment: message?.attachment,
reply_to_message_id: message?.reply_to_message_id,
company_id: message?.company_id,
company: {
            id: message?.company?.id,
created_at: message?.company?.created_at,
updated_at: message?.company?.updated_at,
name: message?.company?.name,
logo: message?.company?.logo,
location: message?.company?.location,
launched_year: message?.company?.launched_year,
business_details: message?.company?.business_details,
number_of_employees: message?.company?.number_of_employees,
industry_id: message?.company?.industry_id,
mission: message?.company?.mission,
vision: message?.company?.vision,
value: message?.company?.value,
representative_photo: message?.company?.representative_photo,
representative_profile: message?.company?.representative_profile,
ipo: message?.company?.listing_classification,
representative_name: message?.company?.representative_name,
slug: message?.company?.slug
          }
          })),
image: message?.company?.image,
capital: message?.company?.capital
          }
        }));
        this.total_pages = total_pages;
        this.total_count = total_count;
  }
}
