<?php

namespace App\Http\Resources\TargetListApplicant;

use App\Http\Resources\BaseJsonResource;
use Illuminate\Http\Request;

class CreateTargetListApplicantResource extends BaseJsonResource
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'target_list_applicant';

    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request): array
    {
        return  [
            'id' => $this->id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'target_list_id' => $this->target_list_id,
            'target_list' => [
                'id' => $this->targetList->id,
                'created_at' => $this->targetList->created_at,
                'updated_at' => $this->targetList->updated_at,
                'title' => $this->targetList->title,
                'company_id' => $this->targetList->company_id,

            ],
            'applicant_id' => $this->applicant_id,
            'applicant' => [
                'id' => $this->applicant->id,
                'created_at' => $this->applicant->created_at,
                'updated_at' => $this->applicant->updated_at,
                'full_name' => $this->applicant->full_name,
                'furigana' => $this->applicant->furigana,
                'phone_number' => $this->applicant->phone_number,
                'birthdate' => $this->applicant->birthdate,
                'location_id' => $this->applicant->location_id,
                'address' => $this->applicant->address,
                'income_range_id' => $this->applicant->income_range_id,
                'availability' => $this->applicant->availability,
                'resume_file' => $this->applicant->resume_file,
                'description' => $this->applicant->description,
                'management_experience_id' => $this->applicant->management_experience_id,
                'email' => $this->applicant->email,
                'gender' => $this->applicant->gender,
                'is_onboarded' => $this->applicant->is_onboarded,
                'notes' => $this->applicant->notes,
                'current_company_name' => $this->applicant->current_company_name,
                'current_company_department' => $this->applicant->current_company_department,
                'current_company_position' => $this->applicant->current_company_position,
                'confirmation_email_resent_count' => $this->applicant->confirmation_email_resent_count,
                'number_of_companies' => $this->applicant->number_of_companies,
                'is_suspended' => $this->applicant->is_suspended,

            ],

        ];
    }
}
