<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;

    protected $table = 'locations';

    protected $fillable = [
        'name',
        'is_prefecture',
    ];

    public function applicants()
    {
        return $this->hasMany(Applicant::class, 'location_id');
    }

    public function jobOpenings()
    {
        return $this->hasMany(JobOpening::class, 'location_id');
    }
}
