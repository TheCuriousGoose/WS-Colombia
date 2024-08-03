<?php

use App\Http\Controllers\EventController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ParticipantController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::prefix('olympics')->group(function() {
    // Auth
    Route::get('login', [LoginController::class, 'login'])->name('login');
    Route::get('logout', [LoginController::class, 'logout'])->name('logout');

    // Events
    Route::get('events/list', [EventController::class, 'index'])->name('events.index');
    Route::post('events/create', [EventController::class, 'create'])->name('events.create');
    Route::put('events/edit/{event}', [EventController::class, 'edit'])->name('events.edit');

    //Participants
    Route::get('participants/list/{event}', [ParticipantController::class, 'index'])->name('participants.index');
    Route::post('participants/create', [ParticipantController::class, 'createParticipant'])->name('participants.create');
    Route::delete('participants/delete/{participant}', [ParticipantController::class, 'delete'])->name('participants.delete');
});
