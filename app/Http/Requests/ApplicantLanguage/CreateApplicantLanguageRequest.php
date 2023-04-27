<?php

namespace App\Http\Requests\ApplicantLanguage;

use Illuminate\Foundation\Http\FormRequest;

class CreateApplicantLanguageRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'applicant_languages.proficiency' => 'required|in:Basic,Intermediate,Advanced,Native',
            'applicant_languages.language_id' => 'required|numeric|integer|exists:languages,id',
            'applicant_languages.applicant_id' => 'required|numeric|integer|exists:applicants,id',
        ];
    }

    protected function passedValidation()
    {
        $this->replace([
            'proficiency' => $this->string('applicant_languages.proficiency'),
            'language_id' => $this->integer('applicant_languages.language_id'),
            'applicant_id' => $this->integer('applicant_languages.applicant_id'),
        ]);
    }
}
