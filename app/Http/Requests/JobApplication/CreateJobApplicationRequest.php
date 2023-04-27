<?php

namespace App\Http\Requests\JobApplication;

use Illuminate\Foundation\Http\FormRequest;

class CreateJobApplicationRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'job_applications.applicant_id' => 'required|numeric|integer|exists:applicants,id',
            'job_applications.job_opening_id' => 'required|numeric|integer|exists:job_openings,id',
            'job_applications.status' => 'required|in:interview_adjustment,primary_interview,secondary_interview,final_interview,unofficial_offer,joining_the_company,rejected,declined,not_entered',
        ];
    }

    protected function passedValidation()
    {
        $this->replace([
            'applicant_id' => $this->integer('job_applications.applicant_id'),
            'job_opening_id' => $this->integer('job_applications.job_opening_id'),
            'status' => $this->string('job_applications.status'),
        ]);
    }
}
