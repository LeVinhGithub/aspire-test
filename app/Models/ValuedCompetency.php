<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ValuedCompetency extends Model
{
    use HasFactory;

    protected $table = 'valued_competencies';

    protected $fillable = [
        'name',
    ];

    public function jobOpeningValuedCompetencies()
    {
        return $this->hasMany(JobOpeningValuedCompetency::class, 'valued_competency_id');
    }
}
