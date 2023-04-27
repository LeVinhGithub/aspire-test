<?php

namespace App\Services;

use App\Models\Applicant;
use Exception;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use StorageSupport;

class ApplicantService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = Applicant::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'full_name', 'startWith', data_get($queries, 'applicants.full_name')],
            ['orWhere', 'furigana', 'startWith', data_get($queries, 'applicants.furigana')],
            ['orWhere', 'phone_number', 'startWith', data_get($queries, 'applicants.phone_number')],
            ['orWhere', 'birthdate', '=', data_get($queries, 'applicants.dob')],
            ['orWhere', 'location_id', '=', data_get($queries, 'applicants.overseas_territory_id')],
            ['orWhere', 'address', 'startWith', data_get($queries, 'applicants.address')],
            ['orWhere', 'income_range_id', '=', data_get($queries, 'applicants.income_range_id')],
            ['orWhere', 'availability', '=', data_get($queries, 'applicants.availability')],
            ['orWhere', 'resume_file', 'startWith', data_get($queries, 'applicants.resume_file')],
            ['orWhere', 'description', 'startWith', data_get($queries, 'applicants.description')],
            ['orWhere', 'management_experience_id', '=', data_get($queries, 'applicants.management_experience_id')],
            ['orWhere', 'email', 'startWith', data_get($queries, 'applicants.email')],
            ['orWhere', 'gender', '=', data_get($queries, 'applicants.gender')],
            ['orWhere', 'restrictions.company_id', '=', data_get($queries, 'restrictions.company_id')],
            ['orWhere', 'restrictions.applicant_id', '=', data_get($queries, 'restrictions.applicant_id')],
            ['orWhere', 'is_onboarded', '=', data_get($queries, 'applicants.is_onboarded')],
            ['orWhere', 'notes', 'startWith', data_get($queries, 'applicants.notes')],
            ['orWhere', 'current_company_name', 'startWith', data_get($queries, 'applicants.current_company_name')],
            ['orWhere', 'current_company_department', 'startWith', data_get($queries, 'applicants.current_company_department')],
            ['orWhere', 'current_company_position', 'startWith', data_get($queries, 'applicants.current_company_position')],
            ['orWhere', 'confirmation_email_resent_count', '=', data_get($queries, 'applicants.confirmation_email_resent_count')],
            ['orWhere', 'number_of_companies', '=', data_get($queries, 'applicants.number_of_companies')],
            ['orWhere', 'is_suspended', '=', data_get($queries, 'applicants.is_suspended')],
            ['orWhere', 'desired_info', 'startWith', data_get($queries, 'applicants.desired_info')],
            ['orWhere', 'management_experience_years', '=', data_get($queries, 'applicants.management_experience_years')],
        ]);

        $queryBuilder->with(['applicantLanguages', 'applicantSchools', 'applicantIndustries', 'messages', 'jobApplications', 'jobOpeningFavorites', 'jobExperiences', 'restrictions', 'restrictions.applicant', 'restrictions.applicant.restrictions', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant.restrictions', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant', 'restrictions.applicant.restrictions', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant.restrictions', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant.restrictions.applicant', 'targetListApplicants']);

        $queryBuilder->orderBy('created_at', 'desc');

        return $queryBuilder->paginate(
            data_get($queries, 'pagination_limit', config('app.pagination.limit')),
            ['*'],
            'pagination_page',
            data_get($queries, 'pagination_page', 1),
        );
    }

        public function show(string $id): Applicant
        {
            $applicant = Applicant::findOrFail($id);
            $applicant->load(['applicantLanguages', 'applicantSchools', 'applicantIndustries', 'messages', 'jobApplications', 'jobOpeningFavorites', 'jobExperiences', 'restrictions', 'restrictions.applicant', 'restrictions.applicant.restrictions', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant.restrictions', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant', 'restrictions.applicant.restrictions', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant.restrictions', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant.restrictions.applicant', 'targetListApplicants']);

            return $applicant;
        }

        public function create(array $input): Applicant
        {
            $storedFiles = [];
            DB::beginTransaction();
            try {
                $applicant = Applicant::create($input);
                $applicant->restrictions()->create($input['restrictions']);

                if (isset($input['resume_file']) && ! empty($input['resume_file'])) {
                    $resume_file = StorageSupport::files(
                        $input['resume_file']
                    );
                    $applicant->saveResume_file($resume_file);
                    array_push($storedFiles, $resume_file);
                }
                DB::commit();
                $applicant->load(['applicantLanguages', 'applicantSchools', 'applicantIndustries', 'messages', 'jobApplications', 'jobOpeningFavorites', 'jobExperiences', 'restrictions', 'restrictions.applicant', 'restrictions.applicant.restrictions', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant.restrictions', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant', 'restrictions.applicant.restrictions', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant.restrictions', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant.restrictions.applicant']);

                return $applicant;
            } catch (Exception $e) {
                DB::rollBack();
                if (! empty($storedFiles)) {
                    StorageSupport::remove(Arr::pluck($storedFiles, 'filename'));
                }
                throw $e;
            }
        }

        public function update(array $input, string $id): Applicant
        {
            $storedFiles = [];
            DB::beginTransaction();
            try {
                $applicant = Applicant::findOrFail($id);
                $applicant->update($input);
                $applicant->restrictions()->updateOrCreate(['id' => data_get($input, 'restrictions.id')], $input['restrictions']);

                if (isset($input['resume_file'])) {
                    if (get_class($input['resume_file']) == UploadedFile::class) {
                        $applicant->resume_file()->update([
                            'deleted' => true,
                        ]);
                        $resume_file = StorageSupport::files(
                            $input['resume_file']
                        );
                        $applicant->saveResume_file($resume_file);
                        array_push($storedFiles, $resume_file);
                    } elseif (empty($input['resume_file'])) {
                        $applicant->resume_file()->update([
                            'deleted' => true,
                        ]);
                    }
                }
                DB::commit();
                $applicant->load(['applicantLanguages', 'applicantSchools', 'applicantIndustries', 'messages', 'jobApplications', 'jobOpeningFavorites', 'jobExperiences', 'restrictions', 'restrictions.applicant', 'restrictions.applicant.restrictions', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant.restrictions', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant', 'restrictions.applicant.restrictions', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant.restrictions', 'restrictions.applicant.restrictions.applicant', 'restrictions.applicant.restrictions.applicant']);

                return $applicant;
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
                $applicant = Applicant::findOrFail($id);
                $applicant->_storageAttachments()->update(['deleted' => true]);
                $deleted = Applicant::destroy($id);
                DB::commit();

                return $deleted;
            } catch (Exception $e) {
                DB::rollBack();
                throw $e;
            }
        }
}
