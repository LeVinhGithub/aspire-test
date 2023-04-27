
import { Message } from "entities/messages";
import { NumberField } from "src/decorators/field.decorator";
import { StorageFile } from "entities/storage_files";
import { ListingClassificationEnum as CompanyListingClassificationEnum } from "entities/companies";

export class ShowMessageParamsDTO {
  @NumberField({ int: true})
  id: number;

}
export class CompanyMessageCompanyShowMessageResponse {
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
export class MessageCompanyShowMessageResponse {
  id: number;
created_at: Date;
updated_at: Date;
applicant_id: number;
text: string;
attachment: StorageFile;
reply_to_message_id: number;
company_id: number;
company: CompanyMessageCompanyShowMessageResponse;

}
export class CompanyShowMessageResponse {
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
messages: MessageCompanyShowMessageResponse[];
image: StorageFile;
capital: string;

}
export class ShowMessageResponse {
  id: number;
created_at: Date;
updated_at: Date;
applicant_id: number;
text: string;
attachment: StorageFile;
reply_to_message_id: number;
company_id: number;
company: CompanyShowMessageResponse;

}

export class ShowMessageResponseDTO {
  
  message: ShowMessageResponse
  
  
  constructor(
    message: Message,
      ) {
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
      }
  }
