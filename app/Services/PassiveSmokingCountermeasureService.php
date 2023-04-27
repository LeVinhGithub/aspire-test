<?php

namespace App\Services;

use App\Models\PassiveSmokingCountermeasure;

class PassiveSmokingCountermeasureService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = PassiveSmokingCountermeasure::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'name', 'startWith', data_get($queries, 'passive_smoking_countermeasures.name')],
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
