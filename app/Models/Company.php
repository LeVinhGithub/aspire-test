<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $table = 'companies';

    protected $fillable = [
        'name',
        'location',
        'launched_year',
        'business_details',
        'number_of_employees',
        'industry_id',
        'mission',
        'vision',
        'value',
        'representative_profile',
        'listing_classification',
        'representative_name',
        'slug',
        'capital',
        'ipo',
        'business_id',
        'name_furigana',
    ];

    public function industry()
    {
        return $this->belongsTo(Industry::class, 'industry_id');
    }

    public function companyUsers()
    {
        return $this->hasMany(CompanyUser::class, 'company_id');
    }

    public function jobOpenings()
    {
        return $this->hasMany(JobOpening::class, 'company_id');
    }

    public function messages()
    {
        return $this->hasMany(Message::class, 'company_id');
    }

    public function restrictions()
    {
        return $this->hasMany(Restriction::class, 'company_id');
    }

    public function companyEmployees()
    {
        return $this->hasMany(CompanyEmployee::class, 'company_id');
    }

    public function recruitmentNotes()
    {
        return $this->hasMany(RecruitmentNote::class, 'company_id');
    }

    public function scoutTemplates()
    {
        return $this->hasMany(ScoutTemplate::class, 'company_id');
    }

    public function targetLists()
    {
        return $this->hasMany(TargetList::class, 'company_id');
    }

        public function _storageAttachments()
        {
            return $this->morphMany(StorageAttachment::class, 'storable');
        }

        public function logo()
        {
            return $this->morphOne(StorageAttachment::class, 'storable')
                ->where([
                    ['name', 'logo'],
                    ['deleted', false],
                ]);
        }

    public function saveLogo(array $image)
    {
        $image['name'] = 'logo';

        return $this->logo()->create($image);
    }

    public function representative_photo()
    {
        return $this->morphOne(StorageAttachment::class, 'storable')
            ->where([
                ['name', 'representative_photo'],
                ['deleted', false],
            ]);
    }

    public function saveRepresentative_photo(array $image)
    {
        $image['name'] = 'representative_photo';

        return $this->representative_photo()->create($image);
    }

    public function image()
    {
        return $this->morphOne(StorageAttachment::class, 'storable')
            ->where([
                ['name', 'image'],
                ['deleted', false],
            ]);
    }

    public function saveImage(array $image)
    {
        $image['name'] = 'image';

        return $this->image()->create($image);
    }
}
