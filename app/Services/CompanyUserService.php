<?php

namespace App\Services;

use App\Models\CompanyUser;
use Exception;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use StorageSupport;

class CompanyUserService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = CompanyUser::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'company_id', '=', data_get($queries, 'company_users.company_id')],
            ['orWhere', 'full_name', 'startWith', data_get($queries, 'company_users.full_name')],
            ['orWhere', 'position', 'startWith', data_get($queries, 'company_users.position')],
            ['orWhere', 'email', 'startWith', data_get($queries, 'company_users.email')],
            ['orWhere', 'role', '=', data_get($queries, 'company_users.role')],
            ['orWhere', 'phone_number', 'startWith', data_get($queries, 'company_users.phone_number')],
        ]);

        $queryBuilder->orderBy('created_at', 'desc');

        return $queryBuilder->paginate(
            data_get($queries, 'pagination_limit', config('app.pagination.limit')),
            ['*'],
            'pagination_page',
            data_get($queries, 'pagination_page', 1),
        );
    }

        public function show(string $id): CompanyUser
        {
            $companyUser = CompanyUser::findOrFail($id);

            return $companyUser;
        }

        public function create(array $input): CompanyUser
        {
            $storedFiles = [];
            DB::beginTransaction();
            try {
                $companyUser = CompanyUser::create($input);

                if (isset($input['photo']) && ! empty($input['photo'])) {
                    $photo = StorageSupport::files(
                        $input['photo']
                    );
                    $companyUser->savePhoto($photo);
                    array_push($storedFiles, $photo);
                }
                DB::commit();

                return $companyUser;
            } catch (Exception $e) {
                DB::rollBack();
                if (! empty($storedFiles)) {
                    StorageSupport::remove(Arr::pluck($storedFiles, 'filename'));
                }
                throw $e;
            }
        }

        public function update(array $input, string $id): CompanyUser
        {
            $storedFiles = [];
            DB::beginTransaction();
            try {
                $companyUser = CompanyUser::findOrFail($id);
                $companyUser->update($input);

                if (isset($input['photo'])) {
                    if (get_class($input['photo']) == UploadedFile::class) {
                        $companyUser->photo()->update([
                            'deleted' => true,
                        ]);
                        $photo = StorageSupport::files(
                            $input['photo']
                        );
                        $companyUser->savePhoto($photo);
                        array_push($storedFiles, $photo);
                    } elseif (empty($input['photo'])) {
                        $companyUser->photo()->update([
                            'deleted' => true,
                        ]);
                    }
                }
                DB::commit();

                return $companyUser;
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
                $companyUser = CompanyUser::findOrFail($id);
                $companyUser->_storageAttachments()->update(['deleted' => true]);
                $deleted = CompanyUser::destroy($id);
                DB::commit();

                return $deleted;
            } catch (Exception $e) {
                DB::rollBack();
                throw $e;
            }
        }
}
