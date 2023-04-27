<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobOpeningValuedCompetency extends Model
{
    use HasFactory;

    protected $table = 'job_opening_valued_competencies';

    protected $fillable = [
        'job_opening_id',
        'valued_competency_id',
    ];

    public function jobOpening()
    {
        return $this->belongsTo(JobOpening::class, 'job_opening_id');
    }

    public function valuedCompetency()
    {
        return $this->belongsTo(ValuedCompetency::class, 'valued_competency_id');
    }
}
