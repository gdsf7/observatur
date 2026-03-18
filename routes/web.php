<?php

use App\Http\Controllers\NewAuth\LoginController;
use App\Http\Controllers\NewAuth\LoginOrRegisterController;
use App\Http\Controllers\NewAuth\RegisterController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Welcome\Maincontroller;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [Maincontroller::class, 'LandingPage'])->name('LandingPage');

Route::get('/login', [LoginOrRegisterController::class, 'LoginPage'])->name('login');
Route::get('/register', [LoginOrRegisterController::class, 'RegisterPage'])->name('register');

Route::post('/login-submit', [LoginController::class, 'LoginSubmit'])->name('loginSubmit');
Route::post('/register-submit', [RegisterController::class, 'RegisterSubmit'])->name('registerSubmit');
Route::post('/logout', [LoginController::class, 'LogoutSubmit'])->name('logout');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__.'/auth.php';
