<?php

namespace App\Http\Requests\JobExperience;

use Illuminate\Foundation\Http\FormRequest;

class CreateJobExperienceRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'job_experiences.company_name' => 'required|string|max:255|min:0',
            'job_experiences.start_date' => 'required|date|in_past',
            'job_experiences.end_date' => 'date|in_past',
            'job_experiences.applicant_id' => 'required|numeric|integer|exists:applicants,id',
            'job_experiences.job_title_id' => 'required|numeric|integer|exists:job_titles,id',
        ];
    }

    protected function passedValidation()
    {
        $this->replace([
            'company_name' => $this->string('job_experiences.company_name'),
            'start_date' => $this->date('job_experiences.start_date'),
            'end_date' => $this->date('job_experiences.end_date'),
            'applicant_id' => $this->integer('job_experiences.applicant_id'),
            'job_title_id' => $this->integer('job_experiences.job_title_id'),
        ]);
    }
}
