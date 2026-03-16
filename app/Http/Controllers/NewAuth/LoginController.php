<?php

namespace App\Http\Controllers\NewAuth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function LoginSubmit(Request $request){
        // dd($request->all());
        // if(Auth::user()){
        //     dd(Auth::user());
        // }

        $validatedData = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt($validatedData)) {  
            // Auth::login($validatedData);          
            return redirect()->route('LandingPage');
        }

        return redirect()->route('LoginPage');       
    }
}
