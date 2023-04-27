<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Restriction extends Model
{
    use HasFactory;

    protected $table = 'restrictions';

    protected $fillable = [
        'company_id',
        'applicant_id',
        'reason',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class, 'company_id');
    }

    public function applicant()
    {
        return $this->belongsTo(Applicant::class, 'applicant_id');
    }
}
