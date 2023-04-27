<?php

namespace App\Http\Resources\ApplicantSchool;

use App\Http\Resources\BaseJsonCollection;

class FilterApplicantSchoolCollection extends BaseJsonCollection
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'applicant_schools';

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
                'graduation_date' => $item->graduation_date,
                'name' => $item->name,
                'degree' => $item->degree,
                'major' => $item->major,
                'school_type_id' => $item->school_type_id,
                'applicant_id' => $item->applicant_id,

            ];
        });
    }
}
