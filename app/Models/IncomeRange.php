<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IncomeRange extends Model
{
    use HasFactory;

    protected $table = 'income_ranges';

    protected $fillable = [
        'name',
    ];

    public function applicants()
    {
        return $this->hasMany(Applicant::class, 'income_range_id');
    }

    public function jobOpenings()
    {
        return $this->hasMany(JobOpening::class, 'income_range_id');
    }
}
