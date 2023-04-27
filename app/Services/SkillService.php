<?php

namespace App\Services;

use App\Models\Skill;

class SkillService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = Skill::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'name', 'startWith', data_get($queries, 'skills.name')],
            ['orWhere', 'applicant_id', '=', data_get($queries, 'skills.applicant_id')],
            ['orWhere', 'skill_type', '=', data_get($queries, 'skills.skill_type')],
        ]);

        $queryBuilder->orderBy('created_at', 'desc');

        return $queryBuilder->paginate(
            data_get($queries, 'pagination_limit', config('app.pagination.limit')),
            ['*'],
            'pagination_page',
            data_get($queries, 'pagination_page', 1),
        );
    }

        public function create(array $input): Skill
        {
            $skill = Skill::create($input);

            return $skill;
        }

        public function update(array $input, string $id): Skill
        {
            $skill = Skill::findOrFail($id);
            $skill->update($input);

            return $skill;
        }

        public function delete(string $id): int
        {
            return Skill::destroy($id);
        }
}
