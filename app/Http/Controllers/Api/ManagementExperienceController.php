<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ManagementExperience\FilterManagementExperienceCollection;
use App\Services\ManagementExperienceService;
use Illuminate\Http\Request;

class ManagementExperienceController extends Controller
{
    protected ManagementExperienceService $managementExperienceService;

    public function __construct(ManagementExperienceService $managementExperienceService)
    {
        $this->managementExperienceService = $managementExperienceService;
    }

    public function filter(Request $request): FilterManagementExperienceCollection
    {
        $managementExperiences = $this->managementExperienceService->filter($request->query());

        return new FilterManagementExperienceCollection($managementExperiences);
    }
}
