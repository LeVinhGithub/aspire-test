<?php

namespace App\Http\Resources\JobOpeningFavorite;

use App\Http\Resources\BaseJsonResource;
use Illuminate\Http\Request;

class UpdateJobOpeningFavoriteResource extends BaseJsonResource
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'job_opening_favorite';

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
            'job_opening_id' => $this->job_opening_id,
            'applicant_id' => $this->applicant_id,

        ];
    }
}
