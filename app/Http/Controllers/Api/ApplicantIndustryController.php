<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ApplicantIndustry\CreateApplicantIndustryRequest;
use App\Http\Requests\ApplicantIndustry\UpdateApplicantIndustryRequest;
use App\Http\Resources\ApplicantIndustry\CreateApplicantIndustryResource;
use App\Http\Resources\ApplicantIndustry\FilterApplicantIndustryCollection;
use App\Http\Resources\ApplicantIndustry\UpdateApplicantIndustryResource;
use App\Services\ApplicantIndustryService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ApplicantIndustryController extends Controller
{
    protected ApplicantIndustryService $applicantIndustryService;

    public function __construct(ApplicantIndustryService $applicantIndustryService)
    {
        $this->applicantIndustryService = $applicantIndustryService;
    }

    public function filter(Request $request): FilterApplicantIndustryCollection
    {
        $applicantIndustries = $this->applicantIndustryService->filter($request->query());

        return new FilterApplicantIndustryCollection($applicantIndustries);
    }

    public function create(CreateApplicantIndustryRequest $request): CreateApplicantIndustryResource
    {
        $applicantIndustry = $this->applicantIndustryService->create($request->all());

        return new CreateApplicantIndustryResource($applicantIndustry);
    }

    public function update(UpdateApplicantIndustryRequest $request, string $id): UpdateApplicantIndustryResource
    {
        $applicantIndustry = $this->applicantIndustryService->update($request->all(), $id);

        return new UpdateApplicantIndustryResource($applicantIndustry);
    }

    public function delete(string $id): JsonResponse
    {
        $this->applicantIndustryService->delete($id);

        return response()->json(null);
    }
}
