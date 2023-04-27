<?php

namespace App\Services;

use App\Models\RecruitmentNote;

class RecruitmentNoteService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = RecruitmentNote::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'applicant_id', '=', data_get($queries, 'recruitment_notes.applicant_id')],
            ['orWhere', 'company_id', '=', data_get($queries, 'recruitment_notes.company_id')],
            ['orWhere', 'note', 'startWith', data_get($queries, 'recruitment_notes.note')],
        ]);

        $queryBuilder->orderBy('created_at', 'desc');

        return $queryBuilder->paginate(
            data_get($queries, 'pagination_limit', config('app.pagination.limit')),
            ['*'],
            'pagination_page',
            data_get($queries, 'pagination_page', 1),
        );
    }

        public function create(array $input): RecruitmentNote
        {
            $recruitmentNote = RecruitmentNote::create($input);

            return $recruitmentNote;
        }

        public function update(array $input, string $id): RecruitmentNote
        {
            $recruitmentNote = RecruitmentNote::findOrFail($id);
            $recruitmentNote->update($input);

            return $recruitmentNote;
        }
}
