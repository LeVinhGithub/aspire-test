<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CompanyUser\CreateCompanyUserRequest;
use App\Http\Requests\CompanyUser\UpdateCompanyUserRequest;
use App\Http\Resources\CompanyUser\CreateCompanyUserResource;
use App\Http\Resources\CompanyUser\FilterCompanyUserCollection;
use App\Http\Resources\CompanyUser\ShowCompanyUserResource;
use App\Http\Resources\CompanyUser\UpdateCompanyUserResource;
use App\Services\CompanyUserService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CompanyUserController extends Controller
{
    protected CompanyUserService $companyUserService;

    public function __construct(CompanyUserService $companyUserService)
    {
        $this->companyUserService = $companyUserService;
    }

    public function filter(Request $request): FilterCompanyUserCollection
    {
        $companyUsers = $this->companyUserService->filter($request->query());

        return new FilterCompanyUserCollection($companyUsers);
    }

    public function show(string $id): ShowCompanyUserResource
    {
        $companyUser = $this->companyUserService->show($id);

        return new ShowCompanyUserResource($companyUser);
    }

    public function create(CreateCompanyUserRequest $request): CreateCompanyUserResource
    {
        $companyUser = $this->companyUserService->create($request->all());

        return new CreateCompanyUserResource($companyUser);
    }

    public function update(UpdateCompanyUserRequest $request, string $id): UpdateCompanyUserResource
    {
        $companyUser = $this->companyUserService->update($request->all(), $id);

        return new UpdateCompanyUserResource($companyUser);
    }

    public function delete(string $id): JsonResponse
    {
        $this->companyUserService->delete($id);

        return response()->json(null);
    }
}
