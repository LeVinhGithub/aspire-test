<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\JobApplication\CreateJobApplicationRequest;
use App\Http\Requests\JobApplication\UpdateJobApplicationRequest;
use App\Http\Resources\JobApplication\CreateJobApplicationResource;
use App\Http\Resources\JobApplication\FilterJobApplicationCollection;
use App\Http\Resources\JobApplication\ShowJobApplicationResource;
use App\Http\Resources\JobApplication\UpdateJobApplicationResource;
use App\Services\JobApplicationService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class JobApplicationController extends Controller
{
    protected JobApplicationService $jobApplicationService;

    public function __construct(JobApplicationService $jobApplicationService)
    {
        $this->jobApplicationService = $jobApplicationService;
    }

    public function filter(Request $request): FilterJobApplicationCollection
    {
        $jobApplications = $this->jobApplicationService->filter($request->query());

        return new FilterJobApplicationCollection($jobApplications);
    }

    public function show(string $id): ShowJobApplicationResource
    {
        $jobApplication = $this->jobApplicationService->show($id);

        return new ShowJobApplicationResource($jobApplication);
    }

    public function create(CreateJobApplicationRequest $request): CreateJobApplicationResource
    {
        $jobApplication = $this->jobApplicationService->create($request->all());

        return new CreateJobApplicationResource($jobApplication);
    }

    public function update(UpdateJobApplicationRequest $request, string $id): UpdateJobApplicationResource
    {
        $jobApplication = $this->jobApplicationService->update($request->all(), $id);

        return new UpdateJobApplicationResource($jobApplication);
    }

    public function delete(string $id): JsonResponse
    {
        $this->jobApplicationService->delete($id);

        return response()->json(null);
    }
}
