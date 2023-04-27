<?php

namespace App\Services;

use App\Models\ApplicantLanguage;

class ApplicantLanguageService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = ApplicantLanguage::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'proficiency', '=', data_get($queries, 'applicant_languages.proficiency')],
            ['orWhere', 'language_id', '=', data_get($queries, 'applicant_languages.language_id')],
            ['orWhere', 'applicant_id', '=', data_get($queries, 'applicant_languages.applicant_id')],
        ]);

        $queryBuilder->orderBy('created_at', 'desc');

        return $queryBuilder->paginate(
            data_get($queries, 'pagination_limit', config('app.pagination.limit')),
            ['*'],
            'pagination_page',
            data_get($queries, 'pagination_page', 1),
        );
    }

        public function create(array $input): ApplicantLanguage
        {
            $applicantLanguage = ApplicantLanguage::create($input);

            return $applicantLanguage;
        }

        public function update(array $input, string $id): ApplicantLanguage
        {
            $applicantLanguage = ApplicantLanguage::findOrFail($id);
            $applicantLanguage->update($input);

            return $applicantLanguage;
        }

        public function delete(string $id): int
        {
            return ApplicantLanguage::destroy($id);
        }
}
