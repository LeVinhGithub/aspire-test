<?php

namespace App\Services;

use App\Models\JobOpening;
use Exception;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use StorageSupport;

class JobOpeningService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = JobOpening::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'department', 'startWith', data_get($queries, 'job_openings.department')],
            ['orWhere', 'position', 'startWith', data_get($queries, 'job_openings.position')],
            ['orWhere', 'occupation_type_id', '=', data_get($queries, 'job_openings.occupation_type_id')],
            ['orWhere', 'location_id', '=', data_get($queries, 'job_openings.overseas_territory_id')],
            ['orWhere', 'income_range_id', '=', data_get($queries, 'job_openings.income_range_id')],
            ['orWhere', 'job_description', 'startWith', data_get($queries, 'job_openings.job_description')],
            ['orWhere', 'is_remote_available', '=', data_get($queries, 'job_openings.is_remote_available')],
            ['orWhere', 'employment_status_id', '=', data_get($queries, 'job_openings.employment_status_id')],
            ['orWhere', 'company_id', '=', data_get($queries, 'job_openings.company_id')],
            ['orWhere', 'trial_period', 'startWith', data_get($queries, 'job_openings.trial_period')],
            ['orWhere', 'working_hours', 'startWith', data_get($queries, 'job_openings.working_hours')],
            ['orWhere', 'avg_overtime_hours', 'startWith', data_get($queries, 'job_openings.avg_overtime_hours')],
            ['orWhere', 'trial_period_conditions', 'startWith', data_get($queries, 'job_openings.trial_period_conditions')],
            ['orWhere', 'workplace', 'startWith', data_get($queries, 'job_openings.workplace')],
            ['orWhere', 'qualification', 'startWith', data_get($queries, 'job_openings.qualification')],
            ['orWhere', 'benefits', 'startWith', data_get($queries, 'job_openings.benefits')],
            ['orWhere', 'vacation', 'startWith', data_get($queries, 'job_openings.vacation')],
            ['orWhere', 'bonus', 'startWith', data_get($queries, 'job_openings.bonus')],
            ['orWhere', 'vacation', 'startWith', data_get($queries, 'job_openings.vacation')],
            ['orWhere', 'vacation', 'startWith', data_get($queries, 'job_openings.vacation')],
            ['orWhere', 'bonus', 'startWith', data_get($queries, 'job_openings.bonuses')],
            ['orWhere', 'promotion', 'startWith', data_get($queries, 'job_openings.promotion')],
            ['orWhere', 'appeal_point', 'startWith', data_get($queries, 'job_openings.appeal_point')],
            ['orWhere', 'passive_smoking_countermeasure_id', '=', data_get($queries, 'job_openings.passive_smoking_countermeasure_id')],
            ['orWhere', 'career_direction_id', '=', data_get($queries, 'job_openings.career_direction_id')],
            ['orWhere', 'job_title_id', '=', data_get($queries, 'job_openings.job_title_id')],
            ['orWhere', 'future_career_path', 'startWith', data_get($queries, 'job_openings.career_path')],
            ['orWhere', 'trending_keywords', 'startWith', data_get($queries, 'job_openings.trending_keywords')],
            ['orWhere', 'business_trip_availability', '=', data_get($queries, 'job_openings.business_trip_availability')],
            ['orWhere', 'transfers', '=', data_get($queries, 'job_openings.transfers')],
            ['orWhere', 'publication_start_date', '=', data_get($queries, 'job_openings.publication_start_date')],
            ['orWhere', 'publication_end_date', '=', data_get($queries, 'job_openings.publication_end_date')],
            ['orWhere', 'slug', 'startWith', data_get($queries, 'job_openings.slug')],
            ['orWhere', 'is_recommended', '=', data_get($queries, 'job_openings.is_recommended')],
            ['orWhere', 'is_recommended', '=', data_get($queries, 'job_openings.is_recommended')],
            ['orWhere', 'status', '=', data_get($queries, 'job_openings.status')],
            ['orWhere', 'status', '=', data_get($queries, 'job_openings.status')],
            ['orWhere', 'status', '=', data_get($queries, 'job_openings.status')],
            ['orWhere', 'pv', '=', data_get($queries, 'job_openings.pv')],
            ['orWhere', 'pv', '=', data_get($queries, 'job_openings.pv')],
            ['orWhere', 'pv', '=', data_get($queries, 'job_openings.pv')],
        ]);

        $queryBuilder->with(['jobApplications', 'jobOpeningFavorites', 'jobOpeningValuedCompetencies', 'company', 'jobTitle']);

        $queryBuilder->orderBy('created_at', 'desc');

        return $queryBuilder->paginate(
            data_get($queries, 'pagination_limit', config('app.pagination.limit')),
            ['*'],
            'pagination_page',
            data_get($queries, 'pagination_page', 1),
        );
    }

        public function show(string $id): JobOpening
        {
            $jobOpening = JobOpening::findOrFail($id);
            $jobOpening->load(['jobApplications', 'jobOpeningFavorites', 'jobOpeningValuedCompetencies', 'company', 'jobTitle']);

            return $jobOpening;
        }

        public function create(array $input): JobOpening
        {
            $storedFiles = [];
            DB::beginTransaction();
            try {
                $jobOpening = JobOpening::create($input);

                if (isset($input['image']) && ! empty($input['image'])) {
                    $image = StorageSupport::files(
                        $input['image']
                    );
                    $jobOpening->saveImage($image);
                    array_push($storedFiles, $image);
                }
                DB::commit();
                $jobOpening->load(['jobApplications', 'jobOpeningFavorites', 'jobOpeningValuedCompetencies', 'jobTitle']);

                return $jobOpening;
            } catch (Exception $e) {
                DB::rollBack();
                if (! empty($storedFiles)) {
                    StorageSupport::remove(Arr::pluck($storedFiles, 'filename'));
                }
                throw $e;
            }
        }

        public function update(array $input, string $id): JobOpening
        {
            $storedFiles = [];
            DB::beginTransaction();
            try {
                $jobOpening = JobOpening::findOrFail($id);
                $jobOpening->update($input);

                if (isset($input['image'])) {
                    if (get_class($input['image']) == UploadedFile::class) {
                        $jobOpening->image()->update([
                            'deleted' => true,
                        ]);
                        $image = StorageSupport::files(
                            $input['image']
                        );
                        $jobOpening->saveImage($image);
                        array_push($storedFiles, $image);
                    } elseif (empty($input['image'])) {
                        $jobOpening->image()->update([
                            'deleted' => true,
                        ]);
                    }
                }
                DB::commit();
                $jobOpening->load(['jobApplications', 'jobOpeningFavorites', 'jobOpeningValuedCompetencies', 'jobTitle', 'jobTitle']);

                return $jobOpening;
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
                $jobOpening = JobOpening::findOrFail($id);
                $jobOpening->_storageAttachments()->update(['deleted' => true]);
                $deleted = JobOpening::destroy($id);
                DB::commit();

                return $deleted;
            } catch (Exception $e) {
                DB::rollBack();
                throw $e;
            }
        }
}
