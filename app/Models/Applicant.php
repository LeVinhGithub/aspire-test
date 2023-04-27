<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;

class Applicant extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, Notifiable;

    protected $table = 'applicants';

    protected $fillable = [
        'full_name',
        'furigana',
        'phone_number',
        'birthdate',
        'location_id',
        'address',
        'income_range_id',
        'availability',
        'description',
        'management_experience_id',
        'encrypted_password',
        'email',
        'reset_password_token',
        'reset_password_sent_at',
        'remember_created_at',
        'current_sign_in_at',
        'last_sign_in_at',
        'current_sign_in_ip',
        'last_sign_in_ip',
        'sign_in_count',
        'password',
        'password_confirmation',
        'locked_at',
        'failed_attempts',
        'unlock_token',
        'gender',
        'confirmation_token',
        'unconfirmed_email',
        'confirmed_at',
        'confirmation_sent_at',
        'is_onboarded',
        'notes',
        'current_company_name',
        'current_company_department',
        'current_company_position',
        'confirmation_email_resent_count',
        'number_of_companies',
        'is_suspended',
        'desired_info',
        'management_experience_years',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'encrypted_password',
        'password',
        'password_confirmation',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'reset_password_sent_at' => 'datetime',
        'remember_created_at' => 'datetime',
        'current_sign_in_at' => 'datetime',
        'last_sign_in_at' => 'datetime',
        'locked_at' => 'datetime',
        'confirmed_at' => 'datetime',
        'confirmation_sent_at' => 'datetime',
    ];

    public function location()
    {
        return $this->belongsTo(Location::class, 'location_id');
    }

    public function incomeRange()
    {
        return $this->belongsTo(IncomeRange::class, 'income_range_id');
    }

    public function managementExperience()
    {
        return $this->belongsTo(ManagementExperience::class, 'management_experience_id');
    }

    public function applicantIndustries()
    {
        return $this->hasMany(ApplicantIndustry::class, 'applicant_id');
    }

    public function applicantSchools()
    {
        return $this->hasMany(ApplicantSchool::class, 'applicant_id');
    }

    public function applicantLanguages()
    {
        return $this->hasMany(ApplicantLanguage::class, 'applicant_id');
    }

    public function messages()
    {
        return $this->hasMany(Message::class, 'applicant_id');
    }

    public function jobApplications()
    {
        return $this->hasMany(JobApplication::class, 'applicant_id');
    }

    public function jobExperiences()
    {
        return $this->hasMany(JobExperience::class, 'applicant_id');
    }

    public function skills()
    {
        return $this->hasMany(Skill::class, 'applicant_id');
    }

    public function jobOpeningFavorites()
    {
        return $this->hasMany(JobOpeningFavorite::class, 'applicant_id');
    }

    public function restrictions()
    {
        return $this->hasMany(Restriction::class, 'applicant_id');
    }

    public function recruitmentNotes()
    {
        return $this->hasMany(RecruitmentNote::class, 'applicant_id');
    }

    public function targetListApplicants()
    {
        return $this->hasMany(TargetListApplicant::class, 'applicant_id');
    }

        public function _storageAttachments()
        {
            return $this->morphMany(StorageAttachment::class, 'storable');
        }

        public function resume_file()
        {
            return $this->morphOne(StorageAttachment::class, 'storable')
                ->where([
                    ['name', 'resume_file'],
                    ['deleted', false],
                ]);
        }

    public function saveResume_file(array $image)
    {
        $image['name'] = 'resume_file';

        return $this->resume_file()->create($image);
    }
}
