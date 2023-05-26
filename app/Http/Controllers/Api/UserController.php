<?php

namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{


    public function supportupdate(Request $request, $id)
    {
        // Retrieve the support details record you want to update

        $user = User::findOrFail($id);
        
        // update the ticket data with the data from the request
        $user->update($request->all());
        
        // return the updated ticket
        return response()->json($user, 200);

    }
    














        public function onlyusers()
        {
            $users = User::where('role', 0)->get();
            return response()->json(['users' => $users]);
        }
    

    public function addSupport(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'phone' => 'required|string|max:255',
            'password' => 'required|string|min:8',

        ]);
    
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => bcrypt($request->password),
            'role' => 1, // Set role field to 1 by default


        ]);
    
        return response()->json(['user' => $user]);
    }
    












    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        return UserResource::collection(User::query()->orderBy('id', 'desc')->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreUserRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUserRequest $request)
    {
        $data = $request->validated();
        $data['password'] = bcrypt($data['password']);
        $user = User::create($data);

        return response(new UserResource($user) , 201);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateUserRequest $request
     * @param \App\Models\User                     $user
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserRequest $request)
    {
        $user = auth()->user();
        $data = $request->validated();
    
        if (isset($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        }
    
        $user->update($data);
    
        return new UserResource($user);
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
{
    $user = User::findOrFail($id);
    $user->delete();
    return response()->json(['message' => 'User deleted successfully']);
}

}
