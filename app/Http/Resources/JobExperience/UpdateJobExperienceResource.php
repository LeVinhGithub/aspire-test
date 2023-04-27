<?php

namespace App\Http\Resources\JobExperience;

use App\Http\Resources\BaseJsonResource;
use Illuminate\Http\Request;

class UpdateJobExperienceResource extends BaseJsonResource
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'job_experience';

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
            'company_name' => $this->company_name,
            'start_date' => $this->start_date,
            'end_date' => $this->end_date,
            'applicant_id' => $this->applicant_id,
            'job_title_id' => $this->job_title_id,

        ];
    }
}
