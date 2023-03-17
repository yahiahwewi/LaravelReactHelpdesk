<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        //     'password' => bcrypt('password'),
        //     'company_name'=>'99999',
        //     'phone'=>'9999999999',
        //     'street'=>'9999999999',
        //     'city'=>'9999999999',
        //     'postal_code'=>'9999999999',
        //     'country'=>'9999999999',

        // ]);
    }   

        // ]);
    }

