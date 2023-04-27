<?php

namespace App\Http\Resources\ManagementExperience;

use App\Http\Resources\BaseJsonCollection;

class FilterManagementExperienceCollection extends BaseJsonCollection
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'management_experiences';

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
                'name' => $item->name,
                'applicants' => $item->applicants->map(function ($applicant) {
                    return [
                        'id' => $applicant->id,
                        'created_at' => $applicant->created_at,
                        'updated_at' => $applicant->updated_at,
                        'full_name' => $applicant->full_name,
                        'furigana' => $applicant->furigana,
                        'phone_number' => $applicant->phone_number,
                        'dob' => $applicant->birthdate,
                        'overseas_territory_id' => $applicant->location_id,
                        'address' => $applicant->address,
                        'income_range_id' => $applicant->income_range_id,
                        'availability' => $applicant->availability,
                        'resume_file' => $applicant->resume_file,
                        'description' => $applicant->description,
                        'management_experience_id' => $applicant->management_experience_id,
                        'applicant_languages' => $applicant->applicantLanguages->map(function ($applicantLanguage) {
                            return [
                                'id' => $applicantLanguage->id,
                                'created_at' => $applicantLanguage->created_at,
                                'updated_at' => $applicantLanguage->updated_at,
                                'proficiency' => $applicantLanguage->proficiency,
                                'language_id' => $applicantLanguage->language_id,
                                'other_language' => $applicantLanguage->other_language,

                            ];
                        }),
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
                        'email' => $applicant->email,
                        'is_onboarded' => $applicant->is_onboarded,
                        'notes' => $applicant->notes,
                        'current_company_name' => $applicant->current_company_name,
                        'current_company_department' => $applicant->current_company_department,
                        'current_company_position' => $applicant->current_company_position,
                        'confirmation_email_resent_count' => $applicant->confirmation_email_resent_count,

                    ];
                }),
                'management_experience_id' => $item->management_experience_id,

            ];
        });
    }
}
