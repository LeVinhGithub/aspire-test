<?php

namespace App\Http\Resources\JobOpeningFavorite;

use App\Http\Resources\BaseJsonCollection;

class FilterJobOpeningFavoriteCollection extends BaseJsonCollection
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'job_opening_favorites';

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
                'job_opening_id' => $item->job_opening_id,
                'applicant_id' => $item->applicant_id,

            ];
        });
    }
}
