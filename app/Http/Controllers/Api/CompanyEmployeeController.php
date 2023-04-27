<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CompanyEmployee\CreateCompanyEmployeeRequest;
use App\Http\Requests\CompanyEmployee\UpdateCompanyEmployeeRequest;
use App\Http\Resources\CompanyEmployee\CreateCompanyEmployeeResource;
use App\Http\Resources\CompanyEmployee\FilterCompanyEmployeeCollection;
use App\Http\Resources\CompanyEmployee\ShowCompanyEmployeeResource;
use App\Http\Resources\CompanyEmployee\UpdateCompanyEmployeeResource;
use App\Services\CompanyEmployeeService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CompanyEmployeeController extends Controller
{
    protected CompanyEmployeeService $companyEmployeeService;

    public function __construct(CompanyEmployeeService $companyEmployeeService)
    {
        $this->companyEmployeeService = $companyEmployeeService;
    }

    public function filter(Request $request): FilterCompanyEmployeeCollection
    {
        $companyEmployees = $this->companyEmployeeService->filter($request->query());

        return new FilterCompanyEmployeeCollection($companyEmployees);
    }

    public function show(string $id): ShowCompanyEmployeeResource
    {
        $companyEmployee = $this->companyEmployeeService->show($id);

        return new ShowCompanyEmployeeResource($companyEmployee);
    }

    public function create(CreateCompanyEmployeeRequest $request): CreateCompanyEmployeeResource
    {
        $companyEmployee = $this->companyEmployeeService->create($request->all());

        return new CreateCompanyEmployeeResource($companyEmployee);
    }

    public function update(UpdateCompanyEmployeeRequest $request, string $id): UpdateCompanyEmployeeResource
    {
        $companyEmployee = $this->companyEmployeeService->update($request->all(), $id);

        return new UpdateCompanyEmployeeResource($companyEmployee);
    }

    public function delete(string $id): JsonResponse
    {
        $this->companyEmployeeService->delete($id);

        return response()->json(null);
    }
}
