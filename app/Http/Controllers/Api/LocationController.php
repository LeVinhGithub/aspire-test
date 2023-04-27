<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Location\FilterLocationCollection;
use App\Services\LocationService;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    protected LocationService $locationService;

    public function __construct(LocationService $locationService)
    {
        $this->locationService = $locationService;
    }

    public function filter(Request $request): FilterLocationCollection
    {
        $locations = $this->locationService->filter($request->query());

        return new FilterLocationCollection($locations);
    }
}
