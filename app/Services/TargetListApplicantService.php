<?php

namespace App\Services;

use App\Models\TargetListApplicant;

class TargetListApplicantService extends BaseService
{
    public function create(array $input): TargetListApplicant
    {
        $targetListApplicant = TargetListApplicant::create($input);
        $targetListApplicant->load(['targetList', 'applicant']);

        return $targetListApplicant;
    }

    public function delete(string $id): int
    {
        return TargetListApplicant::destroy($id);
    }
}
