<?php

namespace App\Http\Resources\Restriction;

use App\Http\Resources\BaseJsonCollection;

class FilterRestrictionCollection extends BaseJsonCollection
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'restrictions';

    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return $this->collection->map(function ($item) {
            return [
                'id' => $item->id,
                'created_at' => $item->created_at,
                'updated_at' => $item->updated_at,
                'company_id' => $item->company_id,
                'company' => [
                    'id' => $item->company->id,
                    'created_at' => $item->company->created_at,
                    'updated_at' => $item->company->updated_at,
                    'name' => $item->company->name,
                    'logo' => $item->company->logo,
                    'location' => $item->company->location,
                    'launched_year' => $item->company->launched_year,
                    'business_details' => $item->company->business_details,
                    'number_of_employees' => $item->company->number_of_employees,
                    'industry_id' => $item->company->industry_id,
                    'mission' => $item->company->mission,
                    'vision' => $item->company->vision,
                    'value' => $item->company->value,
                    'representative_photo' => $item->company->representative_photo,
                    'representative_profile' => $item->company->representative_profile,
                    'ipo' => $item->company->listing_classification,
                    'representative_name' => $item->company->representative_name,
                    'slug' => $item->company->slug,
                    'image' => $item->company->image,
                    'capital' => $item->company->capital,

                ],
                'applicant_id' => $item->applicant_id,
                'applicant' => [
                    'id' => $item->applicant->id,
                    'created_at' => $item->applicant->created_at,
                    'updated_at' => $item->applicant->updated_at,
                    'full_name' => $item->applicant->full_name,
                    'furigana' => $item->applicant->furigana,
                    'phone_number' => $item->applicant->phone_number,
                    'birthdate' => $item->applicant->birthdate,
                    'location_id' => $item->applicant->location_id,
                    'address' => $item->applicant->address,
                    'income_range_id' => $item->applicant->income_range_id,
                    'availability' => $item->applicant->availability,
                    'resume_file' => $item->applicant->resume_file,
                    'description' => $item->applicant->description,
                    'management_experience_id' => $item->applicant->management_experience_id,
                    'email' => $item->applicant->email,
                    'gender' => $item->applicant->gender,
                    'restrictions' => $item->restrictions->map(function ($restriction) {
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
                'reason' => $item->reason,

            ];
        });
    }
}
