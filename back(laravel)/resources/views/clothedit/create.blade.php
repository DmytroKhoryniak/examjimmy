@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Create Cloth') }}</div>
                    <form action="{{route('clothedit.store')}}" method="post">
                        @csrf
                        <input type="text" name="name" id="name" placeholder="Clothing Name">
                        @csrf
                        <input type="number" name="price" id="price" placeholder="Price">
                        @csrf
                        <input type="text" name="source" id="source" placeholder="Image name">
                        <select name="category_id" id="category">
                            @foreach($categories as $category)
                                <option value="{{$category->id}}">{{$category->name}}</option>
                            @endforeach
                        </select>
                        <input class="btn btn-primary" type="submit" name="cloth_add" value="Create">
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
