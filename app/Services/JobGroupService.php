<?php

namespace App\Services;

use App\Models\JobGroup;

class JobGroupService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = JobGroup::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'name', 'startWith', data_get($queries, 'job_groups.name')],
        ]);

        $queryBuilder->with(['jobTitles', 'jobTitles.jobOpenings', 'jobTitles.jobOpenings.jobApplications', 'jobTitles.jobOpenings.jobOpeningFavorites', 'jobTitles.jobOpenings.jobOpeningValuedCompetencies', 'jobTitles.jobExperiences']);

        $queryBuilder->orderBy('created_at', 'desc');

        return $queryBuilder->paginate(
            data_get($queries, 'pagination_limit', config('app.pagination.limit')),
            ['*'],
            'pagination_page',
            data_get($queries, 'pagination_page', 1),
        );
    }
}
