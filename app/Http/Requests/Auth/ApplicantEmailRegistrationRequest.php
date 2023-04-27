<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class ApplicantEmailRegistrationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'applicant.password' => 'required|password_with_pattern|confirmed',
            'applicant.password_confirmation' => 'string|max:255|min:0',
            'applicant.income_range_id' => 'required|numeric|integer|exists:income_ranges,id',
            'applicant.management_experience_id' => 'required|numeric|integer|exists:management_experiences,id',
            'applicant.email' => 'required|string|email|max:255|min:0|unique:applicants,email',
        ];
    }
}
