<?php

namespace App\Http\Requests\CompanyEmployee;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCompanyEmployeeRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'company_employees.company_id' => 'required|numeric|integer|exists:companies,id',
            'company_employees.full_name' => 'required|string|max:255|min:0',
            'company_employees.profile' => 'string|max:255|min:0',
            'company_employees.photo' => 'file|mimes:bmp,gif,jpeg,jpg,jpe,png,tiff,tif',
            'company_employees.is_high_rank_employee' => 'boolean',
        ];
    }

    protected function passedValidation()
    {
        $this->replace([
            'company_id' => $this->integer('company_employees.company_id'),
            'full_name' => $this->string('company_employees.full_name'),
            'profile' => $this->string('company_employees.profile'),
            'photo' => $this->file('company_employees.photo'),
            'is_high_rank_employee' => $this->boolean('company_employees.is_high_rank_employee'),
        ]);
    }
}
