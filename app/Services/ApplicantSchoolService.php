<?php

namespace App\Services;

use App\Models\ApplicantSchool;

class ApplicantSchoolService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = ApplicantSchool::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'graduation_date', '=', data_get($queries, 'applicant_schools.graduation_date')],
            ['orWhere', 'name', 'startWith', data_get($queries, 'applicant_schools.name')],
            ['orWhere', 'degree', 'startWith', data_get($queries, 'applicant_schools.degree')],
            ['orWhere', 'major', 'startWith', data_get($queries, 'applicant_schools.major')],
            ['orWhere', 'school_type_id', '=', data_get($queries, 'applicant_schools.school_type_id')],
            ['orWhere', 'applicant_id', '=', data_get($queries, 'applicant_schools.applicant_id')],
        ]);

        $queryBuilder->orderBy('created_at', 'desc');

        return $queryBuilder->paginate(
            data_get($queries, 'pagination_limit', config('app.pagination.limit')),
            ['*'],
            'pagination_page',
            data_get($queries, 'pagination_page', 1),
        );
    }

        public function create(array $input): ApplicantSchool
        {
            $applicantSchool = ApplicantSchool::create($input);

            return $applicantSchool;
        }

        public function update(array $input, string $id): ApplicantSchool
        {
            $applicantSchool = ApplicantSchool::findOrFail($id);
            $applicantSchool->update($input);

            return $applicantSchool;
        }

        public function delete(string $id): int
        {
            return ApplicantSchool::destroy($id);
        }
}
