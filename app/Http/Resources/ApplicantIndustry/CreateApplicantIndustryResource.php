<?php

namespace App\Http\Resources\ApplicantIndustry;

use App\Http\Resources\BaseJsonResource;
use Illuminate\Http\Request;

class CreateApplicantIndustryResource extends BaseJsonResource
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'applicant_industry';

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
            'industry_id' => $this->industry_id,
            'applicant_id' => $this->applicant_id,

        ];
    }
}
