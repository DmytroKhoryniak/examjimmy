<?php

namespace App\Http\Controllers;

use App\Models\Trash;
use Illuminate\Http\Request;

class TrashController extends Controller
{
    public function index()
    {
        $garbages = Trash::all();
//        return view('product.product');
        return response()->json($garbages,200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $garbages = Trash::all();
//        return view('product.product');
        return response()->json($garbages,200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = request()->validate([
            'name' => 'required|string',
        ]);
        Trash::create($data);

        $garbages = Trash::all();
//        return view('category.category',['categories'=>$products]);
        return response()->json($garbages,200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $garbages=Trash::find($id);
        return response()->json($garbages,200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $garbages=Trash::find($id);
        return response()->json($garbages,200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data=request()->validate([
            'name'=> 'required|string',
        ]);

        $edit=Trash::find($id);

        $edit->name=$data['name'] ?? $edit->name;
        $edit->save();

        $garbages=Trash::all();
        return response()->json($garbages,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $garbages=Trash::find($id);
        $garbages->delete();
        $garbages=Trash::all();
        return response()->json($garbages,200);
    }
}
