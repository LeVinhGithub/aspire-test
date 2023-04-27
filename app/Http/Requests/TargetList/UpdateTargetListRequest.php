<?php

namespace App\Http\Requests\TargetList;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTargetListRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'target_lists.title' => 'required|string|max:255|min:0',
            'target_lists.company_id' => 'required|numeric|integer|exists:companies,id',
        ];
    }

    protected function passedValidation()
    {
        $this->replace([
            'title' => $this->string('target_lists.title'),
            'company_id' => $this->integer('target_lists.company_id'),
        ]);
    }
}
