<?php

namespace App\Services;

use App\Models\Language;

class LanguageService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = Language::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'name', 'startWith', data_get($queries, 'languages.name')],
        ]);

        $queryBuilder->with(['applicantLanguages']);

        $queryBuilder->orderBy('created_at', 'desc');

        return $queryBuilder->paginate(
            data_get($queries, 'pagination_limit', config('app.pagination.limit')),
            ['*'],
            'pagination_page',
            data_get($queries, 'pagination_page', 1),
        );
    }
}
