<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TargetListApplicant\CreateTargetListApplicantRequest;
use App\Http\Resources\TargetListApplicant\CreateTargetListApplicantResource;
use App\Services\TargetListApplicantService;
use Illuminate\Http\JsonResponse;

class TargetListApplicantController extends Controller
{
    protected TargetListApplicantService $targetListApplicantService;

    public function __construct(TargetListApplicantService $targetListApplicantService)
    {
        $this->targetListApplicantService = $targetListApplicantService;
    }

    public function create(CreateTargetListApplicantRequest $request): CreateTargetListApplicantResource
    {
        $targetListApplicant = $this->targetListApplicantService->create($request->all());

        return new CreateTargetListApplicantResource($targetListApplicant);
    }

    public function delete(string $id): JsonResponse
    {
        $this->targetListApplicantService->delete($id);

        return response()->json(null);
    }
}
