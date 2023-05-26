<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    protected $table = 'tickets';
    protected $fillable = ['title', 'name', 'description', 'user_id' , 'step', 'priority',"assigned_to", "team" ,'tickets_count' ,"type" ,"team_id" ,"tag"];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function getPhotoUrlAttribute()
{
    return $this->photo ? asset('storage/tickets/' . $this->photo) : null;
}
  
public function team()
    {
        return $this->belongsTo(Team::class);
    }
}













  // public function user()
    // {
    //     return $this->belongsTo(User::class);
    // } 
    