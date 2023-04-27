<?php

namespace App\Services;

use App\Models\JobExperience;

class JobExperienceService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = JobExperience::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'company_name', 'startWith', data_get($queries, 'job_experiences.company_name')],
            ['orWhere', 'start_date', '=', data_get($queries, 'job_experiences.start_date')],
            ['orWhere', 'end_date', '=', data_get($queries, 'job_experiences.end_date')],
            ['orWhere', 'applicant_id', '=', data_get($queries, 'job_experiences.applicant_id')],
            ['orWhere', 'job_title_id', '=', data_get($queries, 'job_experiences.job_title_id')],
        ]);

        $queryBuilder->orderBy('created_at', 'desc');

        return $queryBuilder->paginate(
            data_get($queries, 'pagination_limit', config('app.pagination.limit')),
            ['*'],
            'pagination_page',
            data_get($queries, 'pagination_page', 1),
        );
    }

        public function create(array $input): JobExperience
        {
            $jobExperience = JobExperience::create($input);

            return $jobExperience;
        }

        public function update(array $input, string $id): JobExperience
        {
            $jobExperience = JobExperience::findOrFail($id);
            $jobExperience->update($input);

            return $jobExperience;
        }

        public function delete(string $id): int
        {
            return JobExperience::destroy($id);
        }
}
