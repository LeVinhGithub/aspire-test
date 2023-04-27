<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApplicantLanguage extends Model
{
    use HasFactory;

    protected $table = 'applicant_languages';

    protected $fillable = [
        'proficiency',
        'language_id',
        'applicant_id',
        'other_language',
    ];

    public function language()
    {
        return $this->belongsTo(Language::class, 'language_id');
    }

    public function applicant()
    {
        return $this->belongsTo(Applicant::class, 'applicant_id');
    }
}
