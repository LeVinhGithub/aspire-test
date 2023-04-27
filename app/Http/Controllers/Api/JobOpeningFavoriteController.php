<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\JobOpeningFavorite\CreateJobOpeningFavoriteRequest;
use App\Http\Requests\JobOpeningFavorite\UpdateJobOpeningFavoriteRequest;
use App\Http\Resources\JobOpeningFavorite\CreateJobOpeningFavoriteResource;
use App\Http\Resources\JobOpeningFavorite\FilterJobOpeningFavoriteCollection;
use App\Http\Resources\JobOpeningFavorite\ShowJobOpeningFavoriteResource;
use App\Http\Resources\JobOpeningFavorite\UpdateJobOpeningFavoriteResource;
use App\Services\JobOpeningFavoriteService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class JobOpeningFavoriteController extends Controller
{
    protected JobOpeningFavoriteService $jobOpeningFavoriteService;

    public function __construct(JobOpeningFavoriteService $jobOpeningFavoriteService)
    {
        $this->jobOpeningFavoriteService = $jobOpeningFavoriteService;
    }

    public function filter(Request $request): FilterJobOpeningFavoriteCollection
    {
        $jobOpeningFavorites = $this->jobOpeningFavoriteService->filter($request->query());

        return new FilterJobOpeningFavoriteCollection($jobOpeningFavorites);
    }

    public function show(string $id): ShowJobOpeningFavoriteResource
    {
        $jobOpeningFavorite = $this->jobOpeningFavoriteService->show($id);

        return new ShowJobOpeningFavoriteResource($jobOpeningFavorite);
    }

    public function create(CreateJobOpeningFavoriteRequest $request): CreateJobOpeningFavoriteResource
    {
        $jobOpeningFavorite = $this->jobOpeningFavoriteService->create($request->all());

        return new CreateJobOpeningFavoriteResource($jobOpeningFavorite);
    }

    public function update(UpdateJobOpeningFavoriteRequest $request, string $id): UpdateJobOpeningFavoriteResource
    {
        $jobOpeningFavorite = $this->jobOpeningFavoriteService->update($request->all(), $id);

        return new UpdateJobOpeningFavoriteResource($jobOpeningFavorite);
    }

    public function delete(string $id): JsonResponse
    {
        $this->jobOpeningFavoriteService->delete($id);

        return response()->json(null);
    }
}
