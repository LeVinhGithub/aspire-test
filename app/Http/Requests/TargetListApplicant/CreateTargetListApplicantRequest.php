<?php

namespace App\Http\Requests\TargetListApplicant;

use Illuminate\Foundation\Http\FormRequest;

class CreateTargetListApplicantRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'target_list_applicants.target_list_id' => 'required|numeric|integer|exists:target_lists,id',
            'target_list_applicants.applicant_id' => 'required|numeric|integer|exists:applicants,id',
        ];
    }

    protected function passedValidation()
    {
        $this->replace([
            'target_list_id' => $this->integer('target_list_applicants.target_list_id'),
            'applicant_id' => $this->integer('target_list_applicants.applicant_id'),
        ]);
    }
}
