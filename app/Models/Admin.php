<?php

namespace App\Models;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    use HasApiTokens, Notifiable;

    use HasFactory;
    protected $fillable = [
        'name', 'email', 'password', 'phone', 'street', 'city', 'postal_code', 'country', 'poste', 'isAdmin'
    ];
}
