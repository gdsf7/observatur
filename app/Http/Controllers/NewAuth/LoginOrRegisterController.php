<?php

namespace App\Http\Controllers\NewAuth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LoginOrRegisterController extends Controller
{
    public function LoginPage(Request $request){
        if(Auth::user()){
            return redirect()->route('LandingPage');
        }

        return Inertia::render('NewAuth/Login');
    }

    public function RegisterPage(Request $request){
        if(Auth::user()){
            return redirect()->route('LandingPage');
        }

        return Inertia::render('NewAuth/Register');
    }
}
