<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApplicantSchool extends Model
{
    use HasFactory;

    protected $table = 'applicant_schools';

    protected $fillable = [
        'graduation_date',
        'name',
        'degree',
        'major',
        'school_type_id',
        'applicant_id',
    ];

    public function schoolType()
    {
        return $this->belongsTo(SchoolType::class, 'school_type_id');
    }

    public function applicant()
    {
        return $this->belongsTo(Applicant::class, 'applicant_id');
    }
}
