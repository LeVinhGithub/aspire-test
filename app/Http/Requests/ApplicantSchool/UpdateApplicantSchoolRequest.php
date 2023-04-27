<?php

namespace App\Http\Requests\ApplicantSchool;

use Illuminate\Foundation\Http\FormRequest;

class UpdateApplicantSchoolRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'applicant_schools.graduation_date' => 'required|date',
            'applicant_schools.name' => 'required|string|max:255|min:0',
            'applicant_schools.degree' => 'string|max:255|min:0',
            'applicant_schools.major' => 'string|max:255|min:0',
            'applicant_schools.school_type_id' => 'required|numeric|integer|exists:school_types,id',
            'applicant_schools.applicant_id' => 'required|numeric|integer|exists:applicants,id',
        ];
    }

    protected function passedValidation()
    {
        $this->replace([
            'graduation_date' => $this->date('applicant_schools.graduation_date'),
            'name' => $this->string('applicant_schools.name'),
            'degree' => $this->string('applicant_schools.degree'),
            'major' => $this->string('applicant_schools.major'),
            'school_type_id' => $this->integer('applicant_schools.school_type_id'),
            'applicant_id' => $this->integer('applicant_schools.applicant_id'),
        ]);
    }
}
