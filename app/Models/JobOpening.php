<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobOpening extends Model
{
    use HasFactory;

    protected $table = 'job_openings';

    protected $fillable = [
        'department',
        'position',
        'occupation_type_id',
        'location_id',
        'income_range_id',
        'job_description',
        'is_remote_available',
        'employment_status_id',
        'company_id',
        'trial_period',
        'working_hours',
        'avg_overtime_hours',
        'trial_period_conditions',
        'workplace',
        'qualification',
        'benefits',
        'vacation',
        'bonus',
        'promotion',
        'appeal_point',
        'passive_smoking_countermeasure_id',
        'career_direction_id',
        'job_title_id',
        'future_career_path',
        'trending_keywords',
        'business_trip_availability',
        'transfers',
        'publication_start_date',
        'publication_end_date',
        'slug',
        'is_recommended',
        'status',
        'pv',
    ];

    public function occupationType()
    {
        return $this->belongsTo(OccupationType::class, 'occupation_type_id');
    }

    public function location()
    {
        return $this->belongsTo(Location::class, 'location_id');
    }

    public function incomeRange()
    {
        return $this->belongsTo(IncomeRange::class, 'income_range_id');
    }

    public function employmentStatus()
    {
        return $this->belongsTo(EmploymentStatus::class, 'employment_status_id');
    }

    public function company()
    {
        return $this->belongsTo(Company::class, 'company_id');
    }

    public function passiveSmokingCountermeasure()
    {
        return $this->belongsTo(PassiveSmokingCountermeasure::class, 'passive_smoking_countermeasure_id');
    }

    public function careerDirection()
    {
        return $this->belongsTo(CareerDirection::class, 'career_direction_id');
    }

    public function jobTitle()
    {
        return $this->belongsTo(JobTitle::class, 'job_title_id');
    }

    public function jobApplications()
    {
        return $this->hasMany(JobApplication::class, 'job_opening_id');
    }

    public function jobOpeningFavorites()
    {
        return $this->hasMany(JobOpeningFavorite::class, 'job_opening_id');
    }

    public function jobOpeningValuedCompetencies()
    {
        return $this->hasMany(JobOpeningValuedCompetency::class, 'job_opening_id');
    }

        public function _storageAttachments()
        {
            return $this->morphMany(StorageAttachment::class, 'storable');
        }

        public function image()
        {
            return $this->morphOne(StorageAttachment::class, 'storable')
                ->where([
                    ['name', 'image'],
                    ['deleted', false],
                ]);
        }

    public function saveImage(array $image)
    {
        $image['name'] = 'image';

        return $this->image()->create($image);
    }
}
