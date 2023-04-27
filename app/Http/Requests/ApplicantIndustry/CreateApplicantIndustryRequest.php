<?php

namespace App\Http\Requests\ApplicantIndustry;

use Illuminate\Foundation\Http\FormRequest;

class CreateApplicantIndustryRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'applicant_industries.industry_id' => 'required|numeric|integer|exists:industries,id',
            'applicant_industries.applicant_id' => 'required|numeric|integer|exists:applicants,id',
        ];
    }

    protected function passedValidation()
    {
        $this->replace([
            'industry_id' => $this->integer('applicant_industries.industry_id'),
            'applicant_id' => $this->integer('applicant_industries.applicant_id'),
        ]);
    }
}
