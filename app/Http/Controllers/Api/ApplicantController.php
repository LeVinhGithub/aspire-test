<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Applicant\CreateApplicantRequest;
use App\Http\Requests\Applicant\UpdateApplicantRequest;
use App\Http\Resources\Applicant\CreateApplicantResource;
use App\Http\Resources\Applicant\FilterApplicantCollection;
use App\Http\Resources\Applicant\ShowApplicantResource;
use App\Http\Resources\Applicant\UpdateApplicantResource;
use App\Services\ApplicantService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ApplicantController extends Controller
{
    protected ApplicantService $applicantService;

    public function __construct(ApplicantService $applicantService)
    {
        $this->applicantService = $applicantService;
    }

    public function filter(Request $request): FilterApplicantCollection
    {
        $applicants = $this->applicantService->filter($request->query());

        return new FilterApplicantCollection($applicants);
    }

    public function show(string $id): ShowApplicantResource
    {
        $applicant = $this->applicantService->show($id);

        return new ShowApplicantResource($applicant);
    }

    public function create(CreateApplicantRequest $request): CreateApplicantResource
    {
        $applicant = $this->applicantService->create($request->all());

        return new CreateApplicantResource($applicant);
    }

    public function update(UpdateApplicantRequest $request, string $id): UpdateApplicantResource
    {
        $applicant = $this->applicantService->update($request->all(), $id);

        return new UpdateApplicantResource($applicant);
    }

    public function delete(string $id): JsonResponse
    {
        $this->applicantService->delete($id);

        return response()->json(null);
    }
}
