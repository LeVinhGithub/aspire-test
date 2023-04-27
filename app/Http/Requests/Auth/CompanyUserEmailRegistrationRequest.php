<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class CompanyUserEmailRegistrationRequest extends FormRequest
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
            'company_user.password' => 'required|password_with_pattern|confirmed',
            'company_user.password_confirmation' => 'string|max:255|min:0',
            'company_user.company_id' => 'required|numeric|integer|exists:companies,id',
            'company_user.full_name' => 'required|string|max:255|min:0',
            'company_user.email' => 'required|string|email|max:255|min:0|unique:company_users,email',
            'company_user.role' => 'required|in:admin,standard',
            'company_user.phone_number' => 'required|string|max:255|min:0|unique:company_users,phone_number',
        ];
    }
}
