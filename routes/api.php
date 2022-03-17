<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Url\UrlController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


// Passport Auth Controller Rotues
Route::controller(AuthController::class)->group(function(){
    Route::post('/registration','userRegistration')->name('user.register');
    Route::post('/login','userLogin')->name('user.login');
});


Route::middleware('auth:api')->group(function(){
    Route::controller(UrlController::class)->group(function(){
        Route::get('/url-lists','index')->name('url.lists');
        Route::post('/url-shorten','saveShortenUrl')->name('url.shortensave');
    });

    
});


