
import { TargetListApplicant } from "entities/target_list_applicants";
import { NumberFieldOptional, ObjectField } from "src/decorators/field.decorator";
import { AvailabilityEnum as ApplicantAvailabilityEnum, GenderEnum as ApplicantGenderEnum } from "entities/applicants";
import { StorageFile } from "entities/storage_files";

export class CreateTargetListApplicantRequest {
  @NumberFieldOptional({ int: true})
  target_list_id?: number;
@NumberFieldOptional({ int: true})
  applicant_id?: number;

}
export class CreateTargetListApplicantRequestDTO {
  @ObjectField(CreateTargetListApplicantRequest)
  target_list_applicants: CreateTargetListApplicantRequest;

}
export class TargetListCreateTargetListApplicantResponse {
  id: number;
created_at: Date;
updated_at: Date;
title: string;
company_id: number;

}
export class ApplicantCreateTargetListApplicantResponse {
  id: number;
created_at: Date;
updated_at: Date;
full_name: string;
furigana: string;
phone_number: string;
birthdate: Date;
location_id: number;
address: string;
income_range_id: number;
availability: `${ApplicantAvailabilityEnum}`;
resume_file: StorageFile;
description: string;
management_experience_id: number;
email: string;
gender: `${ApplicantGenderEnum}`;
is_onboarded: boolean;
notes: string;
current_company_name: string;
current_company_department: string;
current_company_position: string;
confirmation_email_resent_count: number;
number_of_companies: number;
is_suspended: boolean;

}
export class CreateTargetListApplicantResponse {
  id: number;
created_at: Date;
updated_at: Date;
target_list_id: number;
target_list: TargetListCreateTargetListApplicantResponse;
applicant_id: number;
applicant: ApplicantCreateTargetListApplicantResponse;

}
export class CreateErrorObjectResponse {
  
}

export class CreateTargetListApplicantResponseDTO {
  
  target_list_applicant: CreateTargetListApplicantResponse
    error_object: Object;
  
  
  constructor(
    target_list_applicant: TargetListApplicant,
    error_object?: Object  ) {
    this.target_list_applicant = { ...target_list_applicant, id: target_list_applicant?.id,
created_at: target_list_applicant?.created_at,
updated_at: target_list_applicant?.updated_at,
target_list_id: target_list_applicant?.target_list_id,
target_list: {
            id: target_list_applicant?.target_list?.id,
created_at: target_list_applicant?.target_list?.created_at,
updated_at: target_list_applicant?.target_list?.updated_at,
title: target_list_applicant?.target_list?.title,
company_id: target_list_applicant?.target_list?.company_id
          },
applicant_id: target_list_applicant?.applicant_id,
applicant: {
            id: target_list_applicant?.applicant?.id,
created_at: target_list_applicant?.applicant?.created_at,
updated_at: target_list_applicant?.applicant?.updated_at,
full_name: target_list_applicant?.applicant?.full_name,
furigana: target_list_applicant?.applicant?.furigana,
phone_number: target_list_applicant?.applicant?.phone_number,
birthdate: target_list_applicant?.applicant?.birthdate,
location_id: target_list_applicant?.applicant?.location_id,
address: target_list_applicant?.applicant?.address,
income_range_id: target_list_applicant?.applicant?.income_range_id,
availability: target_list_applicant?.applicant?.availability,
resume_file: target_list_applicant?.applicant?.resume_file,
description: target_list_applicant?.applicant?.description,
management_experience_id: target_list_applicant?.applicant?.management_experience_id,
email: target_list_applicant?.applicant?.email,
gender: target_list_applicant?.applicant?.gender,
is_onboarded: target_list_applicant?.applicant?.is_onboarded,
notes: target_list_applicant?.applicant?.notes,
current_company_name: target_list_applicant?.applicant?.current_company_name,
current_company_department: target_list_applicant?.applicant?.current_company_department,
current_company_position: target_list_applicant?.applicant?.current_company_position,
confirmation_email_resent_count: target_list_applicant?.applicant?.confirmation_email_resent_count,
number_of_companies: target_list_applicant?.applicant?.number_of_companies,
is_suspended: target_list_applicant?.applicant?.is_suspended
          } };
        this.error_object = error_object;
      }
  }
