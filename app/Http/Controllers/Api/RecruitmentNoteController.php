<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\RecruitmentNote\CreateRecruitmentNoteRequest;
use App\Http\Requests\RecruitmentNote\UpdateRecruitmentNoteRequest;
use App\Http\Resources\RecruitmentNote\CreateRecruitmentNoteResource;
use App\Http\Resources\RecruitmentNote\FilterRecruitmentNoteCollection;
use App\Http\Resources\RecruitmentNote\UpdateRecruitmentNoteResource;
use App\Services\RecruitmentNoteService;
use Illuminate\Http\Request;

class RecruitmentNoteController extends Controller
{
    protected RecruitmentNoteService $recruitmentNoteService;

    public function __construct(RecruitmentNoteService $recruitmentNoteService)
    {
        $this->recruitmentNoteService = $recruitmentNoteService;
    }

    public function filter(Request $request): FilterRecruitmentNoteCollection
    {
        $recruitmentNotes = $this->recruitmentNoteService->filter($request->query());

        return new FilterRecruitmentNoteCollection($recruitmentNotes);
    }

    public function create(CreateRecruitmentNoteRequest $request): CreateRecruitmentNoteResource
    {
        $recruitmentNote = $this->recruitmentNoteService->create($request->all());

        return new CreateRecruitmentNoteResource($recruitmentNote);
    }

    public function update(UpdateRecruitmentNoteRequest $request, string $id): UpdateRecruitmentNoteResource
    {
        $recruitmentNote = $this->recruitmentNoteService->update($request->all(), $id);

        return new UpdateRecruitmentNoteResource($recruitmentNote);
    }
}
