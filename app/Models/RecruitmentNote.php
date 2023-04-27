<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecruitmentNote extends Model
{
    use HasFactory;

    protected $table = 'recruitment_notes';

    protected $fillable = [
        'applicant_id',
        'company_id',
        'note',
    ];

    public function applicant()
    {
        return $this->belongsTo(Applicant::class, 'applicant_id');
    }

    public function company()
    {
        return $this->belongsTo(Company::class, 'company_id');
    }
}
