@extends('layouts.app')

@section('content')
<div class="btn-parent">
    <a href="/mitumorisho" class="btn-child">見積書一覧</a>
    <a href="/mitumorisho/create" class="btn-child">見積書作成</a>
    <a href="/seikyusho" class="btn-child">請求書一覧</a>
    <a href="/seikyusho/create" class="btn-child">請求書作成</a>
</div>
@endsection
