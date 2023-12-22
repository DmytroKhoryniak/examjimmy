<?php

namespace App\Http\Controllers;

use App\Models\Books;
use http\Env\Response;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Books::all();
        return response()->json([$books, 200]);
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
    public function store(Request $request)
    {
        $book = new Books;
        $book->name = $request->name ? $request->name:"";
        $book->author = $request->author ? $request->author:"";
        $book->publication_date = $request->publication_date ? $request->publication_date:"";
        $book->save();
        return response()->json([
            'success' => 'Book create successfully',
        ], 200);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $book = Books::find($id);
        if(!empty($book)){
            return response()->json($book,200);
        } else{
            return response()->json([
               'error' => 'Book not found',
            ], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $book = Books::find($id);
        if(!empty($book)){
            $book->name = is_null($request->name) ? $request->name:"";
            $book->author = $request->author ? $request->author:"";
            $book->publication_date = $request->publication_date ? $request->publication_date:"";
            $book->save();

            return response()->json([
                'success' => 'Book updated',
            ], 200);
        }else{
            return response()->json([
                'error' => 'Book not found',
            ], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if(Books::where('id',$id)->exists()){
            $book = Books::find($id);
            $book->delete();

            return response()->json([
                'success' => 'Book updated',
            ], 200);
        }
        else{
            return response()->json([
                'error' => 'Book not found',
            ], 404);
        }
    }
}
