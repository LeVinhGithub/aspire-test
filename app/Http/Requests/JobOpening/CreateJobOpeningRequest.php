<?php

namespace App\Http\Requests\JobOpening;

use Illuminate\Foundation\Http\FormRequest;

class CreateJobOpeningRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'job_openings.department' => 'required|string|max:255|min:0',
            'job_openings.position' => 'required|string|max:255|min:0',
            'job_openings.occupation_type_id' => 'required|numeric|integer|exists:occupation_types,id',
            'job_openings.overseas_territory_id' => 'required|numeric|integer|exists:locations,id',
            'job_openings.income_range_id' => 'required|numeric|integer|exists:income_ranges,id',
            'job_openings.job_description' => 'required|string|max:1000|min:0',
            'job_openings.is_remote_available' => 'boolean',
            'job_openings.employment_status_id' => 'required|numeric|integer|exists:employment_statuses,id',
            'job_openings.company_id' => 'required|numeric|integer|exists:companies,id',
            'job_openings.trial_period' => 'required|string|max:255|min:0',
            'job_openings.working_hours' => 'required|string|max:255|min:0',
            'job_openings.avg_overtime_hours' => 'required|string|max:255|min:0',
            'job_openings.trial_period_conditions' => 'required|string|max:65535|min:0',
            'job_openings.workplace' => 'string|max:255|min:0',
            'job_openings.qualification' => 'required|string|max:1000|min:0',
            'job_openings.benefits' => 'string|max:1000|min:0',
            'job_openings.vacation' => 'required|string|max:1000|min:0',
            'job_openings.bonus' => 'string|max:1000|min:0',
            'job_openings.bonuses' => 'string|max:1000|min:0',
            'job_openings.promotion' => 'string|max:1000|min:0',
            'job_openings.appeal_point' => 'string|max:1000|min:0',
            'job_openings.passive_smoking_countermeasure_id' => 'required|numeric|integer|exists:passive_smoking_countermeasures,id',
            'job_openings.career_direction_id' => 'required|numeric|integer|exists:career_directions,id',
            'job_openings.job_title_id' => 'required|numeric|integer|exists:job_titles,id',
            'job_openings.career_path' => 'string|max:255|min:0',
            'job_openings.trending_keywords' => 'string|max:255|min:0',
            'job_openings.business_trip_availability' => 'boolean',
            'job_openings.transfers' => 'boolean',
            'job_openings.publication_start_date' => 'required|date',
            'job_openings.publication_end_date' => 'date',
            'job_openings.slug' => 'required|string|max:255|min:0|unique:job_openings,slug',
            'job_openings.image' => 'file|mimes:bmp,gif,jpeg,jpg,jpe,png,tiff,tif',
            'job_openings.is_recommended' => 'boolean',
            'job_openings.status' => 'in:available,expired',
            'job_openings.pv' => 'numeric|integer|gt:-2147483648|lt:2147483647',
        ];
    }

    protected function passedValidation()
    {
        $this->replace([
            'department' => $this->string('job_openings.department'),
            'position' => $this->string('job_openings.position'),
            'occupation_type_id' => $this->integer('job_openings.occupation_type_id'),
            'location_id' => $this->integer('job_openings.overseas_territory_id'),
            'income_range_id' => $this->integer('job_openings.income_range_id'),
            'job_description' => $this->string('job_openings.job_description'),
            'is_remote_available' => $this->boolean('job_openings.is_remote_available'),
            'employment_status_id' => $this->integer('job_openings.employment_status_id'),
            'company_id' => $this->integer('job_openings.company_id'),
            'trial_period' => $this->string('job_openings.trial_period'),
            'working_hours' => $this->string('job_openings.working_hours'),
            'avg_overtime_hours' => $this->string('job_openings.avg_overtime_hours'),
            'trial_period_conditions' => $this->string('job_openings.trial_period_conditions'),
            'workplace' => $this->string('job_openings.workplace'),
            'qualification' => $this->string('job_openings.qualification'),
            'benefits' => $this->string('job_openings.benefits'),
            'vacation' => $this->string('job_openings.vacation'),
            'bonus' => $this->string('job_openings.bonus'),
            'promotion' => $this->string('job_openings.promotion'),
            'appeal_point' => $this->string('job_openings.appeal_point'),
            'passive_smoking_countermeasure_id' => $this->integer('job_openings.passive_smoking_countermeasure_id'),
            'career_direction_id' => $this->integer('job_openings.career_direction_id'),
            'job_title_id' => $this->integer('job_openings.job_title_id'),
            'future_career_path' => $this->string('job_openings.career_path'),
            'trending_keywords' => $this->string('job_openings.trending_keywords'),
            'business_trip_availability' => $this->boolean('job_openings.business_trip_availability'),
            'transfers' => $this->boolean('job_openings.transfers'),
            'publication_start_date' => $this->date('job_openings.publication_start_date'),
            'publication_end_date' => $this->date('job_openings.publication_end_date'),
            'slug' => $this->string('job_openings.slug'),
            'image' => $this->file('job_openings.image'),
            'is_recommended' => $this->boolean('job_openings.is_recommended'),
            'status' => $this->string('job_openings.status'),
            'pv' => $this->integer('job_openings.pv'),
        ]);
    }
}
