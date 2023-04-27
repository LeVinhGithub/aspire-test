<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OccupationType extends Model
{
    use HasFactory;

    protected $table = 'occupation_types';

    protected $fillable = [
        'name',
    ];

    public function jobOpenings()
    {
        return $this->hasMany(JobOpening::class, 'occupation_type_id');
    }
}
