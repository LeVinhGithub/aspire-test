<?php

namespace App\Http\Resources\Applicant;

use App\Http\Resources\BaseJsonResource;
use Illuminate\Http\Request;

class CreateApplicantResource extends BaseJsonResource
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'applicant';

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
            'full_name' => $this->full_name,
            'furigana' => $this->furigana,
            'phone_number' => $this->phone_number,
            'birthdate' => $this->birthdate,
            'applicant_languages' => $this->applicantLanguages->map(function ($applicantLanguage) {
                return [
                    'id' => $applicantLanguage->id,
                    'created_at' => $applicantLanguage->created_at,
                    'updated_at' => $applicantLanguage->updated_at,
                    'proficiency' => $applicantLanguage->proficiency,
                    'language_id' => $applicantLanguage->language_id,
                    'applicant_id' => $applicantLanguage->applicant_id,

                ];
            }),
            'address' => $this->address,
            'income_range_id' => $this->income_range_id,
            'availability' => $this->availability,
            'applicant_schools' => $this->applicantSchools->map(function ($applicantSchool) {
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
            'resume_file' => $this->resume_file,
            'description' => $this->description,
            'management_experience_id' => $this->management_experience_id,
            'applicant_industries' => $this->applicantIndustries->map(function ($applicantIndustry) {
                return [
                    'id' => $applicantIndustry->id,
                    'created_at' => $applicantIndustry->created_at,
                    'updated_at' => $applicantIndustry->updated_at,
                    'industry_id' => $applicantIndustry->industry_id,
                    'applicant_id' => $applicantIndustry->applicant_id,

                ];
            }),
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

                ];
            }),
            'location_id' => $this->location_id,
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
            'email' => $this->email,
            'gender' => $this->gender,
            'job_experiences' => $this->jobExperiences->map(function ($jobExperience) {
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

                                ],

                            ];
                        }),

                    ],
                    'reason' => $restriction->reason,

                ];
            }),

        ];
    }
}
