<?php

namespace App\Http\Resources\CompanyEmployee;

use App\Http\Resources\BaseJsonCollection;

class FilterCompanyEmployeeCollection extends BaseJsonCollection
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'company_employees';

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
                'company' => [
                    'id' => $item->company->id,
                    'created_at' => $item->company->created_at,
                    'updated_at' => $item->company->updated_at,
                    'name' => $item->company->name,
                    'logo' => $item->company->logo,
                    'location' => $item->company->location,
                    'launched_year' => $item->company->launched_year,
                    'business_details' => $item->company->business_details,
                    'number_of_employees' => $item->company->number_of_employees,
                    'industry_id' => $item->company->industry_id,
                    'mission' => $item->company->mission,
                    'vision' => $item->company->vision,
                    'value' => $item->company->value,
                    'representative_photo' => $item->company->representative_photo,
                    'representative_profile' => $item->company->representative_profile,
                    'ipo' => $item->company->listing_classification,
                    'representative_name' => $item->company->representative_name,
                    'slug' => $item->company->slug,
                    'image' => $item->company->image,
                    'capital' => $item->company->capital,

                ],
                'full_name' => $item->full_name,
                'profile' => $item->profile,
                'photo' => $item->photo,
                'is_high_rank_employee' => $item->is_high_rank_employee,

            ];
        });
    }
}
