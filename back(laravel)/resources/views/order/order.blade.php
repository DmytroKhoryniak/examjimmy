{{--@extends('layouts.app')--}}

{{--@section('content')--}}
{{--    <div class="container">--}}
{{--        <div class="row justify-content-center">--}}
{{--            <div class="col-md-8">--}}
{{--                <div class="card">--}}
{{--                    <div class="card-header">{{ __('Orders') }}</div>--}}
{{--                    <a class="btn btn-primary" href="{{route('order.create')}}">create new order</a>--}}

{{--                    <table>--}}
{{--                        <thead>--}}
{{--                        <th>id</th>--}}
{{--                        <th>name</th>--}}
{{--                        </thead>--}}
{{--                        <tbody>--}}
{{--                        @foreach($orders as $order)--}}
{{--                            <tr>--}}
{{--                                <td>{{$order->id}}</td>--}}
{{--                                <td>{{$order->name}}</td>--}}
{{--                            </tr>--}}
{{--                        @endforeach--}}
{{--                        </tbody>--}}
{{--                    </table>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--    </div>--}}
{{--@endsection--}}

@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Orders') }}</div>
                    <a class="btn btn-primary" href="{{ route('order.create') }}">Create New Order</a>

                    <table class="table">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($orders as $order)
                            <tr>
                                <td>{{ $order->id }}</td>
                                <td>{{ $order->name }}</td>
                                <td>{{ $order->payment->type}}</td>
                                <td>
                                    <form action="{{ route('order.destroy', $order->id) }}" method="post">
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

