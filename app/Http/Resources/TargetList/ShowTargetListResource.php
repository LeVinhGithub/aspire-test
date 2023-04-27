<?php

namespace App\Http\Resources\TargetList;

use App\Http\Resources\BaseJsonResource;
use Illuminate\Http\Request;

class ShowTargetListResource extends BaseJsonResource
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'target_list';

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
            'title' => $this->title,
            'company_id' => $this->company_id,
            'company' => [
                'id' => $this->company->id,
                'created_at' => $this->company->created_at,
                'updated_at' => $this->company->updated_at,
                'name' => $this->company->name,
                'logo' => $this->company->logo,
                'location' => $this->company->location,
                'launched_year' => $this->company->launched_year,
                'business_details' => $this->company->business_details,
                'number_of_employees' => $this->company->number_of_employees,
                'industry_id' => $this->company->industry_id,
                'mission' => $this->company->mission,
                'vision' => $this->company->vision,
                'value' => $this->company->value,
                'representative_photo' => $this->company->representative_photo,
                'representative_profile' => $this->company->representative_profile,
                'listing_classification' => $this->company->listing_classification,
                'representative_name' => $this->company->representative_name,
                'slug' => $this->company->slug,
                'image' => $this->company->image,
                'capital' => $this->company->capital,
                'ipo' => $this->company->ipo,
                'business_id' => $this->company->business_id,
                'name_furigana' => $this->company->name_furigana,

            ],
            'target_list_applicants' => $this->targetListApplicants->map(function ($targetListApplicant) {
                return [
                    'applicant' => [
                        'id' => $targetListApplicant->applicant->id,
                        'created_at' => $targetListApplicant->applicant->created_at,
                        'updated_at' => $targetListApplicant->applicant->updated_at,
                        'full_name' => $targetListApplicant->applicant->full_name,
                        'furigana' => $targetListApplicant->applicant->furigana,
                        'phone_number' => $targetListApplicant->applicant->phone_number,
                        'birthdate' => $targetListApplicant->applicant->birthdate,
                        'location_id' => $targetListApplicant->applicant->location_id,
                        'address' => $targetListApplicant->applicant->address,
                        'income_range_id' => $targetListApplicant->applicant->income_range_id,
                        'availability' => $targetListApplicant->applicant->availability,
                        'resume_file' => $targetListApplicant->applicant->resume_file,
                        'description' => $targetListApplicant->applicant->description,
                        'management_experience_id' => $targetListApplicant->applicant->management_experience_id,
                        'email' => $targetListApplicant->applicant->email,
                        'gender' => $targetListApplicant->applicant->gender,
                        'is_onboarded' => $targetListApplicant->applicant->is_onboarded,
                        'notes' => $targetListApplicant->applicant->notes,
                        'current_company_name' => $targetListApplicant->applicant->current_company_name,
                        'current_company_department' => $targetListApplicant->applicant->current_company_department,
                        'current_company_position' => $targetListApplicant->applicant->current_company_position,
                        'number_of_companies' => $targetListApplicant->applicant->number_of_companies,
                        'is_suspended' => $targetListApplicant->applicant->is_suspended,
                        'applicant_industries' => $targetListApplicant->applicantIndustries->map(function ($applicantIndustry) {
                            return [
                                'id' => $applicantIndustry->id,
                                'created_at' => $applicantIndustry->created_at,
                                'updated_at' => $applicantIndustry->updated_at,
                                'industry_id' => $applicantIndustry->industry_id,
                                'industry' => [
                                    'name' => $applicantIndustry->industry->name,

                                ],

                            ];
                        }),
                        'applicant_schools' => $targetListApplicant->applicantSchools->map(function ($applicantSchool) {
                            return [
                                'id' => $applicantSchool->id,
                                'created_at' => $applicantSchool->created_at,
                                'updated_at' => $applicantSchool->updated_at,
                                'graduation_date' => $applicantSchool->graduation_date,
                                'name' => $applicantSchool->name,
                                'degree' => $applicantSchool->degree,
                                'major' => $applicantSchool->major,
                                'school_type_id' => $applicantSchool->school_type_id,
                                'school_type' => [
                                    'name' => $applicantSchool->schoolType->name,

                                ],

                            ];
                        }),
                        'income_range' => [
                            'name' => $targetListApplicant->applicant->incomeRange->name,

                        ],

                    ],

                ];
            }),

        ];
    }
}
