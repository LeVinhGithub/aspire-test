<?php

namespace App\Http\Requests\Message;

use Illuminate\Foundation\Http\FormRequest;

class CreateMessageRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'messages.applicant_id' => 'required|numeric|integer|exists:applicants,id',
            'messages.text' => 'string|max:1000|min:0',
            'messages.attachment' => 'file|max:10240|mimes:bmp,gif,jpeg,jpg,jpe,png,tiff,tif',
            'messages.reply_to_message_id' => 'numeric|integer|gt:0|lt:2147483647',
            'messages.company_id' => 'required|numeric|integer|exists:companies,id',
        ];
    }

    protected function passedValidation()
    {
        $this->replace([
            'applicant_id' => $this->integer('messages.applicant_id'),
            'text' => $this->string('messages.text'),
            'attachment' => $this->file('messages.attachment'),
            'reply_to_message_id' => $this->integer('messages.reply_to_message_id'),
            'company_id' => $this->integer('messages.company_id'),
        ]);
    }
}
