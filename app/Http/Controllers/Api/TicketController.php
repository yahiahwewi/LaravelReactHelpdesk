<?php

namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Models\Ticket;
use App\Http\Requests\StoreTicketRequest;
use App\Http\Requests\UpdateTicketRequest;
use App\Http\Resources\TicketResource;
use Illuminate\Support\Facades\Auth;

class TicketController extends Controller
{
    


///////////////////////////ADMIN/////////////////////////////////////////

public function index()
{
    $tickets = Ticket::all();
    $count = $tickets->count();
    $is_urgent = $tickets->where('priority', 'Urgent')->count();
    $semi_danger = $tickets->where('priority', 'Priorité élevée')->count();
    $moyenne = $tickets->where('priority', 'Priorité moyenne')->count();
    $is_cancelled = $tickets->where('step', 'annulé')->count();

    return response()->json([
        'tickets' => TicketResource::collection($tickets),
        'count' => $count,
        'is_urgent' => $is_urgent,
        'semi_danger' => $semi_danger,
        'moyenne' => $moyenne,
        'is_cancelled' => $is_cancelled

    ], 200);
}




    public function TicketByid(Request $request)
    {
        $ticket = Ticket::findOrFail($request->id);
        return new TicketResource($ticket);
    }


    public function update(Request $request, Ticket $ticket)
    {
        $ticket->update($request->all());
    
        return response()->json(['message' => 'Ticket updated successfully']);
    }
    





/////END//////////////////////ADMIN///////////////////////END//////////////////


    public function deleteTicket($id)
    {
        $ticket = Ticket::find($id);
    
        if (!$ticket) {
            return response()->json(['message' => 'Ticket not found.'], 404);
        }
    
        $ticket->delete();
    
        return response()->json(['message' => 'Ticket deleted successfully.']);
    }
    

    /**
     * Display a listing of the resource.
     */



    
    public function getbyids($userid, $ticketid)
    {
        // Retrieve the ticket with the given ID for the given user ID
        $ticket = Ticket::where('user_id', $userid)
                        ->where('id', $ticketid)
                        ->firstOrFail();
        
        return response()->json($ticket);
    }



    
    

    public function getTicketByid($ticketid)
    {
        // Retrieve the authenticated user's ID
        $userId = auth()->id();

        // Retrieve the ticket with the given ID for the authenticated user
        $ticket = Ticket::where('user_id', $userId)
                        ->where('id', $ticketid)
                        ->firstOrFail();
            if (!$ticket) {
                 return response()->json(['error' => 'Ticket not found'], 404);
                        }
        return response()->json($ticket);
    }

    public function getTickets(Request $request)
    {
        $userId = Auth::id();
    
        $perPage = $request->input('per_page', 10); // set default per page to 10 or can be customized
    
        $tickets = Ticket::where('user_id', $userId)->paginate($perPage);
    
        return response()->json(['tickets' => TicketResource::collection($tickets)], 200);
    }

  

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTicketRequest $request)
    {
        $ticket = new Ticket;
        $ticket->title = $request->title;
        $ticket->name = $request->name;
        $ticket->description = $request->description;
        $ticket->user_id = $request->user_id;
        // $ticket->step = $request->step;
        // $ticket->team = $request->team;


        if ($request->hasFile('photo')) {
            $photo = $request->file('photo');
            $photoName = $photo->getClientOriginalName();
            $photoPath = $photo->storeAs('public/tickets', $photoName);
            $ticket->photo = $photoName;
        }   
        
        $ticket->save();
    
        return response()->json(['message' => 'Ticket created successfully'], 201);
    }
    
    /**
     * Display the specified resource.
     */
    public function show(Ticket $ticket)
    {
        return new TicketResource($ticket);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ticket $ticket)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    // public function update(UpdateTicketRequest $request, Ticket $ticket)
    // {
    //     //
    // }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ticket $ticket)
    {
        //
    }
}
