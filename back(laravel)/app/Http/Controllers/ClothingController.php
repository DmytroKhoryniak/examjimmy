<?php

namespace App\Http\Controllers;

use App\Models\Clothing;
use Illuminate\Http\Request;

class ClothingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $clothings = Clothing::all();
        return response()->json($clothings,200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $clothings = Clothing::all();
        return response()->json($clothings,200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = request()->validate([
            'name' => 'required|string',
            'source' => 'required|string',
            'price' => 'required|integer',
        ]);
        Clothing::create($data);

        $clothings = Clothing::all();
        return response()->json($clothings,200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $clothings=Clothing::find($id);
        return response()->json($clothings,200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $clothings=Clothing::find($id);
        return response()->json($clothings,200);
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
        ]);

        $edit=Clothing::find($id);

        $edit->name=$data['name'] ?? $edit->name;
        $edit->save();

        $clothings=Clothing::all();
        return response()->json($clothings,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $clothings=Clothing::find($id);
        $clothings->delete();
        $clothings=Clothing::all();
        return response()->json($clothings,200);
    }
}
