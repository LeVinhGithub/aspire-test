<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PassiveSmokingCountermeasure extends Model
{
    use HasFactory;

    protected $table = 'passive_smoking_countermeasures';

    protected $fillable = [
        'name',
    ];

    public function jobOpenings()
    {
        return $this->hasMany(JobOpening::class, 'passive_smoking_countermeasure_id');
    }
}
