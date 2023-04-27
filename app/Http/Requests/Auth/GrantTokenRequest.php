<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class GrantTokenRequest extends FormRequest
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
            'grant_type' => 'required|in:password,refresh_token',
            'scope' => 'required_if:grant_type,password|in:applicants,company_users',
            'email' => 'required_with_all:scope,password|email',
            'password' => 'required_with_all:scope,email',
            'refresh_token' => 'required_if:grant_type,refresh_token',
        ];
    }
}
