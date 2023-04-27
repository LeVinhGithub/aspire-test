<?php

namespace App\Http\Resources\JobOpening;

use App\Http\Resources\BaseJsonCollection;

class FilterJobOpeningCollection extends BaseJsonCollection
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'job_openings';

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
                'deployment' => $item->department,
                'position' => $item->position,
                'occupation_type_id' => $item->occupation_type_id,
                'location_id' => $item->location_id,
                'income_range_id' => $item->income_range_id,
                'job_description' => $item->job_description,
                'is_remote_available' => $item->is_remote_available,
                'employment_status_id' => $item->employment_status_id,
                'company_id' => $item->company_id,
                'trial_period' => $item->trial_period,
                'working_hours' => $item->working_hours,
                'avg_overtime_hours' => $item->avg_overtime_hours,
                'trial_period_conditions' => $item->trial_period_conditions,
                'workplace' => $item->workplace,
                'qualification' => $item->qualification,
                'benefits' => $item->benefits,
                'bonus' => $item->bonus,
                'vacation' => $item->vacation,
                'promotion' => $item->promotion,
                'appeal_point' => $item->appeal_point,
                'passive_smoking_countermeasure_id' => $item->passive_smoking_countermeasure_id,
                'career_direction_id' => $item->career_direction_id,
                'job_title_id' => $item->job_title_id,
                'job_opening_id' => $item->job_opening_id,
                'job_applications' => $item->jobApplications->map(function ($jobApplication) {
                    return [
                        'id' => $jobApplication->id,
                        'created_at' => $jobApplication->created_at,
                        'updated_at' => $jobApplication->updated_at,
                        'applicant_id' => $jobApplication->applicant_id,
                        'job_opening_id' => $jobApplication->job_opening_id,
                        'status' => $jobApplication->status,

                    ];
                }),
                'job_opening_favorites' => $item->jobOpeningFavorites->map(function ($jobOpeningFavorite) {
                    return [
                        'id' => $jobOpeningFavorite->id,
                        'created_at' => $jobOpeningFavorite->created_at,
                        'updated_at' => $jobOpeningFavorite->updated_at,
                        'job_opening_id' => $jobOpeningFavorite->job_opening_id,

                    ];
                }),
                'job_opening_valued_competencies' => $item->jobOpeningValuedCompetencies->map(function ($jobOpeningValuedCompetency) {
                    return [
                        'id' => $jobOpeningValuedCompetency->id,
                        'created_at' => $jobOpeningValuedCompetency->created_at,
                        'updated_at' => $jobOpeningValuedCompetency->updated_at,
                        'job_opening_id' => $jobOpeningValuedCompetency->job_opening_id,
                        'valued_competency_id' => $jobOpeningValuedCompetency->valued_competency_id,

                    ];
                }),
                'future_career_path' => $item->future_career_path,
                'trending_keywords' => $item->trending_keywords,
                'business_trip_availability' => $item->business_trip_availability,
                'transfers' => $item->transfers,
                'publication_start_date' => $item->publication_start_date,
                'publication_end_date' => $item->publication_end_date,
                'slug' => $item->slug,
                'image' => $item->image,
                'company' => [

                ],
                'status' => $item->status,
                'pv' => $item->pv,
                'job_title' => [
                    'id' => $item->jobTitle->id,
                    'created_at' => $item->jobTitle->created_at,
                    'updated_at' => $item->jobTitle->updated_at,
                    'name' => $item->jobTitle->name,
                    'job_group_id' => $item->jobTitle->job_group_id,

                ],

            ];
        });
    }
}
