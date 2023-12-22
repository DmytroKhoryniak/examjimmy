<?php

namespace App\Http\Controllers;

use App\Models\CategoryEdit;
use Illuminate\Http\Request;

class CategoryEditController extends Controller
{
    public function index()
    {
        $categoryedits = CategoryEdit::all();
//        return view('category.category');
        return view('categoryedit.categoryedit',['categoryedits'=>$categoryedits]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categoryedits = CategoryEdit::all();
        return view('categoryedit.create',['categoryedits'=>$categoryedits]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = request()->validate([
            'name' => 'required|string',
        ]);
        CategoryEdit::create($data);

        $categoryedits = CategoryEdit::all();
        return view('categoryedit.categoryedit',['categoryedits'=>$categoryedits]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $categoryedits=CategoryEdit::find($id);
        return view('categoryedit.categoryedit',['categoryedits'=>$categoryedits]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $categoryedits=CategoryEdit::find($id);
        return view('categoryedit.edit',['categoryedits'=>$categoryedits]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data=request()->validate([
            'name'=> 'required|string',
        ]);

        $edit=CategoryEdit::find($id);

        $edit->name=$data['name'] ?? $edit->name;
        $edit->save();

        $categoryedits=CategoryEdit::all();
        return view('categoryedit.categoryedit',['categoryedits'=>$categoryedits]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $categoryedits=CategoryEdit::find($id);
        $categoryedits->delete();
        $categoryedits=CategoryEdit::all();
        return view('categoryedit.categoryedit',['categoryedits'=>$categoryedits]);
    }
}
