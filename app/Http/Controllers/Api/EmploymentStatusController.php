<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\EmploymentStatus\FilterEmploymentStatusCollection;
use App\Services\EmploymentStatusService;
use Illuminate\Http\Request;

class EmploymentStatusController extends Controller
{
    protected EmploymentStatusService $employmentStatusService;

    public function __construct(EmploymentStatusService $employmentStatusService)
    {
        $this->employmentStatusService = $employmentStatusService;
    }

    public function filter(Request $request): FilterEmploymentStatusCollection
    {
        $employmentStatuses = $this->employmentStatusService->filter($request->query());

        return new FilterEmploymentStatusCollection($employmentStatuses);
    }
}
