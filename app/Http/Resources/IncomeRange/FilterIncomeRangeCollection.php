<?php

namespace App\Http\Resources\IncomeRange;

use App\Http\Resources\BaseJsonCollection;

class FilterIncomeRangeCollection extends BaseJsonCollection
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'income_ranges';

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
                'income_range_id' => $item->income_range_id,
                'applicants' => $item->applicants->map(function ($applicant) {
                    return [
                        'id' => $applicant->id,
                        'created_at' => $applicant->created_at,
                        'updated_at' => $applicant->updated_at,
                        'full_name' => $applicant->full_name,
                        'furigana' => $applicant->furigana,
                        'phone_number' => $applicant->phone_number,
                        'birthdate' => $applicant->birthdate,
                        'location_id' => $applicant->location_id,
                        'address' => $applicant->address,
                        'income_range_id' => $applicant->income_range_id,
                        'applicant_languages' => $applicant->applicantLanguages->map(function ($applicantLanguage) {
                            return [
                                'id' => $applicantLanguage->id,
                                'created_at' => $applicantLanguage->created_at,
                                'updated_at' => $applicantLanguage->updated_at,
                                'proficiency' => $applicantLanguage->proficiency,
                                'language_id' => $applicantLanguage->language_id,
                                'applicant_id' => $applicantLanguage->applicant_id,

                            ];
                        }),
                        'availability' => $applicant->availability,
                        'applicant_schools' => $applicant->applicantSchools->map(function ($applicantSchool) {
                            return [
                                'id' => $applicantSchool->id,
                                'created_at' => $applicantSchool->created_at,
                                'updated_at' => $applicantSchool->updated_at,
                                'graduation_date' => $applicantSchool->graduation_date,
                                'name' => $applicantSchool->name,
                                'degree' => $applicantSchool->degree,
                                'major' => $applicantSchool->major,
                                'school_type_id' => $applicantSchool->school_type_id,
                                'applicant_id' => $applicantSchool->applicant_id,

                            ];
                        }),
                        'resume_file' => $applicant->resume_file,
                        'description' => $applicant->description,
                        'management_experience_id' => $applicant->management_experience_id,
                        'applicant_industries' => $applicant->applicantIndustries->map(function ($applicantIndustry) {
                            return [
                                'id' => $applicantIndustry->id,
                                'created_at' => $applicantIndustry->created_at,
                                'updated_at' => $applicantIndustry->updated_at,
                                'industry_id' => $applicantIndustry->industry_id,
                                'applicant_id' => $applicantIndustry->applicant_id,

                            ];
                        }),
                        'email' => $applicant->email,
                        'messages' => $applicant->messages->map(function ($message) {
                            return [
                                'id' => $message->id,
                                'created_at' => $message->created_at,
                                'updated_at' => $message->updated_at,
                                'applicant_id' => $message->applicant_id,
                                'text' => $message->text,
                                'attachment' => $message->attachment,
                                'reply_to_message_id' => $message->reply_to_message_id,
                                'company_id' => $message->company_id,

                            ];
                        }),
                        'job_applications' => $applicant->jobApplications->map(function ($jobApplication) {
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
                        'job_opening_favorites' => $applicant->jobOpeningFavorites->map(function ($jobOpeningFavorite) {
                            return [
                                'id' => $jobOpeningFavorite->id,
                                'created_at' => $jobOpeningFavorite->created_at,
                                'updated_at' => $jobOpeningFavorite->updated_at,
                                'job_opening_id' => $jobOpeningFavorite->job_opening_id,

                            ];
                        }),
                        'gender' => $applicant->gender,
                        'job_experiences' => $applicant->jobExperiences->map(function ($jobExperience) {
                            return [
                                'id' => $jobExperience->id,
                                'created_at' => $jobExperience->created_at,
                                'updated_at' => $jobExperience->updated_at,
                                'company_name' => $jobExperience->company_name,
                                'start_date' => $jobExperience->start_date,
                                'end_date' => $jobExperience->end_date,
                                'applicant_id' => $jobExperience->applicant_id,
                                'job_title_id' => $jobExperience->job_title_id,

                            ];
                        }),
                        'skills' => $applicant->skills->map(function ($skill) {
                            return [
                                'id' => $skill->id,
                                'created_at' => $skill->created_at,
                                'updated_at' => $skill->updated_at,
                                'name' => $skill->name,
                                'applicant_id' => $skill->applicant_id,

                            ];
                        }),

                    ];
                }),
                'name' => $item->name,
                'job_openings' => $item->jobOpenings->map(function ($jobOpening) {
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
                        'is_recommended' => $jobOpening->is_recommended,

                    ];
                }),

            ];
        });
    }
}
