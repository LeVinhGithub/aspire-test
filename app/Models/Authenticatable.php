<?php

namespace App\Models;

use App\Notifications\Auth\ResetPasswordNotification;
use App\Notifications\Auth\UnlockEmailNotification;
use App\Notifications\Auth\VerifyEmailNotification;
use Carbon\Carbon;
use Illuminate\Foundation\Auth\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;

class Authenticatable extends User implements JWTSubject
{
    const UNLOCK_STRATEGY_TIME = 'time';

    const UNLOCK_STRATEGY_EMAIL = 'email';

    const UNLOCK_STRATEGY_BOTH = 'both';

    public function getAuthPassword()
    {
        return $this->encrypted_password;
    }

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        if ($this->table) {
            return  ['scope' => $this->table];
        }

        return [];
    }

    public function hasVerifiedEmail(): bool
    {
        $isEnableVerification = config('auth.verification.'.$this->getTable().'.enable');

        return ! $isEnableVerification || ! is_null($this->confirmed_at);
    }

    public function markEmailAsVerified(): bool
    {
        return $this->forceFill([
            'confirmed_at' => $this->freshTimestamp(),
            'confirmation_token' => null,
            'confirmation_sent_at' => null,
        ])->save();
    }

    public function sendEmailVerificationNotification()
    {
        $this->forceFill([
            'confirmation_token' => Hash::make(Str::random(8)),
            'confirmation_sent_at' => $this->freshTimestamp(),
        ])->save();

        $this->notify(new VerifyEmailNotification());
    }

    public function sendPasswordResetNotification($token = '')
    {
        $token = Hash::make(Str::random(8));

        $this->forceFill([
            'reset_password_token' => $token,
            'reset_password_sent_at' => $this->freshTimestamp(),
        ])->save();

        $this->notify(new ResetPasswordNotification($token));
    }

    public function increaseFailedAttempt()
    {
        $this->increment('failed_attempts');
    }

    public function isMaxFailedAttempts()
    {
        $maxAttempts = config('auth.limiter.'.$this->table.'.max_attempts');

        return $this->failed_attempts >= $maxAttempts;
    }

    public function isLocked()
    {
        if (is_null($this->locked_at)) {
            return false;
        }

        $unlockStrategy = config('auth.limiter.'.$this->table.'.unlock_strategy');

        if ($unlockStrategy == self::UNLOCK_STRATEGY_EMAIL) {
            return true;
        }

        $unlockIn = config('auth.limiter.'.$this->table.'.unlock_in');

        $timeUnlock = $this->locked_at->addMinutes($unlockIn);

        return Carbon::now()->isBefore($timeUnlock);
    }

    public function lock()
    {
        $isUnlockByEmail = in_array(
            config('auth.limiter.'.$this->getTable().'.unlock_strategy'),
            [self::UNLOCK_STRATEGY_EMAIL, self::UNLOCK_STRATEGY_BOTH]
        );

        if (! $isUnlockByEmail) {
            $this->forceFill(['locked_at' => $this->freshTimestamp()])->save();

            return;
        }

        $token = Hash::make(Str::random(8));

        $this->forceFill([
            'locked_at' => $this->freshTimestamp(),
            'unlock_token' => $token,
        ])->save();

        $this->notify(new UnlockEmailNotification($token));
    }

    public function releaseLock()
    {
        $this->forceFill([
            'locked_at' => null,
            'unlock_token' => null,
            'failed_attempts' => 0,
        ])->save();
    }

    public static function boot()
    {
        parent::boot();

        static::creating(function ($user) {
            if ($user->password) {
                $user->encrypted_password = Hash::make($user->password);
                $user->password = null;
                $user->password_confirmation = null;
            }
        });

        static::updating(function ($user) {
            if ($user->password) {
                $user->encrypted_password = Hash::make($user->password);
                $user->password = null;
                $user->password_confirmation = null;
            }
        });
    }
}
