<?php

namespace App\Http\Resources\TargetList;

use App\Http\Resources\BaseJsonResource;
use Illuminate\Http\Request;

class UpdateTargetListResource extends BaseJsonResource
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'target_list';

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
            'company_id' => $this->company_id,
            'company' => [
                'id' => $this->company->id,
                'created_at' => $this->company->created_at,
                'updated_at' => $this->company->updated_at,
                'name' => $this->company->name,
                'logo' => $this->company->logo,
                'location' => $this->company->location,
                'launched_year' => $this->company->launched_year,
                'business_details' => $this->company->business_details,
                'number_of_employees' => $this->company->number_of_employees,
                'industry_id' => $this->company->industry_id,
                'mission' => $this->company->mission,
                'vision' => $this->company->vision,
                'value' => $this->company->value,
                'representative_photo' => $this->company->representative_photo,
                'representative_profile' => $this->company->representative_profile,
                'listing_classification' => $this->company->listing_classification,
                'representative_name' => $this->company->representative_name,
                'slug' => $this->company->slug,
                'image' => $this->company->image,
                'capital' => $this->company->capital,
                'ipo' => $this->company->ipo,
                'business_id' => $this->company->business_id,
                'name_furigana' => $this->company->name_furigana,

            ],

        ];
    }
}
