<?php

namespace App\Services;

use App\Models\ApplicantIndustry;

class ApplicantIndustryService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = ApplicantIndustry::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'industry_id', '=', data_get($queries, 'applicant_industries.industry_id')],
            ['orWhere', 'applicant_id', '=', data_get($queries, 'applicant_industries.applicant_id')],
        ]);

        $queryBuilder->orderBy('created_at', 'desc');

        return $queryBuilder->paginate(
            data_get($queries, 'pagination_limit', config('app.pagination.limit')),
            ['*'],
            'pagination_page',
            data_get($queries, 'pagination_page', 1),
        );
    }

        public function create(array $input): ApplicantIndustry
        {
            $applicantIndustry = ApplicantIndustry::create($input);

            return $applicantIndustry;
        }

        public function update(array $input, string $id): ApplicantIndustry
        {
            $applicantIndustry = ApplicantIndustry::findOrFail($id);
            $applicantIndustry->update($input);

            return $applicantIndustry;
        }

        public function delete(string $id): int
        {
            return ApplicantIndustry::destroy($id);
        }
}
