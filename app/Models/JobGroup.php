<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobGroup extends Model
{
    use HasFactory;

    protected $table = 'job_groups';

    protected $fillable = [
        'name',
    ];

    public function jobTitles()
    {
        return $this->hasMany(JobTitle::class, 'job_group_id');
    }
}
