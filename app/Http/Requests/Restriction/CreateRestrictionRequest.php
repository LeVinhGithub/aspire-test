<?php

namespace App\Http\Requests\Restriction;

use Illuminate\Foundation\Http\FormRequest;

class CreateRestrictionRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'restrictions.company_id' => 'required|numeric|integer|exists:companies,id',
            'restrictions.applicant_id' => 'required|numeric|integer|exists:applicants,id',
            'restrictions.reason' => 'required|in:Other,HarrasingVandalism,SelectionUnmatched',
        ];
    }

    protected function passedValidation()
    {
        $this->replace([
            'company_id' => $this->integer('restrictions.company_id'),
            'applicant_id' => $this->integer('restrictions.applicant_id'),
            'reason' => $this->string('restrictions.reason'),
        ]);
    }
}
