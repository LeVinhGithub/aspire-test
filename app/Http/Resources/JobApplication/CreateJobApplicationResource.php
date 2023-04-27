<?php

namespace App\Http\Resources\JobApplication;

use App\Http\Resources\BaseJsonResource;
use Illuminate\Http\Request;

class CreateJobApplicationResource extends BaseJsonResource
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'job_application';

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
            'applicant_id' => $this->applicant_id,
            'job_opening_id' => $this->job_opening_id,
            'status' => $this->status,

        ];
    }
}
