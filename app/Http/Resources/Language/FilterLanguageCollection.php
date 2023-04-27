<?php

namespace App\Http\Resources\Language;

use App\Http\Resources\BaseJsonCollection;

class FilterLanguageCollection extends BaseJsonCollection
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'languages';

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
                'name' => $item->name,
                'applicant_languages' => $item->applicantLanguages->map(function ($applicantLanguage) {
                    return [
                        'id' => $applicantLanguage->id,
                        'created_at' => $applicantLanguage->created_at,
                        'updated_at' => $applicantLanguage->updated_at,
                        'proficiency' => $applicantLanguage->proficiency,
                        'language_id' => $applicantLanguage->language_id,
                        'applicant_id' => $applicantLanguage->applicant_id,
                        'other_language' => $applicantLanguage->other_language,

                    ];
                }),
                'language_id' => $item->language_id,

            ];
        });
    }
}
