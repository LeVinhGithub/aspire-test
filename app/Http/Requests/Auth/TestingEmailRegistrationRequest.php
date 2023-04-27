<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class TestingEmailRegistrationRequest extends FormRequest
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
            'testing.password' => 'required|password_with_pattern|confirmed',
            'testing.password_confirmation' => 'string|max:255|min:0',
            'testing.email' => 'required|string|email|max:255|min:0|unique:testings,email',
        ];
    }
}
