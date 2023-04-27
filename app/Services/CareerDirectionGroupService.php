<?php

namespace App\Services;

use App\Models\CareerDirectionGroup;

class CareerDirectionGroupService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = CareerDirectionGroup::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'name', 'startWith', data_get($queries, 'career_direction_groups.name')],
            ['orWhere', 'career_directions.career_direction_group_id', '=', data_get($queries, 'career_directions.career_direction_group_id')],
        ]);

        $queryBuilder->with(['careerDirections', 'careerDirections.jobOpenings', 'careerDirections.jobOpenings.jobApplications', 'careerDirections.jobOpenings.jobOpeningFavorites', 'careerDirections.jobOpenings.jobOpeningValuedCompetencies', 'careerDirections.careerDirectionGroup']);

        $queryBuilder->orderBy('created_at', 'desc');

        return $queryBuilder->paginate(
            data_get($queries, 'pagination_limit', config('app.pagination.limit')),
            ['*'],
            'pagination_page',
            data_get($queries, 'pagination_page', 1),
        );
    }
}
