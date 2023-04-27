<?php

namespace App\Services;

use App\Models\Restriction;

class RestrictionService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = Restriction::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'company_id', '=', data_get($queries, 'restrictions.company_id')],
            ['orWhere', 'applicant_id', '=', data_get($queries, 'restrictions.applicant_id')],
            ['orWhere', 'reason', '=', data_get($queries, 'restrictions.reason')],
        ]);

        $queryBuilder->with(['company', 'applicant', 'applicant.restrictions', 'applicant.restrictions.applicant', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions.applicant', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions', 'applicant.restrictions.applicant', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions.applicant', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions.applicant.restrictions']);

        $queryBuilder->orderBy('created_at', 'desc');

        return $queryBuilder->paginate(
            data_get($queries, 'pagination_limit', config('app.pagination.limit')),
            ['*'],
            'pagination_page',
            data_get($queries, 'pagination_page', 1),
        );
    }

        public function show(string $id): Restriction
        {
            $restriction = Restriction::findOrFail($id);
            $restriction->load(['company', 'applicant', 'applicant.restrictions', 'applicant.restrictions.applicant', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions.applicant', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions', 'applicant.restrictions.applicant', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions.applicant', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions.applicant.restrictions']);

            return $restriction;
        }

        public function create(array $input): Restriction
        {
            $restriction = Restriction::create($input);
            $restriction->load(['company', 'applicant', 'applicant.restrictions', 'applicant.restrictions.applicant', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions.applicant', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions', 'applicant.restrictions.applicant', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions.applicant', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions.applicant.restrictions']);

            return $restriction;
        }

        public function update(array $input, string $id): Restriction
        {
            $restriction = Restriction::findOrFail($id);
            $restriction->update($input);
            $restriction->load(['company', 'applicant', 'applicant.restrictions', 'applicant.restrictions.applicant', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions.applicant', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions', 'applicant.restrictions.applicant', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions.applicant', 'applicant.restrictions.applicant.restrictions', 'applicant.restrictions.applicant.restrictions']);

            return $restriction;
        }

        public function delete(string $id): int
        {
            return Restriction::destroy($id);
        }
}
