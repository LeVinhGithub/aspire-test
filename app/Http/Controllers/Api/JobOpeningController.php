<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\JobOpening\CreateJobOpeningRequest;
use App\Http\Requests\JobOpening\UpdateJobOpeningRequest;
use App\Http\Resources\JobOpening\CreateJobOpeningResource;
use App\Http\Resources\JobOpening\FilterJobOpeningCollection;
use App\Http\Resources\JobOpening\ShowJobOpeningResource;
use App\Http\Resources\JobOpening\UpdateJobOpeningResource;
use App\Services\JobOpeningService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class JobOpeningController extends Controller
{
    protected JobOpeningService $jobOpeningService;

    public function __construct(JobOpeningService $jobOpeningService)
    {
        $this->jobOpeningService = $jobOpeningService;
    }

    public function filter(Request $request): FilterJobOpeningCollection
    {
        $jobOpenings = $this->jobOpeningService->filter($request->query());

        return new FilterJobOpeningCollection($jobOpenings);
    }

    public function show(string $id): ShowJobOpeningResource
    {
        $jobOpening = $this->jobOpeningService->show($id);

        return new ShowJobOpeningResource($jobOpening);
    }

    public function create(CreateJobOpeningRequest $request): CreateJobOpeningResource
    {
        $jobOpening = $this->jobOpeningService->create($request->all());

        return new CreateJobOpeningResource($jobOpening);
    }

    public function update(UpdateJobOpeningRequest $request, string $id): UpdateJobOpeningResource
    {
        $jobOpening = $this->jobOpeningService->update($request->all(), $id);

        return new UpdateJobOpeningResource($jobOpening);
    }

    public function delete(string $id): JsonResponse
    {
        $this->jobOpeningService->delete($id);

        return response()->json(null);
    }
}
