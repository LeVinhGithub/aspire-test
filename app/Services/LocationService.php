<?php

namespace App\Services;

use App\Models\Location;

class LocationService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = Location::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'name', 'startWith', data_get($queries, 'locations.name')],
            ['orWhere', 'is_prefecture', '=', data_get($queries, 'locations.is_prefecture')],
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
