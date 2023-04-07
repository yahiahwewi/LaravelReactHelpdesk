<?php

namespace App\Http\Controllers\Api;
// use Response ?
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;

class AuthController extends Controller
{
    
// ADMIN SIGNUP / LOGIN 
public function createAdmin(Request $request)
{
    $validator = Validator::make($request->all(), [
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|unique:admins|max:255',
        'password' => 'required|string|min:8|confirmed',
        'phone' => 'required|string|max:255',
        'street' => 'required|string|max:255',
        'city' => 'required|string|max:255',
        'postal_code' => 'required|string|max:255',
        'country' => 'required|string|max:255',
        'poste' => 'required|string|max:255',
        'service' => 'required|string|max:255',
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors(), 422);
    }

    $admin = Admin::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
        'phone' => $request->phone,
        'street' => $request->street,
        'city' => $request->city,
        'postal_code' => $request->postal_code,
        'country' => $request->country,
        'poste' => $request->poste,
        'service' => $request->service,
    ]);

    return response()->json(['message' => 'Admin created successfully'], 201);
}


// Loginnn

    public function AdminLogin(LoginRequest $request)
    {
        $credentials = $request->validated();
        if (!Auth::guard('admin')->attempt($credentials)) {
            return response([
                'message' => 'Provided email or password is incorrect'
            ], 422);
        }

        /** @var \App\Models\Admin $admin */
        $admin = Auth::guard('admin')->user();
        $token = $admin->createToken('main')->plainTextToken;
        return response(compact('admin', 'token'));
    }

    // public function logout(Request $request)
    // {
    //     /** @var \App\Models\Admin $admin */
    //     $admin = $request->user('admin');
    //     $admin->tokens()->delete();
    //     return response('', 204);
    // }















    // public function adminLogin(Request $request)
    // {
    //     $validator = Validator::make($request->all(), [
    //         'email' => 'required|string|email|max:255',
    //         'password' => 'required|string|min:8',
    //     ]);
    
    //     if ($validator->fails()) {
    //         return response()->json(['errors' => $validator->errors()], 400);
    //     }
    
    //     $credentials = request(['email', 'password']);
    
    //     if (!Auth::attempt($credentials)) {
    //         return response()->json(['error' => 'Invalid credentials'], 401);
    //     }
    
    //     $user = $request->user();
    
    //     if ($user->role !== true) {
    //         return response()->json(['error' => 'You do not have permission to access this resource'], 403);
    //     }
    
    //     $token2 = $user->createToken('AdminToken2')->plainTextToken;
    
    //     return response()->json([
    //         'user' => $user,
    //         'token2' => $token2
    //     ]);
    // }
    





















  public function updateRole($id)
{
    $user = User::find($id);
    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    $user->role = 1;
    $user->save();

    return response()->json(['message' => 'User role updated successfully'], 200);
}

        





    public function signup(SignupRequest $request)
    {
        $data = $request->validated();
        
        /** @var \App\Models\User $user */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'poste' => $data['poste'],
            'role' => $data['role'] ?? 0,        
        ]);

        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        if (!Auth::attempt($credentials)) {
            return response([
                'message' => 'Provided email or password is incorrect'
            ], 422);
        }

        /** @var \App\Models\User $user */
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));
    }

    public function logout(Request $request)
    {
        /** @var \App\Models\User $user */
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('', 204);
    }


}
