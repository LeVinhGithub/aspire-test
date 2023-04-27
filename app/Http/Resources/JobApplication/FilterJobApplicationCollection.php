<?php

namespace App\Http\Resources\JobApplication;

use App\Http\Resources\BaseJsonCollection;

class FilterJobApplicationCollection extends BaseJsonCollection
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'job_applications';

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
                'applicant_id' => $item->applicant_id,
                'job_opening_id' => $item->job_opening_id,
                'status' => $item->status,

            ];
        });
    }
}
