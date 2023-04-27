<?php

namespace App\Http\Requests\CompanyUser;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCompanyUserRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'company_users.company_id' => 'required|numeric|integer|exists:companies,id',
            'company_users.full_name' => 'required|string|max:255|min:0',
            'company_users.position' => 'string|max:255|min:0',
            'company_users.photo' => 'file|max:10240|mimes:bmp,gif,jpeg,jpg,jpe,png,tiff,tif',
            'company_users.email' => "required|string|email|max:255|min:0|unique:company_users,email,{$this->id}",
            'company_users.role' => 'required|in:admin,standard',
            'company_users.phone_number' => "required|string|max:255|min:0|unique:company_users,phone_number,{$this->id}",
        ];
    }

    protected function passedValidation()
    {
        $this->replace([
            'company_id' => $this->integer('company_users.company_id'),
            'full_name' => $this->string('company_users.full_name'),
            'position' => $this->string('company_users.position'),
            'photo' => $this->file('company_users.photo'),
            'email' => $this->string('company_users.email'),
            'role' => $this->string('company_users.role'),
            'phone_number' => $this->string('company_users.phone_number'),
        ]);
    }
}
