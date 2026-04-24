<?php

namespace App\Http\Controllers\Welcome;

use App\Http\Controllers\Controller;
use App\Models\Citie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class Maincontroller extends Controller
{
    public function LandingPage(){
        $cities = Citie::all();
        // dd($cities->toArray());
        return Inertia::render('Main/LandingPage', [
            'cities' => $cities
        ]);
    }

    public function CityPage($id){
        $city = Citie::find($id);
        // dd($city->toArray());
        $city->image = asset($city->image);
        // dd($city->toArray());
        return Inertia::render('Main/CityPage', [
            'city' => $city
        ]);
    }
}
