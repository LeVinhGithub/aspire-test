<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Industry extends Model
{
    use HasFactory;

    protected $table = 'industries';

    protected $fillable = [
        'name',
        'industry_group_id',
    ];

    public function industryGroup()
    {
        return $this->belongsTo(IndustryGroup::class, 'industry_group_id');
    }

    public function companies()
    {
        return $this->hasMany(Company::class, 'industry_id');
    }

    public function applicantIndustries()
    {
        return $this->hasMany(ApplicantIndustry::class, 'industry_id');
    }
}
