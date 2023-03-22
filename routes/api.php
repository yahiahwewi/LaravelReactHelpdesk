<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\TicketController;
use App\Http\Resources\TicketResource;

use App\Http\Resources\UserResource;
use App\Models\User;
use App\Models\Ticket;

use App\Http\Controllers\Api;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
   
//     return $request->user();
// });
// Route::post('/signup', [AuthController::class, 'signup']);
// Route::post('/login', [AuthController::class, 'login']);
// Route::middleware('auth:sanctum')->put('/users/{user}', [UserController::class, 'update']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

Route::Resource('/users', UserController::class);


});

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);


// for postman test 
Route::get('/users', function () {
    return UserResource::collection(User::all());
});


Route::get('/user/{id}', function ($id) {
    return new UserResource(User::findOrFail($id));
});

// Route::put('/users/{user}', [UserController::class, 'update']);
// Route::get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::get('/tickets', 'TicketController@index');

// Route::post('/tickets', function () {
//     return TicketResource::collection(Ticket::all());
// });

// Route::post('/tickets', function (Illuminate\Http\Request $request) {
//     return response()->json($request->all());
// });

Route::post('/tickets', [TicketController::class, 'store']);
Route::get('/ticketss', [TicketController::class, 'show']);
