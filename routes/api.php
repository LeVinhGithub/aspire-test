<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Support\Facades\Route;

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

Route::controller(AuthController::class)->group(function () {
    Route::post('/testings_reset_password_requests', 'testingResetPassword');
    Route::post('/testings_verify_reset_password_requests', 'testingVerifyResetPassword');
    Route::post('/testings_registrations', 'testingEmailRegistration');
    Route::post('/testings_verify_confirmation_token', 'testingVerifyEmail');
    Route::post('api/testing_unlock', 'testingUnlock');
    Route::middleware(['auth:testings'])->group(function () {
        Route::post('/testings_passwords', 'testingChangePassword');
    });
});
