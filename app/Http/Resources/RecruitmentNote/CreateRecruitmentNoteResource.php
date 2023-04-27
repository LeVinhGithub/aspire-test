<?php

namespace App\Http\Resources\RecruitmentNote;

use App\Http\Resources\BaseJsonResource;
use Illuminate\Http\Request;

class CreateRecruitmentNoteResource extends BaseJsonResource
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'recruitment_note';

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
            'company_id' => $this->company_id,
            'note' => $this->note,

        ];
    }
}
