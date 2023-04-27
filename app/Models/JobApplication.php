<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobApplication extends Model
{
    use HasFactory;

    protected $table = 'job_applications';

    protected $fillable = [
        'applicant_id',
        'job_opening_id',
        'status',
        'approached_by_scout',
        'user_name_disclosed',
    ];

    public function applicant()
    {
        return $this->belongsTo(Applicant::class, 'applicant_id');
    }

    public function jobOpening()
    {
        return $this->belongsTo(JobOpening::class, 'job_opening_id');
    }
}
