<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\SchoolType\FilterSchoolTypeCollection;
use App\Services\SchoolTypeService;
use Illuminate\Http\Request;

class SchoolTypeController extends Controller
{
    protected SchoolTypeService $schoolTypeService;

    public function __construct(SchoolTypeService $schoolTypeService)
    {
        $this->schoolTypeService = $schoolTypeService;
    }

    public function filter(Request $request): FilterSchoolTypeCollection
    {
        $schoolTypes = $this->schoolTypeService->filter($request->query());

        return new FilterSchoolTypeCollection($schoolTypes);
    }
}
