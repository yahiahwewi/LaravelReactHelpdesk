<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $appends = ['count'];

    protected $table = 'teams';
    protected $primaryKey = 'id';
    protected $fillable = ['title', 'description' ,'email' ] ;

    use HasFactory;
    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }

    public function getCountAttribute()
    {
        return $this->tickets()->count();
    }

}


// Retrieve the team with ID 1 and its associated tickets
$team = Team::with('tickets')->find(1);

// Loop through the tickets and access their properties as needed
// foreach ($team->tickets as $ticket) {
//     echo $ticket->title;
//     echo $ticket->description;
//     echo $ticket->status;
//     echo $ticket->name;
// }