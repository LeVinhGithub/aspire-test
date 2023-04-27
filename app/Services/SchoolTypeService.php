<?php

namespace App\Services;

use App\Models\SchoolType;

class SchoolTypeService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = SchoolType::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'name', 'startWith', data_get($queries, 'school_types.name')],
        ]);

        $queryBuilder->with(['applicantSchools']);

        $queryBuilder->orderBy('created_at', 'desc');

        return $queryBuilder->paginate(
            data_get($queries, 'pagination_limit', config('app.pagination.limit')),
            ['*'],
            'pagination_page',
            data_get($queries, 'pagination_page', 1),
        );
    }
}
