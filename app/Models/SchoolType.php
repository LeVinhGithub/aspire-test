<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SchoolType extends Model
{
    use HasFactory;

    protected $table = 'school_types';

    protected $fillable = [
        'name',
    ];

    public function applicantSchools()
    {
        return $this->hasMany(ApplicantSchool::class, 'school_type_id');
    }
}
