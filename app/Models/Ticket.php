<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    // protected $fillable = ['subject', 'name', 'email', 'title', 'description', 'photo'];
    protected $table = 'tickets';
    protected $fillable = ['title', 'name', 'description'];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
  

}
  // public function user()
    // {
    //     return $this->belongsTo(User::class);
    // } 
    