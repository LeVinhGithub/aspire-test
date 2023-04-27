<?php

namespace App\Http\Resources\JobExperience;

use App\Http\Resources\BaseJsonCollection;

class FilterJobExperienceCollection extends BaseJsonCollection
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'job_experiences';

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
                'company_name' => $item->company_name,
                'start_date' => $item->start_date,
                'end_date' => $item->end_date,
                'applicant_id' => $item->applicant_id,
                'job_title_id' => $item->job_title_id,

            ];
        });
    }
}
