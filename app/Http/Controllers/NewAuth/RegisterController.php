<?php

namespace App\Http\Controllers\NewAuth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class RegisterController extends Controller
{
    public function RegisterSubmit(Request $request){
        // dd($request->all());
        $request->validate([
            'first_name' => 'required|string|max:50',
            'last_name' => 'required|string|max:100',
            'email' => 'required|email|max:100|unique:users,email',
            'password' => 'required|string|min:8|max:255',
            'password_confirmation' => 'required|same:password',
        ]);

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        Auth::login($user);

        return redirect()->route('LandingPage');
    }
}
