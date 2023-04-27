
import { Message } from "entities/messages";
import { NumberField, NumberFieldOptional, StringFieldOptional, FileFieldOptional, ObjectFieldOptional } from "src/decorators/field.decorator";
import { FileSystemStoredFile } from "nestjs-form-data";
import { StorageFile } from "entities/storage_files";
import { ListingClassificationEnum as CompanyListingClassificationEnum } from "entities/companies";

export class UpdateMessageParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class UpdateMessageRequest {
  @NumberFieldOptional({ int: true})
  applicant_id?: number;
@StringFieldOptional({ maxLength: 1000, minLength: 0})
  text?: string;
@FileFieldOptional({ fileSize: 10, fileTypes: ["image"]})
  attachment?: FileSystemStoredFile;
@NumberFieldOptional({ int: true, minimum: 1, maximum: 2147483646})
  reply_to_message_id?: number;
@NumberFieldOptional({ int: true})
  company_id?: number;

}
export class UpdateMessageRequestDTO {
  @ObjectFieldOptional(UpdateMessageRequest)
  messages?: UpdateMessageRequest;

}
export class CompanyMessageCompanyUpdateMessageResponse {
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
export class MessageCompanyUpdateMessageResponse {
  id: number;
created_at: Date;
updated_at: Date;
applicant_id: number;
text: string;
attachment: StorageFile;
reply_to_message_id: number;
company_id: number;
company: CompanyMessageCompanyUpdateMessageResponse;

}
export class CompanyUpdateMessageResponse {
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
messages: MessageCompanyUpdateMessageResponse[];
image: StorageFile;
capital: string;

}
export class UpdateMessageResponse {
  id: number;
created_at: Date;
updated_at: Date;
applicant_id: number;
text: string;
attachment: StorageFile;
reply_to_message_id: number;
company_id: number;
company: CompanyUpdateMessageResponse;

}
export class UpdateErrorObjectResponse {
  
}

export class UpdateMessageResponseDTO {
  
  message: UpdateMessageResponse
    error_object: Object;
  
  
  constructor(
    message: Message,
    error_object?: Object  ) {
    this.message = { ...message, id: message?.id,
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
          } };
        this.error_object = error_object;
      }
  }
