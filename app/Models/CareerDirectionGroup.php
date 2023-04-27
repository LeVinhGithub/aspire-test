<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CareerDirectionGroup extends Model
{
    use HasFactory;

    protected $table = 'career_direction_groups';

    protected $fillable = [
        'name',
    ];

    public function careerDirections()
    {
        return $this->hasMany(CareerDirection::class, 'career_direction_group_id');
    }
}
