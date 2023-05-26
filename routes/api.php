<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\TicketController;
use App\Http\Resources\TicketResource;
use Illuminate\Support\Facades\File;

use App\Http\Resources\UserResource;
use App\Models\User;
use App\Models\Ticket;

use App\Http\Controllers\Api;
use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Api\FormTicketController;
use App\Http\Controllers\Api\TeamsController;
use App\Models\Team;

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


////////////////////// ADMIN API'S /////////////////////////////

// delete ticket by id 
Route::delete('/deleteticket/{id}', [TicketController::class, 'deleteTicket']);





// EDIT TICKET BY ADMIN
Route::put('/editTicketByAdmin/{id}', [TicketController::class,"editTicketByAdmin"]);








// GET USER COMMENTS FOR ADMIN
Route::get('/comments2/{ticket_id}',  [CommentController::class, 'getCommentsByUserAndTicket']);




// //////////////ADD SUPPORT USER
Route::post('/addsupport', [UserController::class,'addSupport']);

// get only users
Route::get('/onlyusers', [UserController::class,'onlyusers']);

// UPDATE SUPPORT DETAILS 
Route::put('/supportupdate/{id}', [UserController::class, 'supportupdate']);





// LIST OF SUPPORT

Route::get('/supportlist', function () {
    return UserResource::collection(User::where('role', 1)->get());
});



// SUPPORT BY ID 
Route::get('/support/{id}', function ($id) {
    $user = User::find($id);
    if (!$user) {
        return response()->json(['error' => 'User not found'], 404); 
    }
    return new UserResource($user);
});




Route::delete('/deleteuser/{id}', [UserController::class,'destroy']);







// ADD TEAM
Route::get('teams/{id}/tickets', function ($id) {
    $team = Team::findOrFail($id);
    $tickets = $team->tickets;
    $count = $tickets->count();

    return response()->json([
        'team' => $team,
        'count' => $count

        // 'tickets' => $tickets
    ]);
});


// DELETE TEAM
Route::delete('/deleteTeam/{id}', [TeamsController::class,'destroy']);





Route::post('/addteam', [TeamsController::class,'store']);

// GET TEAMS 
Route::get('/allteams', [TeamsController::class,'index']);

// GET TEAMS BY ID 
Route::get('/teams/{id}', [TeamsController::class, 'getTeamsById']);

// UPDATE TEAM 
Route::put('/UpdateTeam/{id}', [TeamsController::class ,'updateTeam']);



Route::post('/newAdmin', [AuthController::class,'createAdmin']);

Route::post('/AdminLogin', [AuthController::class,'AdminLogin']);

// get tickets for admin
Route::get('/ticketsall', [TicketController::class,'index']);

// by id
Route::get('/byid/{id}', [TicketController::class,'TicketByid']);

// Ticket edit by admin
Route::put('/tickets/{ticket}', [TicketController::class, 'update']);

// get all admins details
Route::get('/isAdmin', function () {
    $admins = User::where('role', true)->get();
    return response()->json([
        'admins' => $admins,
    ]);
});



//////END//////////////// ADMIN API'S /////////////////END////////////






Route::put('/users/{id}', [AuthController::class ,'updateRole']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    // update user alldetails
    Route::put('/user', [UserController::class, 'update']);

    // get all the tickets of auth user
    Route::get('/userTickets', [TicketController::class, 'getTickets']);
        
    // get 1 ticket of auth user by ticket_id 
    Route::get('/userTickets/{ticketid}', [TicketController::class, 'getTicketByid']);

    // delete ticket by id 
    Route::delete('/tickets/{id}', [TicketController::class, 'deleteTicket']);

    // get 1 ticket of auth user by ticket_id 
    // Route::get('/userTickets/{ticketid}', [TicketController::class, 'getTicketByid'])
    // ->where('ticketid', '[0-999]+'); // Only match numeric IDs

    // add a comment to ticket from auth user 
    Route::post('/addComment/{ticketid}', [CommentController::class, 'store']);

    //get all comments of a ticket by Ticket_id 
    Route::get('/comments/{ticket_id}', [CommentController::class, 'getComments']);

});


// for test : get all comments
Route::get('/comments', [CommentController::class, 'index']);



// login and signup
Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);



// access test for admin 
Route::post('/admin/login', [AuthController::class, 'adminLogin']);












// for postman test : all users
Route::get('/users', function () {
    return UserResource::collection(User::all());
});


Route::get('/user/{id}', function ($id) {
    return new UserResource(User::findOrFail($id));
});

// Route::get('/user', function (Request $request) {
//     return $request->user();
// });


// Route::post('/tickets', function () {
//     return TicketResource::collection(Ticket::all());
// });

// Route::post('/tickets', function (Illuminate\Http\Request $request) {
//     return response()->json($request->all());
// });

Route::post('/tickets', [TicketController::class, 'store']);
// Route::get('/ticketss', [TicketController::class, 'index']);
// Route::get('/tickets', [TicketController::class ,'index']);

Route::post('/upload', [FormTicketController::class ,'uploadImage']);
// Route::get('/images/{name}', 'ImageController@show');
// Route::get('/images/{name}', [FormTicketController::class ,'show']);
// Route::get('/files', [FormTicketController::class, 'showAll']);


// Route::get('/photos/{filename}', function ($filename) {
//     $path = storage_path('app/public/images/' . $filename);
//     if (!File::exists($path)) {
//         abort(404);
//     }

//     return response()->file($path, ['Content-Type' => 'image/jpeg']);
// });

// Route::get('/files2', [TicketController::class, 'show']);


Route::get('/tickets/{filename}', function ($filename) {
    $path = storage_path('app/public/tickets/' . $filename);
    if (!File::exists($path)) {
        abort(404);
    }

    return response()->download($path, $filename, [
        'Content-Type' => 'image/jpeg',
        'Content-Disposition' => 'attachment'
    ]);
});
Route::get('/comments/photos/{filename}', [CommentController::class ,'getPhoto']);

// Route::get('/comments/{filename}', [CommentController::class, 'downloadCommentPhoto']);

// Route::get('tickets/user/{id}', [TicketController::class,'getByUserId']);



// Route::get('ticket1/{id}', [TicketController::class,'getById']);

// // Route::get('/user', function (Request $request) {
// //     return $request->user();
// // });

// Route::get('/allTickets', function () {
//     return TicketResource::collection(Ticket::all());
// });

// Route::get('/find/{id}', function ($id) {
//     return TicketResource::collection(Ticket::where('user_id', $id)->get());
// });

// Route::get('/tickets/{user_id}/{ticket_id}', function ($user_id, $id) {
//     $tickets = DB::table('tickets')
//                 ->where('user_id', $user_id)
//                 ->where('id', $id)
//                 ->get();

//     return response()->json(['tickets' => $tickets]);
// });


// Route::get('/get2/{user_id}/{id}', [TicketController::class,'getById2']);

// Route::post('/tickets/{ticket}/comments', 'App\Http\Controllers\Api\CommentController@store')->name('comments.store');

// Route::get('/comments/{user_id}/{ticket_id}', 'App\Http\Controllers\Api\CommentController@index')->name('comments.index');

// Route::get('tickets/user', [TicketController::class, 'getByUserId'])->middleware('auth:sanctum');


Route::get('/userTicketsTest/{user_id}', [TicketController::class, 'userTicketsTest']);
// Route::get('/{userid}/{ticketid}', [TicketController::class, 'getbyids']);
