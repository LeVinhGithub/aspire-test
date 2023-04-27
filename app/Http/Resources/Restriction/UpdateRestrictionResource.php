<?php

namespace App\Http\Resources\Restriction;

use App\Http\Resources\BaseJsonResource;
use Illuminate\Http\Request;

class UpdateRestrictionResource extends BaseJsonResource
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'restriction';

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
                'ipo' => $this->company->listing_classification,
                'representative_name' => $this->company->representative_name,
                'slug' => $this->company->slug,
                'image' => $this->company->image,
                'capital' => $this->company->capital,

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
                'restrictions' => $this->restrictions->map(function ($restriction) {
                    return [
                        'id' => $restriction->id,
                        'created_at' => $restriction->created_at,
                        'updated_at' => $restriction->updated_at,
                        'company_id' => $restriction->company_id,
                        'applicant_id' => $restriction->applicant_id,
                        'applicant' => [
                            'id' => $restriction->applicant->id,
                            'created_at' => $restriction->applicant->created_at,
                            'updated_at' => $restriction->applicant->updated_at,
                            'full_name' => $restriction->applicant->full_name,
                            'furigana' => $restriction->applicant->furigana,
                            'phone_number' => $restriction->applicant->phone_number,
                            'birthdate' => $restriction->applicant->birthdate,
                            'location_id' => $restriction->applicant->location_id,
                            'address' => $restriction->applicant->address,
                            'income_range_id' => $restriction->applicant->income_range_id,
                            'availability' => $restriction->applicant->availability,
                            'resume_file' => $restriction->applicant->resume_file,
                            'description' => $restriction->applicant->description,
                            'management_experience_id' => $restriction->applicant->management_experience_id,
                            'email' => $restriction->applicant->email,
                            'gender' => $restriction->applicant->gender,
                            'restrictions' => $restriction->restrictions->map(function ($restriction) {
                                return [
                                    'id' => $restriction->id,
                                    'created_at' => $restriction->created_at,
                                    'updated_at' => $restriction->updated_at,
                                    'company_id' => $restriction->company_id,
                                    'applicant_id' => $restriction->applicant_id,

                                ];
                            }),

                        ],

                    ];
                }),

            ],
            'reason' => $this->reason,

        ];
    }
}
