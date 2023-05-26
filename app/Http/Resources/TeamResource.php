<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TeamResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'created_at' => $this->created_at,

            'title' => $this->title,
            'description' => $this->description,
            'email' => $this->email,
            'count' => $this->tickets->count(),
            'is_assigned' => $this->tickets->whereNotNull('assigned_to')->count(),
            'is_urgent' => $this->tickets->where('priority', 'urgent')->count(),
            'is_canceled' => $this->tickets->where('step', 'annulé')->count(),

            // 'created_at' => $this->created_at,
            // 'updated_at' => $this->updated_at,
        ];
        

        return parent::toArray($request);
    }
    
}
