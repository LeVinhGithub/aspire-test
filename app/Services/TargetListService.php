<?php

namespace App\Services;

use App\Models\TargetList;

class TargetListService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = TargetList::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'title', 'startWith', data_get($queries, 'target_lists.title')],
            ['orWhere', 'company_id', '=', data_get($queries, 'target_lists.company_id')],
        ]);

        $queryBuilder->with(['company']);

        $queryBuilder->orderBy('created_at', 'desc');

        return $queryBuilder->paginate(
            data_get($queries, 'pagination_limit', config('app.pagination.limit')),
            ['*'],
            'pagination_page',
            data_get($queries, 'pagination_page', 1),
        );
    }

        public function show(string $id): TargetList
        {
            $targetList = TargetList::findOrFail($id);
            $targetList->load(['company', 'targetListApplicants', 'targetListApplicants.applicant', 'targetListApplicants.applicant.applicantIndustries', 'targetListApplicants.applicant.applicantIndustries.industry', 'targetListApplicants.applicant.applicantSchools', 'targetListApplicants.applicant.applicantSchools.schoolType', 'targetListApplicants.applicant.incomeRange']);

            return $targetList;
        }

        public function create(array $input): TargetList
        {
            $targetList = TargetList::create($input);
            $targetList->load(['company']);

            return $targetList;
        }

        public function update(array $input, string $id): TargetList
        {
            $targetList = TargetList::findOrFail($id);
            $targetList->update($input);
            $targetList->load(['company']);

            return $targetList;
        }

        public function delete(string $id): int
        {
            return TargetList::destroy($id);
        }
}
