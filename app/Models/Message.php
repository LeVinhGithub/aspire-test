<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    protected $table = 'messages';

    protected $fillable = [
        'applicant_id',
        'text',
        'reply_to_message_id',
        'company_id',
        'is_from_applicant',
        'is_read',
    ];

    public function applicant()
    {
        return $this->belongsTo(Applicant::class, 'applicant_id');
    }

    public function company()
    {
        return $this->belongsTo(Company::class, 'company_id');
    }

        public function _storageAttachments()
        {
            return $this->morphMany(StorageAttachment::class, 'storable');
        }

        public function attachment()
        {
            return $this->morphOne(StorageAttachment::class, 'storable')
                ->where([
                    ['name', 'attachment'],
                    ['deleted', false],
                ]);
        }

    public function saveAttachment(array $image)
    {
        $image['name'] = 'attachment';

        return $this->attachment()->create($image);
    }
}
