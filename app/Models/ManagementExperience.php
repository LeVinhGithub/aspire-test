<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ManagementExperience extends Model
{
    use HasFactory;

    protected $table = 'management_experiences';

    protected $fillable = [
        'name',
    ];

    public function applicants()
    {
        return $this->hasMany(Applicant::class, 'management_experience_id');
    }
}
