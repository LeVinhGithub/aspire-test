<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Skill\CreateSkillRequest;
use App\Http\Requests\Skill\UpdateSkillRequest;
use App\Http\Resources\Skill\CreateSkillResource;
use App\Http\Resources\Skill\FilterSkillCollection;
use App\Http\Resources\Skill\UpdateSkillResource;
use App\Services\SkillService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    protected SkillService $skillService;

    public function __construct(SkillService $skillService)
    {
        $this->skillService = $skillService;
    }

    public function filter(Request $request): FilterSkillCollection
    {
        $skills = $this->skillService->filter($request->query());

        return new FilterSkillCollection($skills);
    }

    public function create(CreateSkillRequest $request): CreateSkillResource
    {
        $skill = $this->skillService->create($request->all());

        return new CreateSkillResource($skill);
    }

    public function update(UpdateSkillRequest $request, string $id): UpdateSkillResource
    {
        $skill = $this->skillService->update($request->all(), $id);

        return new UpdateSkillResource($skill);
    }

    public function delete(string $id): JsonResponse
    {
        $this->skillService->delete($id);

        return response()->json(null);
    }
}
