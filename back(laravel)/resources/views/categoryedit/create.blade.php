@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Create Category') }}</div>
                    <form action="{{route('categoryedit.store')}}" method="post">
                        @csrf
                        <input type="text" name="name" id="name">
                        <input class="btn btn-primary" type="submit" name="category_add" value="Create">
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
