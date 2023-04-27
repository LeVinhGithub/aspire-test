<?php

namespace App\Http\Resources\CompanyUser;

use App\Http\Resources\BaseJsonCollection;

class FilterCompanyUserCollection extends BaseJsonCollection
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'company_users';

    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return $this->collection->map(function ($item) {
            return [
                'id' => $item->id,
                'created_at' => $item->created_at,
                'updated_at' => $item->updated_at,
                'company_id' => $item->company_id,
                'full_name' => $item->full_name,
                'position' => $item->position,
                'photo' => $item->photo,
                'email' => $item->email,
                'role' => $item->role,
                'phone_number' => $item->phone_number,

            ];
        });
    }
}
