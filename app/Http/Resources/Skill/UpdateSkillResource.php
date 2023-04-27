<?php

namespace App\Http\Resources\Skill;

use App\Http\Resources\BaseJsonResource;
use Illuminate\Http\Request;

class UpdateSkillResource extends BaseJsonResource
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'skill';

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
            'name' => $this->name,
            'applicant_id' => $this->applicant_id,

        ];
    }
}
