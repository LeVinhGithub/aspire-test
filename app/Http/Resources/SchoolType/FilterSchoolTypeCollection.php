<?php

namespace App\Http\Resources\SchoolType;

use App\Http\Resources\BaseJsonCollection;

class FilterSchoolTypeCollection extends BaseJsonCollection
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'school_types';

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
                'applicant_schools' => $item->applicantSchools->map(function ($applicantSchool) {
                    return [
                        'id' => $applicantSchool->id,
                        'created_at' => $applicantSchool->created_at,
                        'updated_at' => $applicantSchool->updated_at,
                        'graduation_date' => $applicantSchool->graduation_date,
                        'name' => $applicantSchool->name,
                        'degree' => $applicantSchool->degree,
                        'major' => $applicantSchool->major,
                        'school_type_id' => $applicantSchool->school_type_id,
                        'applicant_id' => $applicantSchool->applicant_id,

                    ];
                }),
                'school_type_id' => $item->school_type_id,

            ];
        });
    }
}
