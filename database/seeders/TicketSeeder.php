<?php

namespace Database\Seeders;
use App\Models\Ticket;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class TicketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Ticket::factory()->count(10)->create();
        $user = User::first(); // Get the first user in the database

        Ticket::create([
            'title' => 'First Ticket',
            'description' => 'This is the first ticket',
            'priority' => 'High',
            'user_id' => $user->id,
            'photo' => 'ticket1.jpg',
        ]);

    }
}
