<?php

namespace App\Http\Resources\Company;

use App\Http\Resources\BaseJsonResource;
use Illuminate\Http\Request;

class UpdateCompanyResource extends BaseJsonResource
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'company';

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
            'name' => $this->name,
            'company_users' => $this->companyUsers->map(function ($companyUser) {
                return [
                    'id' => $companyUser->id,
                    'created_at' => $companyUser->created_at,
                    'updated_at' => $companyUser->updated_at,
                    'company_id' => $companyUser->company_id,
                    'full_name' => $companyUser->full_name,
                    'position' => $companyUser->position,
                    'photo' => $companyUser->photo,
                    'email' => $companyUser->email,
                    'role' => $companyUser->role,

                ];
            }),
            'company_id' => $this->company_id,
            'logo' => $this->logo,
            'location' => $this->location,
            'launched_year' => $this->launched_year,
            'business_details' => $this->business_details,
            'number_of_employees' => $this->number_of_employees,
            'industry_id' => $this->industry_id,
            'mission' => $this->mission,
            'vision' => $this->vision,
            'representative_photo' => $this->representative_photo,
            'representative_profile' => $this->representative_profile,
            'ipo' => $this->listing_classification,
            'value' => $this->value,
            'job_openings' => $this->jobOpenings->map(function ($jobOpening) {
                return [
                    'id' => $jobOpening->id,
                    'created_at' => $jobOpening->created_at,
                    'updated_at' => $jobOpening->updated_at,
                    'deployment' => $jobOpening->department,
                    'position' => $jobOpening->position,
                    'occupation_type_id' => $jobOpening->occupation_type_id,
                    'location_id' => $jobOpening->location_id,
                    'income_range_id' => $jobOpening->income_range_id,
                    'job_description' => $jobOpening->job_description,
                    'is_remote_available' => $jobOpening->is_remote_available,
                    'employment_status_id' => $jobOpening->employment_status_id,
                    'company_id' => $jobOpening->company_id,
                    'trial_period' => $jobOpening->trial_period,
                    'working_hours' => $jobOpening->working_hours,
                    'avg_overtime_hours' => $jobOpening->avg_overtime_hours,
                    'trial_period_conditions' => $jobOpening->trial_period_conditions,
                    'workplace' => $jobOpening->workplace,
                    'qualification' => $jobOpening->qualification,
                    'benefits' => $jobOpening->benefits,
                    'vacation' => $jobOpening->vacation,
                    'bonus' => $jobOpening->bonus,
                    'promotion' => $jobOpening->promotion,
                    'appeal_point' => $jobOpening->appeal_point,
                    'passive_smoking_countermeasure_id' => $jobOpening->passive_smoking_countermeasure_id,
                    'career_direction_id' => $jobOpening->career_direction_id,
                    'job_title_id' => $jobOpening->job_title_id,
                    'job_applications' => $jobOpening->jobApplications->map(function ($jobApplication) {
                        return [
                            'id' => $jobApplication->id,
                            'created_at' => $jobApplication->created_at,
                            'updated_at' => $jobApplication->updated_at,
                            'applicant_id' => $jobApplication->applicant_id,
                            'job_opening_id' => $jobApplication->job_opening_id,
                            'status' => $jobApplication->status,

                        ];
                    }),
                    'job_opening_favorites' => $jobOpening->jobOpeningFavorites->map(function ($jobOpeningFavorite) {
                        return [
                            'id' => $jobOpeningFavorite->id,
                            'created_at' => $jobOpeningFavorite->created_at,
                            'updated_at' => $jobOpeningFavorite->updated_at,
                            'job_opening_id' => $jobOpeningFavorite->job_opening_id,
                            'applicant_id' => $jobOpeningFavorite->applicant_id,

                        ];
                    }),
                    'job_opening_valued_competencies' => $jobOpening->jobOpeningValuedCompetencies->map(function ($jobOpeningValuedCompetency) {
                        return [
                            'id' => $jobOpeningValuedCompetency->id,
                            'created_at' => $jobOpeningValuedCompetency->created_at,
                            'updated_at' => $jobOpeningValuedCompetency->updated_at,
                            'job_opening_id' => $jobOpeningValuedCompetency->job_opening_id,
                            'valued_competency_id' => $jobOpeningValuedCompetency->valued_competency_id,

                        ];
                    }),
                    'future_career_path' => $jobOpening->future_career_path,
                    'trending_keywords' => $jobOpening->trending_keywords,
                    'business_trip_availability' => $jobOpening->business_trip_availability,
                    'transfers' => $jobOpening->transfers,
                    'publication_start_date' => $jobOpening->publication_start_date,
                    'publication_end_date' => $jobOpening->publication_end_date,
                    'slug' => $jobOpening->slug,
                    'image' => $jobOpening->image,

                ];
            }),
            'representative_name' => $this->representative_name,
            'messages' => $this->messages->map(function ($message) {
                return [
                    'id' => $message->id,
                    'created_at' => $message->created_at,
                    'updated_at' => $message->updated_at,
                    'applicant_id' => $message->applicant_id,
                    'text' => $message->text,
                    'attachment' => $message->attachment,
                    'reply_to_message_id' => $message->reply_to_message_id,
                    'company_id' => $message->company_id,
                    'company' => [
                        'id' => $message->company->id,
                        'created_at' => $message->company->created_at,
                        'updated_at' => $message->company->updated_at,
                        'name' => $message->company->name,
                        'logo' => $message->company->logo,
                        'location' => $message->company->location,
                        'launched_year' => $message->company->launched_year,
                        'business_details' => $message->company->business_details,
                        'number_of_employees' => $message->company->number_of_employees,
                        'industry_id' => $message->company->industry_id,
                        'mission' => $message->company->mission,
                        'vision' => $message->company->vision,
                        'value' => $message->company->value,
                        'representative_photo' => $message->company->representative_photo,
                        'representative_profile' => $message->company->representative_profile,
                        'ipo' => $message->company->listing_classification,
                        'representative_name' => $message->company->representative_name,
                        'slug' => $message->company->slug,
                        'industry' => [
                            'id' => $message->company->industry->id,
                            'created_at' => $message->company->industry->created_at,
                            'updated_at' => $message->company->industry->updated_at,
                            'name' => $message->company->industry->name,
                            'companies' => $message->companies->map(function ($company) {
                                return [
                                    'id' => $company->id,
                                    'created_at' => $company->created_at,
                                    'updated_at' => $company->updated_at,
                                    'name' => $company->name,
                                    'logo' => $company->logo,
                                    'location' => $company->location,
                                    'launched_year' => $company->launched_year,
                                    'business_details' => $company->business_details,
                                    'number_of_employees' => $company->number_of_employees,
                                    'industry_id' => $company->industry_id,
                                    'mission' => $company->mission,
                                    'vision' => $company->vision,
                                    'value' => $company->value,
                                    'representative_photo' => $company->representative_photo,
                                    'representative_profile' => $company->representative_profile,
                                    'ipo' => $company->listing_classification,
                                    'representative_name' => $company->representative_name,
                                    'slug' => $company->slug,
                                    'messages' => $company->messages->map(function ($message) {
                                        return [
                                            'id' => $message->id,
                                            'created_at' => $message->created_at,
                                            'updated_at' => $message->updated_at,
                                            'applicant_id' => $message->applicant_id,
                                            'text' => $message->text,
                                            'attachment' => $message->attachment,
                                            'reply_to_message_id' => $message->reply_to_message_id,
                                            'company_id' => $message->company_id,
                                            'company' => [
                                                'id' => $message->company->id,
                                                'created_at' => $message->company->created_at,
                                                'updated_at' => $message->company->updated_at,
                                                'name' => $message->company->name,
                                                'logo' => $message->company->logo,
                                                'location' => $message->company->location,
                                                'launched_year' => $message->company->launched_year,
                                                'business_details' => $message->company->business_details,
                                                'number_of_employees' => $message->company->number_of_employees,
                                                'industry_id' => $message->company->industry_id,
                                                'mission' => $message->company->mission,
                                                'vision' => $message->company->vision,
                                                'value' => $message->company->value,
                                                'representative_photo' => $message->company->representative_photo,
                                                'representative_profile' => $message->company->representative_profile,
                                                'ipo' => $message->company->listing_classification,
                                                'representative_name' => $message->company->representative_name,
                                                'slug' => $message->company->slug,
                                                'company_employees' => $message->companyEmployees->map(function ($companyEmployee) {
                                                    return [
                                                        'id' => $companyEmployee->id,
                                                        'created_at' => $companyEmployee->created_at,
                                                        'updated_at' => $companyEmployee->updated_at,
                                                        'company_id' => $companyEmployee->company_id,

                                                    ];
                                                }),

                                            ],

                                        ];
                                    }),
                                    'company_employees' => $company->companyEmployees->map(function ($companyEmployee) {
                                        return [
                                            'id' => $companyEmployee->id,
                                            'created_at' => $companyEmployee->created_at,
                                            'updated_at' => $companyEmployee->updated_at,
                                            'company_id' => $companyEmployee->company_id,

                                        ];
                                    }),

                                ];
                            }),

                        ],
                        'messages' => $message->messages->map(function ($message) {
                            return [
                                'id' => $message->id,
                                'created_at' => $message->created_at,
                                'updated_at' => $message->updated_at,
                                'applicant_id' => $message->applicant_id,
                                'text' => $message->text,
                                'attachment' => $message->attachment,
                                'reply_to_message_id' => $message->reply_to_message_id,
                                'company_id' => $message->company_id,
                                'company' => [
                                    'id' => $message->company->id,
                                    'created_at' => $message->company->created_at,
                                    'updated_at' => $message->company->updated_at,
                                    'name' => $message->company->name,
                                    'logo' => $message->company->logo,
                                    'location' => $message->company->location,
                                    'launched_year' => $message->company->launched_year,
                                    'business_details' => $message->company->business_details,
                                    'number_of_employees' => $message->company->number_of_employees,
                                    'industry_id' => $message->company->industry_id,
                                    'mission' => $message->company->mission,
                                    'vision' => $message->company->vision,
                                    'value' => $message->company->value,
                                    'representative_photo' => $message->company->representative_photo,
                                    'representative_profile' => $message->company->representative_profile,
                                    'ipo' => $message->company->listing_classification,
                                    'representative_name' => $message->company->representative_name,
                                    'slug' => $message->company->slug,
                                    'company_employees' => $message->companyEmployees->map(function ($companyEmployee) {
                                        return [
                                            'id' => $companyEmployee->id,
                                            'created_at' => $companyEmployee->created_at,
                                            'updated_at' => $companyEmployee->updated_at,
                                            'company_id' => $companyEmployee->company_id,

                                        ];
                                    }),

                                ],

                            ];
                        }),
                        'company_employees' => $message->companyEmployees->map(function ($companyEmployee) {
                            return [
                                'id' => $companyEmployee->id,
                                'created_at' => $companyEmployee->created_at,
                                'updated_at' => $companyEmployee->updated_at,
                                'company_id' => $companyEmployee->company_id,

                            ];
                        }),

                    ],

                ];
            }),
            'slug' => $this->slug,
            'restrictions' => $this->restrictions->map(function ($restriction) {
                return [
                    'id' => $restriction->id,
                    'created_at' => $restriction->created_at,
                    'updated_at' => $restriction->updated_at,
                    'company_id' => $restriction->company_id,
                    'applicant_id' => $restriction->applicant_id,
                    'reason' => $restriction->reason,

                ];
            }),
            'industry' => [
                'id' => $this->industry->id,
                'created_at' => $this->industry->created_at,
                'updated_at' => $this->industry->updated_at,
                'name' => $this->industry->name,
                'companies' => $this->companies->map(function ($company) {
                    return [
                        'id' => $company->id,
                        'created_at' => $company->created_at,
                        'updated_at' => $company->updated_at,
                        'name' => $company->name,
                        'logo' => $company->logo,
                        'location' => $company->location,
                        'launched_year' => $company->launched_year,
                        'business_details' => $company->business_details,
                        'number_of_employees' => $company->number_of_employees,
                        'industry_id' => $company->industry_id,
                        'mission' => $company->mission,
                        'vision' => $company->vision,
                        'value' => $company->value,
                        'representative_photo' => $company->representative_photo,
                        'representative_profile' => $company->representative_profile,
                        'ipo' => $company->listing_classification,
                        'representative_name' => $company->representative_name,
                        'slug' => $company->slug,
                        'messages' => $company->messages->map(function ($message) {
                            return [
                                'id' => $message->id,
                                'created_at' => $message->created_at,
                                'updated_at' => $message->updated_at,
                                'applicant_id' => $message->applicant_id,
                                'text' => $message->text,
                                'attachment' => $message->attachment,
                                'reply_to_message_id' => $message->reply_to_message_id,
                                'company_id' => $message->company_id,
                                'company' => [
                                    'id' => $message->company->id,
                                    'created_at' => $message->company->created_at,
                                    'updated_at' => $message->company->updated_at,
                                    'name' => $message->company->name,
                                    'logo' => $message->company->logo,
                                    'location' => $message->company->location,
                                    'launched_year' => $message->company->launched_year,
                                    'business_details' => $message->company->business_details,
                                    'number_of_employees' => $message->company->number_of_employees,
                                    'industry_id' => $message->company->industry_id,
                                    'mission' => $message->company->mission,
                                    'vision' => $message->company->vision,
                                    'value' => $message->company->value,
                                    'representative_photo' => $message->company->representative_photo,
                                    'representative_profile' => $message->company->representative_profile,
                                    'ipo' => $message->company->listing_classification,
                                    'representative_name' => $message->company->representative_name,
                                    'slug' => $message->company->slug,
                                    'company_employees' => $message->companyEmployees->map(function ($companyEmployee) {
                                        return [
                                            'id' => $companyEmployee->id,
                                            'created_at' => $companyEmployee->created_at,
                                            'updated_at' => $companyEmployee->updated_at,
                                            'company_id' => $companyEmployee->company_id,

                                        ];
                                    }),

                                ],

                            ];
                        }),
                        'company_employees' => $company->companyEmployees->map(function ($companyEmployee) {
                            return [
                                'id' => $companyEmployee->id,
                                'created_at' => $companyEmployee->created_at,
                                'updated_at' => $companyEmployee->updated_at,
                                'company_id' => $companyEmployee->company_id,

                            ];
                        }),

                    ];
                }),

            ],
            'image' => $this->image,
            'capital' => $this->capital,
            'company_employees' => $this->companyEmployees->map(function ($companyEmployee) {
                return [
                    'id' => $companyEmployee->id,
                    'created_at' => $companyEmployee->created_at,
                    'updated_at' => $companyEmployee->updated_at,
                    'company_id' => $companyEmployee->company_id,
                    'full_name' => $companyEmployee->full_name,
                    'profile' => $companyEmployee->profile,
                    'photo' => $companyEmployee->photo,
                    'is_high_rank_employee' => $companyEmployee->is_high_rank_employee,

                ];
            }),
            'business_id' => $this->business_id,
            'name_furigana' => $this->name_furigana,

        ];
    }
}
