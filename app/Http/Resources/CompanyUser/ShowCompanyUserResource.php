<?php

namespace App\Http\Resources\CompanyUser;

use App\Http\Resources\BaseJsonResource;
use Illuminate\Http\Request;

class ShowCompanyUserResource extends BaseJsonResource
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'company_user';

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
            'company_id' => $this->company_id,
            'full_name' => $this->full_name,
            'position' => $this->position,
            'photo' => $this->photo,
            'email' => $this->email,
            'role' => $this->role,
            'phone_number' => $this->phone_number,

        ];
    }
}
