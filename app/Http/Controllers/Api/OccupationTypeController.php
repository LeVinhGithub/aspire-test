<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\OccupationType\FilterOccupationTypeCollection;
use App\Services\OccupationTypeService;
use Illuminate\Http\Request;

class OccupationTypeController extends Controller
{
    protected OccupationTypeService $occupationTypeService;

    public function __construct(OccupationTypeService $occupationTypeService)
    {
        $this->occupationTypeService = $occupationTypeService;
    }

    public function filter(Request $request): FilterOccupationTypeCollection
    {
        $occupationTypes = $this->occupationTypeService->filter($request->query());

        return new FilterOccupationTypeCollection($occupationTypes);
    }
}
