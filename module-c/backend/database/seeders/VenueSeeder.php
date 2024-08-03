<?php

namespace Database\Seeders;

use App\Models\Venue;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VenueSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $venues = [
            'Stade de France' => 'Saint-Denis',
            'Area Bercy' => 'París',
            'Roland Garros' => 'París',
            'Vélodrome National' => 'Saint-Quentin',
            'Grand Palais' => 'París'
        ];

        foreach($venues as $name => $location){
            Venue::updateOrCreate(
                ['name' => $name],
                ['location' => $location]
            );
        }
    }
}
