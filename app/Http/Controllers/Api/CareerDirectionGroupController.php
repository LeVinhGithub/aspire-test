<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CareerDirectionGroup\FilterCareerDirectionGroupCollection;
use App\Services\CareerDirectionGroupService;
use Illuminate\Http\Request;

class CareerDirectionGroupController extends Controller
{
    protected CareerDirectionGroupService $careerDirectionGroupService;

    public function __construct(CareerDirectionGroupService $careerDirectionGroupService)
    {
        $this->careerDirectionGroupService = $careerDirectionGroupService;
    }

    public function filter(Request $request): FilterCareerDirectionGroupCollection
    {
        $careerDirectionGroups = $this->careerDirectionGroupService->filter($request->query());

        return new FilterCareerDirectionGroupCollection($careerDirectionGroups);
    }
}
