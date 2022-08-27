@extends('layouts.app')

@section('content')
<div class="list-seikyusho">
    <div class="btn-parent">
        <a href="/mitumorisho">見積書一覧</a>
        <a href="/mitumorisho/create">見積書作成</a>
        <a href="/seikyusho">請求書一覧</a>
        <a href="/seikyusho/create">請求書作成</a>
    </div>
    <div class="list-contents">
        @foreach($invoices as $invoice)
        <a href="/seikyusho/edit/{{$invoice -> invoice_id}}" class="list-content">
        <p>件名：{{$invoice -> subject}}</p>
        <p>宛先：{{$invoice -> for}}</p>
        <p>請求日：{{$invoice -> date}}</p>
        <p>作成日：{{$invoice -> created_at}}</p>
        </a>
        @endforeach
    </div>
</div>
@endsection
