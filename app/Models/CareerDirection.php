<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CareerDirection extends Model
{
    use HasFactory;

    protected $table = 'career_directions';

    protected $fillable = [
        'career_direction_group_id',
        'name',
    ];

    public function careerDirectionGroup()
    {
        return $this->belongsTo(CareerDirectionGroup::class, 'career_direction_group_id');
    }

    public function jobOpenings()
    {
        return $this->hasMany(JobOpening::class, 'career_direction_id');
    }
}
