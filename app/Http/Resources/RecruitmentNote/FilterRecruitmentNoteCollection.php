<?php

namespace App\Http\Resources\RecruitmentNote;

use App\Http\Resources\BaseJsonCollection;

class FilterRecruitmentNoteCollection extends BaseJsonCollection
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'recruitment_notes';

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
                'company_id' => $item->company_id,
                'note' => $item->note,

            ];
        });
    }
}
