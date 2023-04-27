<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PassiveSmokingCountermeasure\FilterPassiveSmokingCountermeasureCollection;
use App\Services\PassiveSmokingCountermeasureService;
use Illuminate\Http\Request;

class PassiveSmokingCountermeasureController extends Controller
{
    protected PassiveSmokingCountermeasureService $passiveSmokingCountermeasureService;

    public function __construct(PassiveSmokingCountermeasureService $passiveSmokingCountermeasureService)
    {
        $this->passiveSmokingCountermeasureService = $passiveSmokingCountermeasureService;
    }

    public function filter(Request $request): FilterPassiveSmokingCountermeasureCollection
    {
        $passiveSmokingCountermeasures = $this->passiveSmokingCountermeasureService->filter($request->query());

        return new FilterPassiveSmokingCountermeasureCollection($passiveSmokingCountermeasures);
    }
}
