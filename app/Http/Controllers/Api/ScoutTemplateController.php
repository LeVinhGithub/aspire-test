<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ScoutTemplate\CreateScoutTemplateRequest;
use App\Http\Requests\ScoutTemplate\UpdateScoutTemplateRequest;
use App\Http\Resources\ScoutTemplate\CreateScoutTemplateResource;
use App\Http\Resources\ScoutTemplate\FilterScoutTemplateCollection;
use App\Http\Resources\ScoutTemplate\ShowScoutTemplateResource;
use App\Http\Resources\ScoutTemplate\UpdateScoutTemplateResource;
use App\Services\ScoutTemplateService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ScoutTemplateController extends Controller
{
    protected ScoutTemplateService $scoutTemplateService;

    public function __construct(ScoutTemplateService $scoutTemplateService)
    {
        $this->scoutTemplateService = $scoutTemplateService;
    }

    public function filter(Request $request): FilterScoutTemplateCollection
    {
        $scoutTemplates = $this->scoutTemplateService->filter($request->query());

        return new FilterScoutTemplateCollection($scoutTemplates);
    }

    public function show(string $id): ShowScoutTemplateResource
    {
        $scoutTemplate = $this->scoutTemplateService->show($id);

        return new ShowScoutTemplateResource($scoutTemplate);
    }

    public function create(CreateScoutTemplateRequest $request): CreateScoutTemplateResource
    {
        $scoutTemplate = $this->scoutTemplateService->create($request->all());

        return new CreateScoutTemplateResource($scoutTemplate);
    }

    public function update(UpdateScoutTemplateRequest $request, string $id): UpdateScoutTemplateResource
    {
        $scoutTemplate = $this->scoutTemplateService->update($request->all(), $id);

        return new UpdateScoutTemplateResource($scoutTemplate);
    }

    public function delete(string $id): JsonResponse
    {
        $this->scoutTemplateService->delete($id);

        return response()->json(null);
    }
}
