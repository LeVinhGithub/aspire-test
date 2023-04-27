<?php

namespace App\Services;

use App\Models\IndustryGroup;

class IndustryGroupService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = IndustryGroup::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'name', 'startWith', data_get($queries, 'industry_groups.name')],
        ]);

        $queryBuilder->with(['industries']);

        $queryBuilder->orderBy('created_at', 'desc');

        return $queryBuilder->paginate(
            data_get($queries, 'pagination_limit', config('app.pagination.limit')),
            ['*'],
            'pagination_page',
            data_get($queries, 'pagination_page', 1),
        );
    }
}
