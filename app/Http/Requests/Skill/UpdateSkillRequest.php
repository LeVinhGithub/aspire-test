<?php

namespace App\Http\Requests\Skill;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSkillRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'skills.name' => "required|string|max:255|min:0|unique:skills,name,{$this->id}",
            'skills.applicant_id' => 'required|numeric|integer|exists:applicants,id',
            'skills.skill_type' => 'in:skill,qualification',
        ];
    }

    protected function passedValidation()
    {
        $this->replace([
            'name' => $this->string('skills.name'),
            'applicant_id' => $this->integer('skills.applicant_id'),
            'skill_type' => $this->string('skills.skill_type'),
        ]);
    }
}
