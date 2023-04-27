<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmploymentStatus extends Model
{
    use HasFactory;

    protected $table = 'employment_statuses';

    protected $fillable = [
        'name',
    ];

    public function jobOpenings()
    {
        return $this->hasMany(JobOpening::class, 'employment_status_id');
    }
}
