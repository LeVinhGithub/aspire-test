<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ScoutTemplate extends Model
{
    use HasFactory;

    protected $table = 'scout_templates';

    protected $fillable = [
        'title',
        'template_text',
        'company_id',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class, 'company_id');
    }
}
