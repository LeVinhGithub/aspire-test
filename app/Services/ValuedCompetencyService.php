<?php

namespace App\Services;

use App\Models\ValuedCompetency;

class ValuedCompetencyService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = ValuedCompetency::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'name', 'startWith', data_get($queries, 'valued_competencies.name')],
        ]);

        $queryBuilder->with(['jobOpeningValuedCompetencies']);

        $queryBuilder->orderBy('created_at', 'desc');

        return $queryBuilder->paginate(
            data_get($queries, 'pagination_limit', config('app.pagination.limit')),
            ['*'],
            'pagination_page',
            data_get($queries, 'pagination_page', 1),
        );
    }
}
