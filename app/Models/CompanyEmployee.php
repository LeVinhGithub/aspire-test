<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyEmployee extends Model
{
    use HasFactory;

    protected $table = 'company_employees';

    protected $fillable = [
        'company_id',
        'full_name',
        'profile',
        'is_high_rank_employee',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class, 'company_id');
    }

        public function _storageAttachments()
        {
            return $this->morphMany(StorageAttachment::class, 'storable');
        }

        public function photo()
        {
            return $this->morphOne(StorageAttachment::class, 'storable')
                ->where([
                    ['name', 'photo'],
                    ['deleted', false],
                ]);
        }

    public function savePhoto(array $image)
    {
        $image['name'] = 'photo';

        return $this->photo()->create($image);
    }
}
