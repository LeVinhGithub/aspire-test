<?php

namespace App\Http\Resources\CareerDirectionGroup;

use App\Http\Resources\BaseJsonCollection;

class FilterCareerDirectionGroupCollection extends BaseJsonCollection
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'career_direction_groups';

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
                'career_directions' => $item->careerDirections->map(function ($careerDirection) {
                    return [
                        'id' => $careerDirection->id,
                        'created_at' => $careerDirection->created_at,
                        'updated_at' => $careerDirection->updated_at,
                        'job_openings' => $careerDirection->jobOpenings->map(function ($jobOpening) {
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
                                        'approached_by_scout' => $jobApplication->approached_by_scout,

                                    ];
                                }),
                                'job_opening_favorites' => $jobOpening->jobOpeningFavorites->map(function ($jobOpeningFavorite) {
                                    return [
                                        'id' => $jobOpeningFavorite->id,
                                        'created_at' => $jobOpeningFavorite->created_at,
                                        'updated_at' => $jobOpeningFavorite->updated_at,
                                        'job_opening_id' => $jobOpeningFavorite->job_opening_id,

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
                                'slug' => $jobOpening->slug,
                                'image' => $jobOpening->image,
                                'is_recommended' => $jobOpening->is_recommended,
                                'future_career_path' => $jobOpening->future_career_path,
                                'publication_start_date' => $jobOpening->publication_start_date,
                                'trending_keywords' => $jobOpening->trending_keywords,
                                'publication_end_date' => $jobOpening->publication_end_date,
                                'business_trip_availability' => $jobOpening->business_trip_availability,
                                'transfers' => $jobOpening->transfers,

                            ];
                        }),
                        'career_direction_group_id' => $careerDirection->career_direction_group_id,
                        'name' => $careerDirection->name,
                        'career_direction_group' => [
                            'id' => $careerDirection->careerDirectionGroup->id,
                            'created_at' => $careerDirection->careerDirectionGroup->created_at,
                            'updated_at' => $careerDirection->careerDirectionGroup->updated_at,
                            'name' => $careerDirection->careerDirectionGroup->name,

                        ],

                    ];
                }),
                'career_direction_group_id' => $item->career_direction_group_id,
                'name' => $item->name,

            ];
        });
    }
}
