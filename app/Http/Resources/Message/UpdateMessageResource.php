<?php

namespace App\Http\Resources\Message;

use App\Http\Resources\BaseJsonResource;
use Illuminate\Http\Request;

class UpdateMessageResource extends BaseJsonResource
{
    /**
     * The "data" wrapper that should be applied.
     *
     * @var string|null
     */
    public static $wrap = 'message';

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
            'text' => $this->text,
            'attachment' => $this->attachment,
            'reply_to_message_id' => $this->reply_to_message_id,
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
                'ipo' => $this->company->listing_classification,
                'representative_name' => $this->company->representative_name,
                'slug' => $this->company->slug,
                'messages' => $this->messages->map(function ($message) {
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
                'image' => $this->company->image,
                'capital' => $this->company->capital,

            ],

        ];
    }
}
