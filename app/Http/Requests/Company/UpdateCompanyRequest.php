<?php

namespace App\Http\Requests\Company;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCompanyRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'companies.name' => "required|string|max:255|min:0|unique:companies,name,{$this->id}",
            'companies.logo' => '',
            'companies.location' => 'string|max:255|min:0',
            'companies.year_founded' => 'string|max:4|min:0',
            'companies.business_details' => 'string|max:1000|min:0',
            'companies.number_of_employees' => 'numeric|integer|gt:0|lt:2147483647',
            'companies.industry_id' => 'required|numeric|integer|exists:industries,id',
            'companies.mission' => 'string|max:1000|min:0',
            'companies.vision' => 'string|max:1000|min:0',
            'companies.value' => 'string|max:1000|min:0',
            'companies.representative_photo' => 'file|mimes:bmp,gif,jpeg,jpg,jpe,png,tiff,tif',
            'companies.representative_profile' => 'string|max:1000|min:0',
            'companies.ipo' => 'in:first_section_tokyo_stock,second_section_tokyo_stock,jasdaq_standart,jasdaq_growth,mothers,unlisted',
            'companies.representative_name' => 'string|max:255|min:0',
            'companies.slug' => "required|string|max:255|min:0|unique:companies,slug,{$this->id}",
            'restrictions.company_id' => 'required|numeric|integer|exists:companies,id',
            'messages.applicant_id' => 'required|numeric|integer|exists:applicants,id',
            'messages.text' => 'string|max:1000|min:0',
            'messages.attachment' => 'file|max:10240|mimes:bmp,gif,jpeg,jpg,jpe,png,tiff,tif',
            'messages.reply_to_message_id' => 'numeric|integer|gt:0|lt:2147483647',
            'companies.image' => 'file|mimes:bmp,gif,jpeg,jpg,jpe,png,tiff,tif',
            'companies.capital' => 'string|max:255|min:0',
            'companies.business_id' => 'string|max:255|min:0',
            'companies.name_furigana' => 'string|max:255|min:0',
        ];
    }

    protected function passedValidation()
    {
        $this->replace([
            'name' => $this->string('companies.name'),
            'logo' => $this->file('companies.logo'),
            'location' => $this->string('companies.location'),
            'launched_year' => $this->string('companies.year_founded'),
            'business_details' => $this->string('companies.business_details'),
            'number_of_employees' => $this->integer('companies.number_of_employees'),
            'industry_id' => $this->integer('companies.industry_id'),
            'mission' => $this->string('companies.mission'),
            'vision' => $this->string('companies.vision'),
            'value' => $this->string('companies.value'),
            'representative_photo' => $this->file('companies.representative_photo'),
            'representative_profile' => $this->string('companies.representative_profile'),
            'listing_classification' => $this->string('companies.ipo'),
            'representative_name' => $this->string('companies.representative_name'),
            'slug' => $this->string('companies.slug'),
            'restrictions' => ['company_id' => $this->integer('restrictions.company_id')],
            'messages' => ['applicant_id' => $this->integer('messages.applicant_id'), 'text' => $this->string('messages.text'), 'attachment' => $this->file('messages.attachment'), 'reply_to_message_id' => $this->integer('messages.reply_to_message_id')],
            'image' => $this->file('companies.image'),
            'capital' => $this->string('companies.capital'),
            'business_id' => $this->string('companies.business_id'),
            'name_furigana' => $this->string('companies.name_furigana'),
        ]);
    }
}
