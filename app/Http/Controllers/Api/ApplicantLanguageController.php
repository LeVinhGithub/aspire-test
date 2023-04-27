<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ApplicantLanguage\CreateApplicantLanguageRequest;
use App\Http\Requests\ApplicantLanguage\UpdateApplicantLanguageRequest;
use App\Http\Resources\ApplicantLanguage\CreateApplicantLanguageResource;
use App\Http\Resources\ApplicantLanguage\FilterApplicantLanguageCollection;
use App\Http\Resources\ApplicantLanguage\UpdateApplicantLanguageResource;
use App\Services\ApplicantLanguageService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ApplicantLanguageController extends Controller
{
    protected ApplicantLanguageService $applicantLanguageService;

    public function __construct(ApplicantLanguageService $applicantLanguageService)
    {
        $this->applicantLanguageService = $applicantLanguageService;
    }

    public function filter(Request $request): FilterApplicantLanguageCollection
    {
        $applicantLanguages = $this->applicantLanguageService->filter($request->query());

        return new FilterApplicantLanguageCollection($applicantLanguages);
    }

    public function create(CreateApplicantLanguageRequest $request): CreateApplicantLanguageResource
    {
        $applicantLanguage = $this->applicantLanguageService->create($request->all());

        return new CreateApplicantLanguageResource($applicantLanguage);
    }

    public function update(UpdateApplicantLanguageRequest $request, string $id): UpdateApplicantLanguageResource
    {
        $applicantLanguage = $this->applicantLanguageService->update($request->all(), $id);

        return new UpdateApplicantLanguageResource($applicantLanguage);
    }

    public function delete(string $id): JsonResponse
    {
        $this->applicantLanguageService->delete($id);

        return response()->json(null);
    }
}
