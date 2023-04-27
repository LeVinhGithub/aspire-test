<?php

namespace App\Http\Resources\ApplicantSchool;

use App\Http\Resources\BaseJsonResource;
use Illuminate\Http\Request;

class UpdateApplicantSchoolResource extends BaseJsonResource
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'applicant_school';

    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request): array
    {
        return  [
            'id' => $this->id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'graduation_date' => $this->graduation_date,
            'name' => $this->name,
            'degree' => $this->degree,
            'major' => $this->major,
            'school_type_id' => $this->school_type_id,
            'applicant_id' => $this->applicant_id,

        ];
    }
}
