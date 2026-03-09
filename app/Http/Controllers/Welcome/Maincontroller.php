<?php

namespace App\Http\Controllers\Welcome;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class Maincontroller extends Controller
{
    public function LandingPage(){
        // dd(123);
        return Inertia::render('Main/LandingPage');
    }
}
