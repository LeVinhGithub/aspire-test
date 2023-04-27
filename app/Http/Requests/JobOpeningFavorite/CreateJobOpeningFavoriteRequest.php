<?php

namespace App\Http\Requests\JobOpeningFavorite;

use Illuminate\Foundation\Http\FormRequest;

class CreateJobOpeningFavoriteRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'job_opening_favorites.job_opening_id' => 'required|numeric|integer|exists:job_openings,id',
            'job_opening_favorites.applicant_id' => 'required|numeric|integer|exists:applicants,id',
        ];
    }

    protected function passedValidation()
    {
        $this->replace([
            'job_opening_id' => $this->integer('job_opening_favorites.job_opening_id'),
            'applicant_id' => $this->integer('job_opening_favorites.applicant_id'),
        ]);
    }
}
