<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
//        return view('product.product');
        return response()->json($products,200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $products = Product::all();
        return response()->json($products,200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = request()->validate([
            'name' => 'required|string',
        ]);
        Product::create($data);

        $products = Product::all();
//        return view('category.category',['categories'=>$products]);
        return response()->json($products,200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $products=Product::find($id);
        return response()->json($products,200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $products=Product::find($id);
        return response()->json($products,200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data=request()->validate([
            'name'=> 'required|string',
        ]);

        $edit=Product::find($id);

        $edit->name=$data['name'] ?? $edit->name;
        $edit->save();

        $products=Product::all();
        return response()->json($products,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $products=Product::find($id);
        $products->delete();
        $products=Product::all();
        return response()->json($products,200);
    }
}
