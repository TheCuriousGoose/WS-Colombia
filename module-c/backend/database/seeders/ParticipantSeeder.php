<?php

namespace Database\Seeders;

use App\Models\Participant;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ParticipantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 0; $i < 10; $i++) {
            $fullname = fake()->firstName() . ' ' . fake()->lastName();

            Participant::create([
                'fullname' => $fullname,
                'email' => fake()->freeEmail(),
                'phone' => '1234567890',
                'event_id' => fake()->numberBetween(1, 5),
            ]);
        }
    }
}
