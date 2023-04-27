<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobOpeningFavorite extends Model
{
    use HasFactory;

    protected $table = 'job_opening_favorites';

    protected $fillable = [
        'job_opening_id',
        'applicant_id',
    ];

    public function jobOpening()
    {
        return $this->belongsTo(JobOpening::class, 'job_opening_id');
    }

    public function applicant()
    {
        return $this->belongsTo(Applicant::class, 'applicant_id');
    }
}
