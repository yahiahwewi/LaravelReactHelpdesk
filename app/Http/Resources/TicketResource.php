<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TicketResource extends JsonResource
{
    public static $wrap = false;


    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);

        return [
            'id' => $this->id,
            'subject' => $this->subject,
            'user_id' => $this->user_id,
            'title' => $this->title,
            'description' => $this->description,
            // 'photo' => $this->photo,
            // 'created_at' => $this->created_at,
            // 'updated_at' => $this->updated_at,
        ];

    }
}
