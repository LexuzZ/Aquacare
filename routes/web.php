<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth','role:,true'])->group(function () {
    Route::get('/dashboard',[DashboardController::class,'index'])->name('index.dashboard');
    // Route::get('/dashboard',[UserController::class,'count'])->name('user.count');
    Route::get('user',[DashboardController::class,'userlist'])->name('user.list');
    Route::get('report',[DashboardController::class,'report'])->name('report');
    Route::get('feedback',[DashboardController::class,'feedback'])->name('feedback');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
