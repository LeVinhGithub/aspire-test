<?php

namespace App\Services;

use App\Models\ScoutTemplate;

class ScoutTemplateService extends BaseService
{
    public function filter(array $queries)
    {
        $queryBuilder = ScoutTemplate::query();

        $this->buildFilter($queryBuilder, [
            ['where', 'title', 'startWith', data_get($queries, 'scout_templates.title')],
            ['orWhere', 'template_text', 'startWith', data_get($queries, 'scout_templates.template_text')],
            ['orWhere', 'company_id', '=', data_get($queries, 'scout_templates.company_id')],
        ]);

        $queryBuilder->orderBy('created_at', 'desc');

        return $queryBuilder->paginate(
            data_get($queries, 'pagination_limit', config('app.pagination.limit')),
            ['*'],
            'pagination_page',
            data_get($queries, 'pagination_page', 1),
        );
    }

        public function show(string $id): ScoutTemplate
        {
            $scoutTemplate = ScoutTemplate::findOrFail($id);

            return $scoutTemplate;
        }

        public function create(array $input): ScoutTemplate
        {
            $scoutTemplate = ScoutTemplate::create($input);

            return $scoutTemplate;
        }

        public function update(array $input, string $id): ScoutTemplate
        {
            $scoutTemplate = ScoutTemplate::findOrFail($id);
            $scoutTemplate->update($input);

            return $scoutTemplate;
        }

        public function delete(string $id): int
        {
            return ScoutTemplate::destroy($id);
        }
}
