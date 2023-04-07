<?php

namespace App\Http\Controllers\Api;
use Illuminate\Support\Facades\File;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Http\Requests\StoreCommentRequest;
use App\Http\Requests\UpdateCommentRequest;
use App\Models\Ticket;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CommentController extends Controller
{

    public function getPhoto($filename)
    {
        $path = storage_path('app/public/comments/' . $filename);
    
        if (!File::exists($path)) {
            abort(404);
        }
    
        $file = File::get($path);
        $type = File::mimeType($path);
    
        $response = Response::make($file, 200);
        $response->header('Content-Type', $type);
        $response->header('Content-Disposition', 'attachment; filename="' . $filename . '"');
    
        return $response;
    }
        



    /**
     * Display a listing of the resource.
     */


    //  get comments by ticket_id
    public function getComments($ticketId)
    {
        $comments = Comment::where('ticket_id', $ticketId)
                            ->where('user_id', Auth::id())
                            ->with('user')
                            ->get();
                            
        return response()->json($comments);
    }
    
    
    
    public function index()
    {
        $comments = Comment::with('user')->get();
        return response()->json($comments);
    }
    
    

    // public function index($user_id, $ticket_id)
    // {
    //     $comments = DB::table('comments')
    //                 ->join('users', 'comments.user_id', '=', 'users.id')
    //                 ->where('comments.user_id', $user_id)
    //                 ->where('comments.ticket_id', $ticket_id)
    //                 ->select('comments.*', 'users.name')
    //                 ->get();
    
    //     return response()->json(['comments' => $comments]);
    // }
        

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
    public function store(StoreCommentRequest $request, $ticketId)
    {
        // $comment = new Comment;
        // $comment->body = $request->body;
        // $comment->user_id = $request->user_id;
        // $comment->ticket_id = $ticketId;
        // $comment->save();

        // return redirect()->back()->with('success', 'Comment added successfully!');
        // Validate the request data

        $validatedData = $request->validated();

        $comment = new Comment();
        $comment->ticket_id = $ticketId;
        $comment->user_id = Auth::id();
        $comment->body = $validatedData['body'];
        
        if ($request->hasFile('photo')) {
            $photo = $request->file('photo');
            $photoName = $photo->getClientOriginalName();
            $photoPath = $photo->storeAs('public/comments', $photoName);
            $comment->photo = $photoName;
        }  
        
        $comment->save();
                
        return response()->json($comment);
    }

    /**
     * Display the specified resource.
     */
    public function show(Comment $comment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCommentRequest $request, Comment $comment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comment)
    {
        //
    }
}
