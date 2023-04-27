<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ApplicantSchool\CreateApplicantSchoolRequest;
use App\Http\Requests\ApplicantSchool\UpdateApplicantSchoolRequest;
use App\Http\Resources\ApplicantSchool\CreateApplicantSchoolResource;
use App\Http\Resources\ApplicantSchool\FilterApplicantSchoolCollection;
use App\Http\Resources\ApplicantSchool\UpdateApplicantSchoolResource;
use App\Services\ApplicantSchoolService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ApplicantSchoolController extends Controller
{
    protected ApplicantSchoolService $applicantSchoolService;

    public function __construct(ApplicantSchoolService $applicantSchoolService)
    {
        $this->applicantSchoolService = $applicantSchoolService;
    }

    public function filter(Request $request): FilterApplicantSchoolCollection
    {
        $applicantSchools = $this->applicantSchoolService->filter($request->query());

        return new FilterApplicantSchoolCollection($applicantSchools);
    }

    public function create(CreateApplicantSchoolRequest $request): CreateApplicantSchoolResource
    {
        $applicantSchool = $this->applicantSchoolService->create($request->all());

        return new CreateApplicantSchoolResource($applicantSchool);
    }

    public function update(UpdateApplicantSchoolRequest $request, string $id): UpdateApplicantSchoolResource
    {
        $applicantSchool = $this->applicantSchoolService->update($request->all(), $id);

        return new UpdateApplicantSchoolResource($applicantSchool);
    }

    public function delete(string $id): JsonResponse
    {
        $this->applicantSchoolService->delete($id);

        return response()->json(null);
    }
}
