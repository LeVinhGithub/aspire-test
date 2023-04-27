<?php

namespace App\Services;

use App\Models\EmploymentStatus;

class EmploymentStatusService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = EmploymentStatus::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'name', 'startWith', data_get($queries, 'employment_statuses.name')],
        ]);

        $queryBuilder->with(['jobOpenings', 'jobOpenings.jobApplications', 'jobOpenings.jobOpeningFavorites', 'jobOpenings.jobOpeningValuedCompetencies']);

        $queryBuilder->orderBy('created_at', 'desc');

        return $queryBuilder->paginate(
            data_get($queries, 'pagination_limit', config('app.pagination.limit')),
            ['*'],
            'pagination_page',
            data_get($queries, 'pagination_page', 1),
        );
    }
}
