@extends('layouts.app')

@section('content')
<div class="list-mitumorisho">
    <div class="btn-parent">
        <a href="/mitumorisho">見積書一覧</a>
        <a href="/mitumorisho/create">見積書作成</a>
        <a href="/seikyusho">請求書一覧</a>
        <a href="/seikyusho/create">請求書作成</a>
    </div>
    <div class="list-contents">
        @foreach($quotations as $quotation)
        <a href="/mitumorisho/edit/{{$quotation -> quotation_id}}" class="list-content">
        <p>件名：{{$quotation -> subject}}</p>
        <p>宛先：{{$quotation -> for}}</p>
        <p>請求日：{{$quotation -> date}}</p>
        <p>作成日：{{$quotation -> created_at}}</p>
        </a>
        @endforeach
    </div>

</div>
@endsection
