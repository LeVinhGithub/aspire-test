<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IndustryGroup extends Model
{
    use HasFactory;

    protected $table = 'industry_groups';

    protected $fillable = [
        'name',
    ];

    public function industries()
    {
        return $this->hasMany(Industry::class, 'industry_group_id');
    }
}
