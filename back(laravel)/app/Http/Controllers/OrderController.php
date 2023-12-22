<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Payment;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::all();
//        return view('product.product');
//        return response()->json($orders,200);
        return view('order.order',['orders'=>$orders]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $orders = Order::all();
        $payments = Payment::all();
//        return view('product.product');
        return view('order.create',['orders'=>$orders],['payments'=>$payments]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = request()->validate([
            'name' => 'required|string',
            'payment_id' => 'required',
        ]);
        Order::create($data);

        $orders = Order::all();
//        return view('category.category',['categories'=>$products]);
        return view('order.order',['orders'=>$orders]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $orders=Order::find($id);
        return response()->json($orders,200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $orders=Order::find($id);
        return view('order.edit',['orders'=>$orders]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data=request()->validate([
            'name'=> 'required|string',
            'payment_id' => 'required',
        ]);

        $edit=Order::find($id);

        $edit->name=$data['name'] ?? $edit->name;
        $edit->save();

        $orders=Order::all();
        return view('order.order',['orders'=>$orders]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $orders=Order::find($id);
        $orders->delete();
        $orders=Order::all();
        return view('order.order',['orders'=>$orders]);
    }
}
