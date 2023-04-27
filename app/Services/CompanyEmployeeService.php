<?php

namespace App\Services;

use App\Models\CompanyEmployee;
use Exception;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use StorageSupport;

class CompanyEmployeeService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = CompanyEmployee::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'name', 'startWith', data_get($queries, 'companies.name')],
            ['orWhere', 'location', 'startWith', data_get($queries, 'companies.location')],
            ['orWhere', 'launched_year', 'startWith', data_get($queries, 'companies.launched_year')],
            ['orWhere', 'business_details', 'startWith', data_get($queries, 'companies.business_details')],
            ['orWhere', 'number_of_employees', '=', data_get($queries, 'companies.number_of_employees')],
            ['orWhere', 'industry_id', '=', data_get($queries, 'companies.industry_id')],
            ['orWhere', 'mission', 'startWith', data_get($queries, 'companies.mission')],
            ['orWhere', 'vision', 'startWith', data_get($queries, 'companies.vision')],
            ['orWhere', 'value', 'startWith', data_get($queries, 'companies.value')],
            ['orWhere', 'representative_profile', 'startWith', data_get($queries, 'companies.representative_profile')],
            ['orWhere', 'listing_classification', 'startWith', data_get($queries, 'companies.ipo')],
            ['orWhere', 'representative_name', 'startWith', data_get($queries, 'companies.representative_name')],
            ['orWhere', 'slug', 'startWith', data_get($queries, 'companies.slug')],
            ['orWhere', 'capital', 'startWith', data_get($queries, 'companies.capital')],
            ['orWhere', 'company_id', '=', data_get($queries, 'company_employees.company_id')],
            ['orWhere', 'full_name', 'startWith', data_get($queries, 'company_employees.full_name')],
            ['orWhere', 'profile', 'startWith', data_get($queries, 'company_employees.profile')],
            ['orWhere', 'is_high_rank_employee', '=', data_get($queries, 'company_employees.is_high_rank_employee')],
        ]);

        $queryBuilder->with(['company']);

        $queryBuilder->orderBy('created_at', 'desc');

        return $queryBuilder->paginate(
            data_get($queries, 'pagination_limit', config('app.pagination.limit')),
            ['*'],
            'pagination_page',
            data_get($queries, 'pagination_page', 1),
        );
    }

        public function show(string $id): CompanyEmployee
        {
            $companyEmployee = CompanyEmployee::findOrFail($id);
            $companyEmployee->load(['company']);

            return $companyEmployee;
        }

        public function create(array $input): CompanyEmployee
        {
            $storedFiles = [];
            DB::beginTransaction();
            try {
                $companyEmployee = CompanyEmployee::create($input);

                if (isset($input['photo']) && ! empty($input['photo'])) {
                    $photo = StorageSupport::files(
                        $input['photo']
                    );
                    $companyEmployee->savePhoto($photo);
                    array_push($storedFiles, $photo);
                }
                DB::commit();
                $companyEmployee->load(['company']);

                return $companyEmployee;
            } catch (Exception $e) {
                DB::rollBack();
                if (! empty($storedFiles)) {
                    StorageSupport::remove(Arr::pluck($storedFiles, 'filename'));
                }
                throw $e;
            }
        }

        public function update(array $input, string $id): CompanyEmployee
        {
            $storedFiles = [];
            DB::beginTransaction();
            try {
                $companyEmployee = CompanyEmployee::findOrFail($id);
                $companyEmployee->update($input);

                if (isset($input['photo'])) {
                    if (get_class($input['photo']) == UploadedFile::class) {
                        $companyEmployee->photo()->update([
                            'deleted' => true,
                        ]);
                        $photo = StorageSupport::files(
                            $input['photo']
                        );
                        $companyEmployee->savePhoto($photo);
                        array_push($storedFiles, $photo);
                    } elseif (empty($input['photo'])) {
                        $companyEmployee->photo()->update([
                            'deleted' => true,
                        ]);
                    }
                }
                DB::commit();
                $companyEmployee->load(['company']);

                return $companyEmployee;
            } catch (Exception $e) {
                DB::rollBack();
                if (! empty($storedFiles)) {
                    StorageSupport::remove(Arr::pluck($storedFiles, 'filename'));
                }
                throw $e;
            }
        }

        public function delete(string $id): int
        {
            DB::beginTransaction();
            try {
                $companyEmployee = CompanyEmployee::findOrFail($id);
                $companyEmployee->_storageAttachments()->update(['deleted' => true]);
                $deleted = CompanyEmployee::destroy($id);
                DB::commit();

                return $deleted;
            } catch (Exception $e) {
                DB::rollBack();
                throw $e;
            }
        }
}
