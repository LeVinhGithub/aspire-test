<?php

namespace App\Http\Resources\ScoutTemplate;

use App\Http\Resources\BaseJsonResource;
use Illuminate\Http\Request;

class CreateScoutTemplateResource extends BaseJsonResource
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'scout_template';

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
            'title' => $this->title,
            'template_text' => $this->template_text,
            'company_id' => $this->company_id,

        ];
    }
}
