<?php

namespace App\Http\Resources\ValuedCompetency;

use App\Http\Resources\BaseJsonCollection;

class FilterValuedCompetencyCollection extends BaseJsonCollection
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'valued_competencies';

    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return $this->collection->map(function ($item) {
            return [
                'id' => $item->id,
                'created_at' => $item->created_at,
                'updated_at' => $item->updated_at,
                'name' => $item->name,
                'job_opening_valued_competencies' => $item->jobOpeningValuedCompetencies->map(function ($jobOpeningValuedCompetency) {
                    return [
                        'id' => $jobOpeningValuedCompetency->id,
                        'created_at' => $jobOpeningValuedCompetency->created_at,
                        'updated_at' => $jobOpeningValuedCompetency->updated_at,
                        'job_opening_id' => $jobOpeningValuedCompetency->job_opening_id,
                        'valued_competency_id' => $jobOpeningValuedCompetency->valued_competency_id,

                    ];
                }),
                'valued_competency_id' => $item->valued_competency_id,

            ];
        });
    }
}
