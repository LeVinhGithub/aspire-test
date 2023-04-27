<?php

namespace App\Http\Requests\RecruitmentNote;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRecruitmentNoteRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'recruitment_notes.applicant_id' => 'required|numeric|integer|exists:applicants,id',
            'recruitment_notes.company_id' => 'required|numeric|integer|exists:companies,id',
            'recruitment_notes.note' => 'string|max:250|min:0',
        ];
    }

    protected function passedValidation()
    {
        $this->replace([
            'applicant_id' => $this->integer('recruitment_notes.applicant_id'),
            'company_id' => $this->integer('recruitment_notes.company_id'),
            'note' => $this->string('recruitment_notes.note'),
        ]);
    }
}
