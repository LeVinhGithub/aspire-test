<?php

namespace App\Http\Requests\ScoutTemplate;

use Illuminate\Foundation\Http\FormRequest;

class CreateScoutTemplateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'scout_templates.title' => 'string|max:255|min:0',
            'scout_templates.template_text' => 'string|max:65535|min:0',
            'scout_templates.company_id' => 'required|numeric|integer|exists:companies,id',
        ];
    }

    protected function passedValidation()
    {
        $this->replace([
            'title' => $this->string('scout_templates.title'),
            'template_text' => $this->string('scout_templates.template_text'),
            'company_id' => $this->integer('scout_templates.company_id'),
        ]);
    }
}
