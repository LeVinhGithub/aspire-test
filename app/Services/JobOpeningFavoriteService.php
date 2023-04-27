<?php

namespace App\Services;

use App\Models\JobOpeningFavorite;

class JobOpeningFavoriteService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = JobOpeningFavorite::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'job_opening_id', '=', data_get($queries, 'job_opening_favorites.job_opening_id')],
            ['orWhere', 'applicant_id', '=', data_get($queries, 'job_opening_favorites.applicant_id')],
        ]);

        $queryBuilder->orderBy('created_at', 'desc');

        return $queryBuilder->paginate(
            data_get($queries, 'pagination_limit', config('app.pagination.limit')),
            ['*'],
            'pagination_page',
            data_get($queries, 'pagination_page', 1),
        );
    }

        public function show(string $id): JobOpeningFavorite
        {
            $jobOpeningFavorite = JobOpeningFavorite::findOrFail($id);

            return $jobOpeningFavorite;
        }

        public function create(array $input): JobOpeningFavorite
        {
            $jobOpeningFavorite = JobOpeningFavorite::create($input);

            return $jobOpeningFavorite;
        }

        public function update(array $input, string $id): JobOpeningFavorite
        {
            $jobOpeningFavorite = JobOpeningFavorite::findOrFail($id);
            $jobOpeningFavorite->update($input);

            return $jobOpeningFavorite;
        }

        public function delete(string $id): int
        {
            return JobOpeningFavorite::destroy($id);
        }
}
