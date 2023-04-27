<?php

namespace App\Services;

use App\Models\ManagementExperience;

class ManagementExperienceService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = ManagementExperience::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'name', 'startWith', data_get($queries, 'management_experiences.name')],
        ]);

        $queryBuilder->with(['applicants', 'applicants.applicantLanguages', 'applicants.applicantSchools']);

        $queryBuilder->orderBy('created_at', 'desc');

        return $queryBuilder->paginate(
            data_get($queries, 'pagination_limit', config('app.pagination.limit')),
            ['*'],
            'pagination_page',
            data_get($queries, 'pagination_page', 1),
        );
    }
}
