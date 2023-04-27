<?php

namespace App\Supports\Facedes;

use Illuminate\Support\Facades\Facade;

class StorageSupportFacade extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'StorageSupport';
    }
}
