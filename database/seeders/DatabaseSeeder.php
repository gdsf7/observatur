<?php

namespace Database\Seeders;

use App\Models\Citie;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $cities = [
            [
                'name' => 'Agudo',
                'region' => 'Quarta Colônia',
                'population' => 16041,
                'populational_growth' => -4.07,
                'populational_density' => 30.00,
                'area' => 534.62,
                'image' => null,
            ],
            [
                'name' => 'Dona Francisca',
                'region' => 'Quarta Colônia',
                'population' => 3079,
                'populational_growth' => -3.69,
                'populational_density' => 26.97,
                'area' => 114.15,
                'image' => null,
            ],
            [
                'name' => 'Faxinal do Soturno',
                'region' => 'Quarta Colônia',
                'population' => 6702,
                'populational_growth' => 0.43,
                'populational_density' => 39.54,
                'area' => 169.51,
                'image' => null,
            ],
            [
                'name' => 'Ivorá',
                'region' => 'Quarta Colônia',
                'population' => 1929,
                'populational_growth' => -10.61,
                'populational_density' => 15.69,
                'area' => 122.93,
                'image' => null,
            ],
            [
                'name' => 'Nova Palma',
                'region' => 'Quarta Colônia',
                'population' => 5586,
                'populational_growth' => -11.92,
                'populational_density' => 17.76,
                'area' => 314.61,
                'image' => null,
            ],
            [
                'name' => 'Pinhal Grande',
                'region' => 'Quarta Colônia',
                'population' => 3805,
                'populational_growth' => -15.29,
                'populational_density' => 7.96,
                'area' => 478.11,
                'image' => null,
            ],
            [
                'name' => 'Restinga Sêca',
                'region' => 'Quarta Colônia',
                'population' => 14939,
                'populational_growth' => -5.71,
                'populational_density' => 15.42,
                'area' => 968.62,
                'image' => null,
            ],
            [
                'name' => 'Santa Maria',
                'region' => 'Central',
                'population' => 271735,
                'populational_growth' => 4.11,
                'populational_density' => 152.64,
                'area' => 1780.19,
                'image' => null,
            ],
            [
                'name' => 'São João do Polêsine',
                'region' => 'Quarta Colônia',
                'population' => 2649,
                'populational_growth' => 2.36,
                'populational_density' => 33.82,
                'area' => 78.32,
                'image' => null,
            ],
            [
                'name' => 'Silveira Martins',
                'region' => 'Quarta Colônia',
                'population' => 2028,
                'populational_growth' => -16.47,
                'populational_density' => 17.00,
                'area' => 119.28,
                'image' => null,
            ],
        ];

        Citie::insert($cities);
    }
}