<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Company\CreateCompanyRequest;
use App\Http\Requests\Company\UpdateCompanyRequest;
use App\Http\Resources\Company\CreateCompanyResource;
use App\Http\Resources\Company\FilterCompanyCollection;
use App\Http\Resources\Company\ShowCompanyResource;
use App\Http\Resources\Company\UpdateCompanyResource;
use App\Services\CompanyService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    protected CompanyService $companyService;

    public function __construct(CompanyService $companyService)
    {
        $this->companyService = $companyService;
    }

    public function filter(Request $request): FilterCompanyCollection
    {
        $companies = $this->companyService->filter($request->query());

        return new FilterCompanyCollection($companies);
    }

    public function show(string $id): ShowCompanyResource
    {
        $company = $this->companyService->show($id);

        return new ShowCompanyResource($company);
    }

    public function create(CreateCompanyRequest $request): CreateCompanyResource
    {
        $company = $this->companyService->create($request->all());

        return new CreateCompanyResource($company);
    }

    public function update(UpdateCompanyRequest $request, string $id): UpdateCompanyResource
    {
        $company = $this->companyService->update($request->all(), $id);

        return new UpdateCompanyResource($company);
    }

    public function delete(string $id): JsonResponse
    {
        $this->companyService->delete($id);

        return response()->json(null);
    }
}
