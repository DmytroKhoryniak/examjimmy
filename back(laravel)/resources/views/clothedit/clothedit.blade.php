@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Clothes') }}</div>
                    <a class="btn btn-primary" href="{{route('clothedit.create')}}">create new cloth</a>
                    <table>
                        <thead>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                        <th>source</th>
                        <th>category</th>
                        </thead>
                        <tbody>
                        @foreach($clothedits as $clothedit)
                            <tr>
                                <td>{{ $clothedit->id }}</td>
                                <td>{{ $clothedit->name }}</td>
                                <td>{{ $clothedit->price }}</td>
                                <td>{{ $clothedit->source }}</td>
                                <td>{{ $clothedit->category->name}}</td>
                                <td>
                                    <form action="{{ route('clothedit.destroy', $clothedit->id) }}" method="post">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-danger">Delete</button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection
