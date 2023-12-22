<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\ClothEdit;
use Illuminate\Http\Request;

class ClothEditController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $clothedits = ClothEdit::all();
//        return response()->json($clothingsedit,200);
        return view('clothedit.clothedit',['clothedits'=>$clothedits]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $clothedits = ClothEdit::all();
        $categories = Category::all();
//        return response()->json($clothingsedit,200);
        return view('clothedit.create',['clothedits'=>$clothedits],['categories'=>$categories]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = request()->validate([
            'name' => 'required|string',
            'source' => 'required|string',
            'price' => 'required|int',
            'category_id' => 'required',
        ]);
//        dd($data);
        ClothEdit::create($data);

        $clothedits = ClothEdit::all();
        return view('clothedit.clothedit',['clothedits'=>$clothedits]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $clothedits=ClothEdit::find($id);
        return response()->json($clothedits,200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $clothedits=ClothEdit::find($id);
//        return response()->json($clothingsedit,200);
        return view('clothedit.edit',['clothedits'=>$clothedits]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data=request()->validate([
            'name'=> 'required|string',
            'source' => 'required|string',
            'price' => 'required|integer',
            'category_id' => 'required',
        ]);

        $edit=ClothEdit::find($id);

        $edit->name=$data['name'] ?? $edit->name;
        $edit->save();

        $clothedits=ClothEdit::all();
        return view('clothedit.clothedit',['clothedits'=>$clothedits]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $clothedits=ClothEdit::find($id);
        $clothedits->delete();
        $clothedits=ClothEdit::all();
        return view('clothedit.clothedit',['clothedits'=>$clothedits]);
    }
}
