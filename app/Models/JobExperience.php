<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobExperience extends Model
{
    use HasFactory;

    protected $table = 'job_experiences';

    protected $fillable = [
        'company_name',
        'start_date',
        'end_date',
        'applicant_id',
        'job_title_id',
    ];

    public function applicant()
    {
        return $this->belongsTo(Applicant::class, 'applicant_id');
    }

    public function jobTitle()
    {
        return $this->belongsTo(JobTitle::class, 'job_title_id');
    }
}
