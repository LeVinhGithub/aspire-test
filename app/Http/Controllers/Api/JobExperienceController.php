<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\JobExperience\CreateJobExperienceRequest;
use App\Http\Requests\JobExperience\UpdateJobExperienceRequest;
use App\Http\Resources\JobExperience\CreateJobExperienceResource;
use App\Http\Resources\JobExperience\FilterJobExperienceCollection;
use App\Http\Resources\JobExperience\UpdateJobExperienceResource;
use App\Services\JobExperienceService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class JobExperienceController extends Controller
{
    protected JobExperienceService $jobExperienceService;

    public function __construct(JobExperienceService $jobExperienceService)
    {
        $this->jobExperienceService = $jobExperienceService;
    }

    public function filter(Request $request): FilterJobExperienceCollection
    {
        $jobExperiences = $this->jobExperienceService->filter($request->query());

        return new FilterJobExperienceCollection($jobExperiences);
    }

    public function create(CreateJobExperienceRequest $request): CreateJobExperienceResource
    {
        $jobExperience = $this->jobExperienceService->create($request->all());

        return new CreateJobExperienceResource($jobExperience);
    }

    public function update(UpdateJobExperienceRequest $request, string $id): UpdateJobExperienceResource
    {
        $jobExperience = $this->jobExperienceService->update($request->all(), $id);

        return new UpdateJobExperienceResource($jobExperience);
    }

    public function delete(string $id): JsonResponse
    {
        $this->jobExperienceService->delete($id);

        return response()->json(null);
    }
}
