<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TargetList\CreateTargetListRequest;
use App\Http\Requests\TargetList\UpdateTargetListRequest;
use App\Http\Resources\TargetList\CreateTargetListResource;
use App\Http\Resources\TargetList\FilterTargetListCollection;
use App\Http\Resources\TargetList\ShowTargetListResource;
use App\Http\Resources\TargetList\UpdateTargetListResource;
use App\Services\TargetListService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TargetListController extends Controller
{
    protected TargetListService $targetListService;

    public function __construct(TargetListService $targetListService)
    {
        $this->targetListService = $targetListService;
    }

    public function filter(Request $request): FilterTargetListCollection
    {
        $targetLists = $this->targetListService->filter($request->query());

        return new FilterTargetListCollection($targetLists);
    }

    public function show(string $id): ShowTargetListResource
    {
        $targetList = $this->targetListService->show($id);

        return new ShowTargetListResource($targetList);
    }

    public function create(CreateTargetListRequest $request): CreateTargetListResource
    {
        $targetList = $this->targetListService->create($request->all());

        return new CreateTargetListResource($targetList);
    }

    public function update(UpdateTargetListRequest $request, string $id): UpdateTargetListResource
    {
        $targetList = $this->targetListService->update($request->all(), $id);

        return new UpdateTargetListResource($targetList);
    }

    public function delete(string $id): JsonResponse
    {
        $this->targetListService->delete($id);

        return response()->json(null);
    }
}
