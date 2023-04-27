<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\JobGroup\FilterJobGroupCollection;
use App\Services\JobGroupService;
use Illuminate\Http\Request;

class JobGroupController extends Controller
{
    protected JobGroupService $jobGroupService;

    public function __construct(JobGroupService $jobGroupService)
    {
        $this->jobGroupService = $jobGroupService;
    }

    public function filter(Request $request): FilterJobGroupCollection
    {
        $jobGroups = $this->jobGroupService->filter($request->query());

        return new FilterJobGroupCollection($jobGroups);
    }
}
