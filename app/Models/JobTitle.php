<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobTitle extends Model
{
    use HasFactory;

    protected $table = 'job_titles';

    protected $fillable = [
        'name',
        'job_group_id',
    ];

    public function jobGroup()
    {
        return $this->belongsTo(JobGroup::class, 'job_group_id');
    }

    public function jobOpenings()
    {
        return $this->hasMany(JobOpening::class, 'job_title_id');
    }

    public function jobExperiences()
    {
        return $this->hasMany(JobExperience::class, 'job_title_id');
    }
}
