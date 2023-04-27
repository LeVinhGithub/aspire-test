<?php

namespace App\Listeners\Auth;

use Illuminate\Auth\Events\Login;

class ReleaseLock
{
    public function handle(Login $event)
    {
        $event->user->releaseLock();
    }
}
