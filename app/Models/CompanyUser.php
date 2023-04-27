<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;

class CompanyUser extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, Notifiable;

    protected $table = 'company_users';

    protected $fillable = [
        'company_id',
        'full_name',
        'position',
        'encrypted_password',
        'email',
        'reset_password_token',
        'reset_password_sent_at',
        'remember_created_at',
        'current_sign_in_at',
        'last_sign_in_at',
        'current_sign_in_ip',
        'last_sign_in_ip',
        'sign_in_count',
        'password',
        'password_confirmation',
        'locked_at',
        'failed_attempts',
        'unlock_token',
        'role',
        'phone_number',
        'confirmation_token',
        'unconfirmed_email',
        'confirmed_at',
        'confirmation_sent_at',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'encrypted_password',
        'password',
        'password_confirmation',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'reset_password_sent_at' => 'datetime',
        'remember_created_at' => 'datetime',
        'current_sign_in_at' => 'datetime',
        'last_sign_in_at' => 'datetime',
        'locked_at' => 'datetime',
        'confirmed_at' => 'datetime',
        'confirmation_sent_at' => 'datetime',
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
