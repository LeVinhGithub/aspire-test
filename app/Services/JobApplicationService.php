<?php

namespace App\Services;

use App\Models\JobApplication;

class JobApplicationService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = JobApplication::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'applicant_id', '=', data_get($queries, 'job_applications.applicant_id')],
            ['orWhere', 'job_opening_id', '=', data_get($queries, 'job_applications.job_opening_id')],
            ['orWhere', 'status', '=', data_get($queries, 'job_applications.status')],
        ]);

        $queryBuilder->orderBy('created_at', 'desc');

        return $queryBuilder->paginate(
            data_get($queries, 'pagination_limit', config('app.pagination.limit')),
            ['*'],
            'pagination_page',
            data_get($queries, 'pagination_page', 1),
        );
    }

        public function show(string $id): JobApplication
        {
            $jobApplication = JobApplication::findOrFail($id);

            return $jobApplication;
        }

        public function create(array $input): JobApplication
        {
            $jobApplication = JobApplication::create($input);

            return $jobApplication;
        }

        public function update(array $input, string $id): JobApplication
        {
            $jobApplication = JobApplication::findOrFail($id);
            $jobApplication->update($input);

            return $jobApplication;
        }

        public function delete(string $id): int
        {
            return JobApplication::destroy($id);
        }
}
