<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TargetList extends Model
{
    use HasFactory;

    protected $table = 'target_lists';

    protected $fillable = [
        'title',
        'company_id',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class, 'company_id');
    }

    public function targetListApplicants()
    {
        return $this->hasMany(TargetListApplicant::class, 'target_list_id');
    }
}
