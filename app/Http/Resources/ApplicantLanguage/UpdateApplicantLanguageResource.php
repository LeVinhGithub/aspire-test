<?php

namespace App\Http\Resources\ApplicantLanguage;

use App\Http\Resources\BaseJsonResource;
use Illuminate\Http\Request;

class UpdateApplicantLanguageResource extends BaseJsonResource
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'applicant_language';

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
            'proficiency' => $this->proficiency,
            'language_id' => $this->language_id,
            'applicant_id' => $this->applicant_id,

        ];
    }
}
