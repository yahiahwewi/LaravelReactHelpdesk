<?php

namespace App\Http\Resources;

use App\Models\User;
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
            // 'tickets_count' => $this->count(),
            'id' => $this->id,
            'subject' => $this->subject,
            'user_id' => $this->user_id,
            'title' => $this->title,
            'description' => $this->description,
            'photo' => url($this->photo_url),
            'step' => $this->step,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'priority' => $this->priority,
            'team' => $this->team,
            'email' => $this->user->email, 
            'phone' => $this->user->phone, 
            'user_details' => new UserResource($this->user),
            'assigned_to'=> $this->assignedUserName(),


        ];
        

    }
    
    public function assignedUserName()
    {
        return User::find($this->assigned_to);
    }
    

    public function assignedEmail()
    {
        $user = User::find($this->email);
        return $user ? $user->name : null;
    }
}
