<?php

namespace App\Http\Controllers\NewAuth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoginOrRegisterController extends Controller
{
    public function LoginPage(Request $request){
        return Inertia::render('NewAuth/Login');
    }

    public function RegisterPage(Request $request){
        return Inertia::render('NewAuth/Register');
    }
}
