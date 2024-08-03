<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::updateOrCreate(
            [
                'username' => 'admin',
            ],
            [
                'password' => Hash::make('admin'),
            ]
        );

        $this->call(VenueSeeder::class);
        $this->call(EventSeeder::class);
        $this->call(ParticipantSeeder::class);
    }
}
