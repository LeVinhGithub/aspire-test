<?php

namespace App\Http\Requests\Applicant;

use Illuminate\Foundation\Http\FormRequest;

class CreateApplicantRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'applicants.full_name' => 'string|max:255|min:0',
            'applicants.furigana' => 'string|max:255|min:0',
            'applicants.phone_number' => 'string|phone_number',
            'applicants.dob' => 'date|in_past',
            'applicants.overseas_territory_id' => 'required|numeric|integer|exists:locations,id',
            'applicants.address' => 'string|max:255|min:0',
            'applicants.income_range_id' => 'required|numeric|integer|exists:income_ranges,id',
            'applicants.availability' => 'in:immediate,within_3_months,within_6_months,within_1_year,if_I_find_a_good_company,not_thinking_about_it_now',
            'applicants.resume_file' => 'file|mimes:pdf',
            'applicants.description' => 'string|max:250|min:0',
            'applicants.management_experience_id' => 'required|numeric|integer|exists:management_experiences,id',
            'applicants.email' => 'required|string|email|max:255|min:0|unique:applicants,email',
            'applicants.gender' => 'in:male,female,other',
            'restrictions.company_id' => 'required|numeric|integer|exists:companies,id',
            'restrictions.applicant_id' => 'required|numeric|integer|exists:applicants,id',
            'applicants.is_onboarded' => 'boolean',
            'applicants.notes' => 'string|max:255|min:0',
            'applicants.current_company_name' => 'string|max:255|min:0',
            'applicants.current_company_department' => 'string|max:255|min:0',
            'applicants.current_company_position' => 'string|max:255|min:0',
            'applicants.confirmation_email_resent_count' => 'numeric|integer|gte:0|lt:4',
            'applicants.number_of_companies' => 'numeric|integer|gte:0|lte:99',
            'applicants.is_suspended' => 'boolean',
            'applicants.desired_info' => 'string|max:65535|min:0',
            'applicants.management_experience_years' => 'in:years_0,years_1,years_2,years_3,years_4,years_5,years_6,years_7,years_8,years_9,years_10,years_10_more',
        ];
    }

    protected function passedValidation()
    {
        $this->replace([
            'full_name' => $this->string('applicants.full_name'),
            'furigana' => $this->string('applicants.furigana'),
            'phone_number' => $this->string('applicants.phone_number'),
            'birthdate' => $this->date('applicants.dob'),
            'location_id' => $this->integer('applicants.overseas_territory_id'),
            'address' => $this->string('applicants.address'),
            'income_range_id' => $this->integer('applicants.income_range_id'),
            'availability' => $this->string('applicants.availability'),
            'resume_file' => $this->file('applicants.resume_file'),
            'description' => $this->string('applicants.description'),
            'management_experience_id' => $this->integer('applicants.management_experience_id'),
            'email' => $this->string('applicants.email'),
            'gender' => $this->string('applicants.gender'),
            'restrictions' => ['company_id' => $this->integer('restrictions.company_id'), 'applicant_id' => $this->integer('restrictions.applicant_id')],
            'is_onboarded' => $this->boolean('applicants.is_onboarded'),
            'notes' => $this->string('applicants.notes'),
            'current_company_name' => $this->string('applicants.current_company_name'),
            'current_company_department' => $this->string('applicants.current_company_department'),
            'current_company_position' => $this->string('applicants.current_company_position'),
            'confirmation_email_resent_count' => $this->integer('applicants.confirmation_email_resent_count'),
            'number_of_companies' => $this->integer('applicants.number_of_companies'),
            'is_suspended' => $this->boolean('applicants.is_suspended'),
            'desired_info' => $this->string('applicants.desired_info'),
            'management_experience_years' => $this->string('applicants.management_experience_years'),
        ]);
    }
}
