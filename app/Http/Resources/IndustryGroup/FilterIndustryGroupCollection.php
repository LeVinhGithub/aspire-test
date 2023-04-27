<?php

namespace App\Http\Resources\IndustryGroup;

use App\Http\Resources\BaseJsonCollection;

class FilterIndustryGroupCollection extends BaseJsonCollection
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'industry_groups';

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
                'industries' => $item->industries->map(function ($industry) {
                    return [
                        'id' => $industry->id,
                        'created_at' => $industry->created_at,
                        'updated_at' => $industry->updated_at,
                        'name' => $industry->name,
                        'industry_group_id' => $industry->industry_group_id,

                    ];
                }),

            ];
        });
    }
}
