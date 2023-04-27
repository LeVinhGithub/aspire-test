<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Restriction\CreateRestrictionRequest;
use App\Http\Requests\Restriction\UpdateRestrictionRequest;
use App\Http\Resources\Restriction\CreateRestrictionResource;
use App\Http\Resources\Restriction\FilterRestrictionCollection;
use App\Http\Resources\Restriction\ShowRestrictionResource;
use App\Http\Resources\Restriction\UpdateRestrictionResource;
use App\Services\RestrictionService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class RestrictionController extends Controller
{
    protected RestrictionService $restrictionService;

    public function __construct(RestrictionService $restrictionService)
    {
        $this->restrictionService = $restrictionService;
    }

    public function filter(Request $request): FilterRestrictionCollection
    {
        $restrictions = $this->restrictionService->filter($request->query());

        return new FilterRestrictionCollection($restrictions);
    }

    public function show(string $id): ShowRestrictionResource
    {
        $restriction = $this->restrictionService->show($id);

        return new ShowRestrictionResource($restriction);
    }

    public function create(CreateRestrictionRequest $request): CreateRestrictionResource
    {
        $restriction = $this->restrictionService->create($request->all());

        return new CreateRestrictionResource($restriction);
    }

    public function update(UpdateRestrictionRequest $request, string $id): UpdateRestrictionResource
    {
        $restriction = $this->restrictionService->update($request->all(), $id);

        return new UpdateRestrictionResource($restriction);
    }

    public function delete(string $id): JsonResponse
    {
        $this->restrictionService->delete($id);

        return response()->json(null);
    }
}
