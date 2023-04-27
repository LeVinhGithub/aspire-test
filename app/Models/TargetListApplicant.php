<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TargetListApplicant extends Model
{
    use HasFactory;

    protected $table = 'target_list_applicants';

    protected $fillable = [
        'target_list_id',
        'applicant_id',
    ];

    public function targetList()
    {
        return $this->belongsTo(TargetList::class, 'target_list_id');
    }

    public function applicant()
    {
        return $this->belongsTo(Applicant::class, 'applicant_id');
    }
}
