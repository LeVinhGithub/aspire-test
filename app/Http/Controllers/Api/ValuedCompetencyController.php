<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ValuedCompetency\FilterValuedCompetencyCollection;
use App\Services\ValuedCompetencyService;
use Illuminate\Http\Request;

class ValuedCompetencyController extends Controller
{
    protected ValuedCompetencyService $valuedCompetencyService;

    public function __construct(ValuedCompetencyService $valuedCompetencyService)
    {
        $this->valuedCompetencyService = $valuedCompetencyService;
    }

    public function filter(Request $request): FilterValuedCompetencyCollection
    {
        $valuedCompetencies = $this->valuedCompetencyService->filter($request->query());

        return new FilterValuedCompetencyCollection($valuedCompetencies);
    }
}
