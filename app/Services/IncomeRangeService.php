<?php

namespace App\Services;

use App\Models\IncomeRange;

class IncomeRangeService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = IncomeRange::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'name', 'startWith', data_get($queries, 'income_ranges.name')],
            ['orWhere', 'name', 'startWith', data_get($queries, 'income_ranges.name')],
        ]);

        $queryBuilder->with(['applicants', 'applicants.applicantLanguages', 'applicants.applicantSchools', 'applicants.applicantIndustries', 'applicants.messages', 'applicants.jobApplications', 'applicants.jobOpeningFavorites', 'applicants.jobExperiences', 'applicants.skills', 'jobOpenings', 'jobOpenings.jobApplications', 'jobOpenings.jobOpeningFavorites', 'jobOpenings.jobOpeningValuedCompetencies']);

        $queryBuilder->orderBy('created_at', 'desc');

        return $queryBuilder->paginate(
            data_get($queries, 'pagination_limit', config('app.pagination.limit')),
            ['*'],
            'pagination_page',
            data_get($queries, 'pagination_page', 1),
        );
    }
}
