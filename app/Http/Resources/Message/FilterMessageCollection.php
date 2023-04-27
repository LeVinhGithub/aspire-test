<?php

namespace App\Http\Resources\Message;

use App\Http\Resources\BaseJsonCollection;

class FilterMessageCollection extends BaseJsonCollection
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'messages';

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
                'applicant_id' => $item->applicant_id,
                'text' => $item->text,
                'attachment' => $item->attachment,
                'reply_to_message_id' => $item->reply_to_message_id,
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
                    'messages' => $item->messages->map(function ($message) {
                        return [
                            'id' => $message->id,
                            'created_at' => $message->created_at,
                            'updated_at' => $message->updated_at,
                            'applicant_id' => $message->applicant_id,
                            'text' => $message->text,
                            'attachment' => $message->attachment,
                            'reply_to_message_id' => $message->reply_to_message_id,
                            'company_id' => $message->company_id,
                            'company' => [
                                'id' => $message->company->id,
                                'created_at' => $message->company->created_at,
                                'updated_at' => $message->company->updated_at,
                                'name' => $message->company->name,
                                'logo' => $message->company->logo,
                                'location' => $message->company->location,
                                'launched_year' => $message->company->launched_year,
                                'business_details' => $message->company->business_details,
                                'number_of_employees' => $message->company->number_of_employees,
                                'industry_id' => $message->company->industry_id,
                                'mission' => $message->company->mission,
                                'vision' => $message->company->vision,
                                'value' => $message->company->value,
                                'representative_photo' => $message->company->representative_photo,
                                'representative_profile' => $message->company->representative_profile,
                                'ipo' => $message->company->listing_classification,
                                'representative_name' => $message->company->representative_name,
                                'slug' => $message->company->slug,

                            ],

                        ];
                    }),
                    'image' => $item->company->image,
                    'capital' => $item->company->capital,

                ],

            ];
        });
    }
}
