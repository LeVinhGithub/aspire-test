<?php

namespace App\Listeners\Auth;

use Illuminate\Auth\Events\Failed;

class ValidateFailedAttempt
{
    public function handle(Failed $event)
    {
        if (! $event->user || $event->user->isLocked()) {
            return;
        }

        $event->user->increaseFailedAttempt();

        if ($event->user->isMaxFailedAttempts()) {
            $event->user->lock();
        }
    }
}
