<?php

namespace App\Services;

use App\Models\Company;
use Exception;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use StorageSupport;

class CompanyService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = Company::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'name', 'startWith', data_get($queries, 'companies.name')],
            ['orWhere', 'logo', 'startWith', data_get($queries, 'companies.logo')],
            ['orWhere', 'location', 'startWith', data_get($queries, 'companies.location')],
            ['orWhere', 'launched_year', 'startWith', data_get($queries, 'companies.year_founded')],
            ['orWhere', 'business_details', 'startWith', data_get($queries, 'companies.business_details')],
            ['orWhere', 'number_of_employees', '=', data_get($queries, 'companies.number_of_employees')],
            ['orWhere', 'industry_id', '=', data_get($queries, 'companies.industry_id')],
            ['orWhere', 'mission', 'startWith', data_get($queries, 'companies.mission')],
            ['orWhere', 'vision', 'startWith', data_get($queries, 'companies.vision')],
            ['orWhere', 'value', 'startWith', data_get($queries, 'companies.value')],
            ['orWhere', 'representative_photo', 'startWith', data_get($queries, 'companies.representative_photo')],
            ['orWhere', 'representative_profile', 'startWith', data_get($queries, 'companies.representative_profile')],
            ['orWhere', 'listing_classification', 'startWith', data_get($queries, 'companies.ipo')],
            ['orWhere', 'representative_name', 'startWith', data_get($queries, 'companies.representative_name')],
            ['orWhere', 'slug', 'startWith', data_get($queries, 'companies.slug')],
            ['orWhere', 'restrictions.company_id', '=', data_get($queries, 'restrictions.company_id')],
            ['orWhere', 'messages.applicant_id', '=', data_get($queries, 'messages.applicant_id')],
            ['orWhere', 'messages.text', 'startWith', data_get($queries, 'messages.text')],
            ['orWhere', 'messages.reply_to_message_id', '=', data_get($queries, 'messages.reply_to_message_id')],
            ['orWhere', 'messages.applicant_id', '=', data_get($queries, 'messages.applicant_id')],
            ['orWhere', 'messages.text', 'startWith', data_get($queries, 'messages.text')],
            ['orWhere', 'messages.reply_to_message_id', '=', data_get($queries, 'messages.reply_to_message_id')],
            ['orWhere', 'capital', 'startWith', data_get($queries, 'companies.capital')],
        ]);

        $queryBuilder->with(['companyUsers', 'jobOpenings', 'jobOpenings.jobApplications', 'jobOpenings.jobOpeningFavorites', 'jobOpenings.jobOpeningValuedCompetencies', 'messages', 'messages.company', 'messages.company.industry', 'messages.company.industry.companies', 'messages.company.industry.companies.messages', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.messages', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.companyEmployees', 'messages.company.messages', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.messages', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.companyEmployees', 'messages.company', 'messages.company.industry', 'messages.company.industry.companies', 'messages.company.industry.companies.messages', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.messages', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.companyEmployees', 'messages.company.messages', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.messages', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.companyEmployees', 'restrictions', 'industry', 'industry.companies', 'industry.companies.messages', 'industry.companies.messages.company', 'industry.companies.messages.company.companyEmployees', 'industry.companies.messages.company', 'industry.companies.messages.company.companyEmployees', 'industry.companies.messages', 'industry.companies.messages.company', 'industry.companies.messages.company.companyEmployees', 'industry.companies.messages.company', 'industry.companies.messages.company.companyEmployees', 'industry.companies.companyEmployees', 'companyEmployees']);

        $queryBuilder->orderBy('created_at', 'desc');

        return $queryBuilder->paginate(
            data_get($queries, 'pagination_limit', config('app.pagination.limit')),
            ['*'],
            'pagination_page',
            data_get($queries, 'pagination_page', 1),
        );
    }

        public function show(string $id): Company
        {
            $company = Company::findOrFail($id);
            $company->load(['companyUsers', 'jobOpenings', 'jobOpenings.jobApplications', 'jobOpenings.jobOpeningFavorites', 'jobOpenings.jobOpeningValuedCompetencies', 'messages', 'messages.company', 'messages.company.industry', 'messages.company.industry.companies', 'messages.company.industry.companies.messages', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.messages', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.companyEmployees', 'messages.company.messages', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.messages', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.companyEmployees', 'messages.company', 'messages.company.industry', 'messages.company.industry.companies', 'messages.company.industry.companies.messages', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.messages', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.companyEmployees', 'messages.company.messages', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.messages', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.companyEmployees', 'restrictions', 'industry', 'industry.companies', 'industry.companies.messages', 'industry.companies.messages.company', 'industry.companies.messages.company.companyEmployees', 'industry.companies.messages.company', 'industry.companies.messages.company.companyEmployees', 'industry.companies.messages', 'industry.companies.messages.company', 'industry.companies.messages.company.companyEmployees', 'industry.companies.messages.company', 'industry.companies.messages.company.companyEmployees', 'industry.companies.companyEmployees', 'companyEmployees', 'scoutTemplates', 'targetLists', 'targetLists.targetListApplicants', 'recruitmentNotes']);

            return $company;
        }

        public function create(array $input): Company
        {
            $storedFiles = [];
            DB::beginTransaction();
            try {
                $company = Company::create($input);
                $company->restrictions()->create($input['restrictions']);
                $company->messages()->create($input['messages']);

                if (isset($input['logo']) && ! empty($input['logo'])) {
                    $logo = StorageSupport::files(
                        $input['logo']
                    );
                    $company->saveLogo($logo);
                    array_push($storedFiles, $logo);
                }
                if (isset($input['representative_photo']) && ! empty($input['representative_photo'])) {
                    $representative_photo = StorageSupport::files(
                        $input['representative_photo']
                    );
                    $company->saveRepresentative_photo($representative_photo);
                    array_push($storedFiles, $representative_photo);
                }
                if (isset($input['image']) && ! empty($input['image'])) {
                    $image = StorageSupport::files(
                        $input['image']
                    );
                    $company->saveImage($image);
                    array_push($storedFiles, $image);
                }
                DB::commit();
                $company->load(['companyUsers', 'jobOpenings', 'jobOpenings.jobApplications', 'jobOpenings.jobOpeningFavorites', 'jobOpenings.jobOpeningValuedCompetencies', 'messages', 'messages.company', 'messages.company.industry', 'messages.company.industry.companies', 'messages.company.industry.companies.messages', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.messages', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.companyEmployees', 'messages.company.messages', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.messages', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.companyEmployees', 'messages.company', 'messages.company.industry', 'messages.company.industry.companies', 'messages.company.industry.companies.messages', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.messages', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.companyEmployees', 'messages.company.messages', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.messages', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.companyEmployees', 'restrictions', 'industry', 'industry.companies', 'industry.companies.messages', 'industry.companies.messages.company', 'industry.companies.messages.company.companyEmployees', 'industry.companies.messages.company', 'industry.companies.messages.company.companyEmployees', 'industry.companies.messages', 'industry.companies.messages.company', 'industry.companies.messages.company.companyEmployees', 'industry.companies.messages.company', 'industry.companies.messages.company.companyEmployees', 'industry.companies.companyEmployees', 'companyEmployees']);

                return $company;
            } catch (Exception $e) {
                DB::rollBack();
                if (! empty($storedFiles)) {
                    StorageSupport::remove(Arr::pluck($storedFiles, 'filename'));
                }
                throw $e;
            }
        }

        public function update(array $input, string $id): Company
        {
            $storedFiles = [];
            DB::beginTransaction();
            try {
                $company = Company::findOrFail($id);
                $company->update($input);
                $company->restrictions()->updateOrCreate(['id' => data_get($input, 'restrictions.id')], $input['restrictions']);
                $company->messages()->updateOrCreate(['id' => data_get($input, 'messages.id')], $input['messages']);

                if (isset($input['representative_photo'])) {
                    if (get_class($input['representative_photo']) == UploadedFile::class) {
                        $company->representative_photo()->update([
                            'deleted' => true,
                        ]);
                        $representative_photo = StorageSupport::files(
                            $input['representative_photo']
                        );
                        $company->saveRepresentative_photo($representative_photo);
                        array_push($storedFiles, $representative_photo);
                    } elseif (empty($input['representative_photo'])) {
                        $company->representative_photo()->update([
                            'deleted' => true,
                        ]);
                    }
                }
                if (isset($input['image'])) {
                    if (get_class($input['image']) == UploadedFile::class) {
                        $company->image()->update([
                            'deleted' => true,
                        ]);
                        $image = StorageSupport::files(
                            $input['image']
                        );
                        $company->saveImage($image);
                        array_push($storedFiles, $image);
                    } elseif (empty($input['image'])) {
                        $company->image()->update([
                            'deleted' => true,
                        ]);
                    }
                }
                DB::commit();
                $company->load(['companyUsers', 'jobOpenings', 'jobOpenings.jobApplications', 'jobOpenings.jobOpeningFavorites', 'jobOpenings.jobOpeningValuedCompetencies', 'messages', 'messages.company', 'messages.company.industry', 'messages.company.industry.companies', 'messages.company.industry.companies.messages', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.messages', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.companyEmployees', 'messages.company.messages', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.messages', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.companyEmployees', 'messages.company', 'messages.company.industry', 'messages.company.industry.companies', 'messages.company.industry.companies.messages', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.messages', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.messages.company', 'messages.company.industry.companies.messages.company.companyEmployees', 'messages.company.industry.companies.companyEmployees', 'messages.company.messages', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.messages', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.messages.company', 'messages.company.messages.company.companyEmployees', 'messages.company.companyEmployees', 'restrictions', 'industry', 'industry.companies', 'industry.companies.messages', 'industry.companies.messages.company', 'industry.companies.messages.company.companyEmployees', 'industry.companies.messages.company', 'industry.companies.messages.company.companyEmployees', 'industry.companies.messages', 'industry.companies.messages.company', 'industry.companies.messages.company.companyEmployees', 'industry.companies.messages.company', 'industry.companies.messages.company.companyEmployees', 'industry.companies.companyEmployees', 'companyEmployees']);

                return $company;
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
                $company = Company::findOrFail($id);
                $company->_storageAttachments()->update(['deleted' => true]);
                $deleted = Company::destroy($id);
                DB::commit();

                return $deleted;
            } catch (Exception $e) {
                DB::rollBack();
                throw $e;
            }
        }
}
