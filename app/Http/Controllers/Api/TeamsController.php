<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\TeamResource;
use App\Models\Team;
use Illuminate\Http\Request;

class TeamsController extends Controller
{



    /**
     * Display a listing of the resource.
     */

     
     public function updateTeam(Request $request, $id)
     {
         $team = Team::findOrFail($id);
         $team->update($request->all());
         return response()->json($team, 200);

        //  $team->title = $request->input('title');
        //  $team->description = $request->input('description');
        //  $team->email = $request->input('email');
        //  $team->save();
        //  return new TeamResource($team);
     }
     







     public function getTeamsById($id)
     {
         $team = Team::findOrFail($id);
         return new TeamResource($team);
     }
     


    public function index()
    {
        $teams = Team::all();
        return TeamResource::collection($teams);
    }
    

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $team = new Team();
        $team->fill($request->all());
        $team->save();

        return $team;

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $team = Team::find($id);
        $team->delete();

        return response()->json(['success' => true]);

    }
}
