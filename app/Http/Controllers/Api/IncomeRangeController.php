<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\IncomeRange\FilterIncomeRangeCollection;
use App\Services\IncomeRangeService;
use Illuminate\Http\Request;

class IncomeRangeController extends Controller
{
    protected IncomeRangeService $incomeRangeService;

    public function __construct(IncomeRangeService $incomeRangeService)
    {
        $this->incomeRangeService = $incomeRangeService;
    }

    public function filter(Request $request): FilterIncomeRangeCollection
    {
        $incomeRanges = $this->incomeRangeService->filter($request->query());

        return new FilterIncomeRangeCollection($incomeRanges);
    }
}
