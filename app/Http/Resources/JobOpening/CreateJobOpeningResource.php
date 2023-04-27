<?php

namespace App\Http\Resources\JobOpening;

use App\Http\Resources\BaseJsonResource;
use Illuminate\Http\Request;

class CreateJobOpeningResource extends BaseJsonResource
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'job_opening';

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
            'deployment' => $this->department,
            'position' => $this->position,
            'occupation_type_id' => $this->occupation_type_id,
            'location_id' => $this->location_id,
            'income_range_id' => $this->income_range_id,
            'job_description' => $this->job_description,
            'is_remote_available' => $this->is_remote_available,
            'employment_status_id' => $this->employment_status_id,
            'company_id' => $this->company_id,
            'trial_period' => $this->trial_period,
            'working_hours' => $this->working_hours,
            'avg_overtime_hours' => $this->avg_overtime_hours,
            'trial_period_conditions' => $this->trial_period_conditions,
            'workplace' => $this->workplace,
            'qualification' => $this->qualification,
            'benefits' => $this->benefits,
            'bonus' => $this->bonus,
            'vacation' => $this->vacation,
            'promotion' => $this->promotion,
            'appeal_point' => $this->appeal_point,
            'passive_smoking_countermeasure_id' => $this->passive_smoking_countermeasure_id,
            'career_direction_id' => $this->career_direction_id,
            'job_title_id' => $this->job_title_id,
            'job_opening_id' => $this->job_opening_id,
            'job_applications' => $this->jobApplications->map(function ($jobApplication) {
                return [
                    'id' => $jobApplication->id,
                    'created_at' => $jobApplication->created_at,
                    'updated_at' => $jobApplication->updated_at,
                    'applicant_id' => $jobApplication->applicant_id,
                    'job_opening_id' => $jobApplication->job_opening_id,
                    'status' => $jobApplication->status,

                ];
            }),
            'job_opening_favorites' => $this->jobOpeningFavorites->map(function ($jobOpeningFavorite) {
                return [
                    'id' => $jobOpeningFavorite->id,
                    'created_at' => $jobOpeningFavorite->created_at,
                    'updated_at' => $jobOpeningFavorite->updated_at,
                    'job_opening_id' => $jobOpeningFavorite->job_opening_id,

                ];
            }),
            'job_opening_valued_competencies' => $this->jobOpeningValuedCompetencies->map(function ($jobOpeningValuedCompetency) {
                return [
                    'id' => $jobOpeningValuedCompetency->id,
                    'created_at' => $jobOpeningValuedCompetency->created_at,
                    'updated_at' => $jobOpeningValuedCompetency->updated_at,
                    'job_opening_id' => $jobOpeningValuedCompetency->job_opening_id,
                    'valued_competency_id' => $jobOpeningValuedCompetency->valued_competency_id,

                ];
            }),
            'future_career_path' => $this->future_career_path,
            'trending_keywords' => $this->trending_keywords,
            'business_trip_availability' => $this->business_trip_availability,
            'transfers' => $this->transfers,
            'publication_start_date' => $this->publication_start_date,
            'publication_end_date' => $this->publication_end_date,
            'slug' => $this->slug,
            'image' => $this->image,
            'status' => $this->status,
            'pv' => $this->pv,
            'job_title' => [
                'id' => $this->jobTitle->id,
                'created_at' => $this->jobTitle->created_at,
                'updated_at' => $this->jobTitle->updated_at,
                'name' => $this->jobTitle->name,
                'job_group_id' => $this->jobTitle->job_group_id,

            ],

        ];
    }
}
