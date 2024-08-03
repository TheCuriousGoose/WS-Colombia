<?php

namespace Database\Seeders;

use App\Models\Event;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sports = [
            'Soccer',
            'Basketball',
            'Tennis',
            'Baseball',
            'Golf',
            'Hockey',
            'Volleyball',
            'Cricket',
            'Rugby',
            'Badminton',
            'Table Tennis',
            'Swimming',
            'Track and Field',
            'Cycling',
            'Boxing',
            'Martial Arts',
            'Wrestling',
            'Gymnastics',
            'Skiing',
            'Snowboarding',
            'Surfing',
            'Rowing',
            'Sailing',
            'Fencing',
            'Archery',
            'Horse Racing',
            'Triathlon',
            'Shooting',
            'Diving',
            'Lacrosse'
        ];

        for ($i = 0; $i < 5; $i++) {
            Event::create([
                'name' => $sports[fake()->numberBetween(0, count($sports))],
                'date' => fake()->date(),
                'venue_id' => fake()->numberBetween(1, 5)
            ]);
        }
    }
}
