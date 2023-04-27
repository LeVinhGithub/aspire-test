<?php

namespace App\Http\Resources\ApplicantLanguage;

use App\Http\Resources\BaseJsonCollection;

class FilterApplicantLanguageCollection extends BaseJsonCollection
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'applicant_languages';

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
                'proficiency' => $item->proficiency,
                'language_id' => $item->language_id,
                'applicant_id' => $item->applicant_id,

            ];
        });
    }
}
