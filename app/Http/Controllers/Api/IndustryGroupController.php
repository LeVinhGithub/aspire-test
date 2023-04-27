<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\IndustryGroup\FilterIndustryGroupCollection;
use App\Services\IndustryGroupService;
use Illuminate\Http\Request;

class IndustryGroupController extends Controller
{
    protected IndustryGroupService $industryGroupService;

    public function __construct(IndustryGroupService $industryGroupService)
    {
        $this->industryGroupService = $industryGroupService;
    }

    public function filter(Request $request): FilterIndustryGroupCollection
    {
        $industryGroups = $this->industryGroupService->filter($request->query());

        return new FilterIndustryGroupCollection($industryGroups);
    }
}
