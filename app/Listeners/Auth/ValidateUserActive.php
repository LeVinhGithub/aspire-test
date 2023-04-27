<?php

namespace App\Listeners\Auth;

use Illuminate\Auth\Events\Validated;

class ValidateUserActive
{
    public function handle(Validated $event)
    {
        if ($event->user->isLocked()) {
            abort(403, 'Account is locked');
        }

        if (! $event->user->hasVerifiedEmail()) {
            abort(403, 'Email has not verified');
        }
    }
}
