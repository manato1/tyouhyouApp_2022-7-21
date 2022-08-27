@extends('layouts.app')

@section('content')
<div class="btn-parent">
    <a href="/mitumorisho">見積書一覧</a>
    <a href="/mitumorisho/create">見積書作成</a>
    <a href="/seikyusho">請求書一覧</a>
    <a href="/seikyusho/create">請求書作成</a>
</div>
<div class="create-box" id="form">
    <form action="/seikyusho_pdf" method="POST" target="blank">
        @csrf
        <div class="box">
        @foreach($invoice as $invoice)
        <label for="from">From</label><input type="text" name="from" id="from" value="{{ $invoice -> from }}" v-model="from" required> 
        <p id="subtext1">スペースで改行</p>
        <label for="for">For</label><input type="text" name="for_for" id="for" value="{{ $invoice -> for }}" v-model="For" required>
        <p id="subtext1">スペースで改行</p>
        <label for="date">見積日</label><input type="date" name="date" id="date" value="{{ $invoice -> date }}" v-model="date" required>
        <label for="deadline">有効期限</label><input type="date" name="deadline" id="deadline" value="{{ $invoice -> deadline }}" v-model="deadline" required>
        <label for="subject">件名</label><input type="text" name="subject" id="subject" value="{{ $invoice -> subject }}" v-model="subject">
        <label for="number">見積No</label><input type="number" name="number" id="number" value="{{ $invoice -> invoice_no }}" v-model="number">
        <input type="hidden" name="totalamount" v-model="totalamount">
        <input type="hidden" name="subtotal" v-model="subtotal">
        <input type="hidden" name="taxamount" v-model="taxamount">

        <input type="hidden" name="total1" v-model="total1">
        <input type="hidden" name="total2" v-model="total2">
        <input type="hidden" name="total3" v-model="total3">
        <input type="hidden" name="total4" v-model="total4">
        <input type="hidden" name="total5" v-model="total5">
        <input type="hidden" name="total6" v-model="total6">
        <input type="hidden" name="total7" v-model="total7">
        <input type="hidden" name="total8" v-model="total8">
        <input type="hidden" name="total9" v-model="total9">
        <input type="hidden" name="total10" v-model="total10">
        <input type="hidden" name="total11" v-model="total11">
        <input type="hidden" name="total12" v-model="total12">
        <input type="hidden" name="total13" v-model="total13">
        <input type="hidden" name="total14" v-model="total14">
        <input type="hidden" name="total15" v-model="total15">
        <input type="hidden" name="total16" v-model="total16">
        <input type="hidden" name="total17" v-model="total17">
        <input type="hidden" name="total18" v-model="total18">

        </div>

        概要<br>
        <div class="summary">
            <div class="summary-box summary-box-1">
            <div class="content">品目</div><div class="unit_price">単価</div><div class="quantity">数量</div><div class="rate">税率</div>
                <?php $i = 1;?>
                @foreach($invoice_items as $quotation_item)
                <input type="text" name="content_{{ $i }}" class="content" id="content_{{ $i }}" value="{{ $quotation_item -> content }}" v-model="content_{{ $i }}">
                <input type="number" name="unit_price_{{ $i }}" class="unit_price" id="unit_price_{{ $i }}" value="{{ $quotation_item -> unit_price }}" v-model="unit_price_{{ $i }}">
                <input type="number" name="quantity_{{ $i }}" class="quantity" id="quantity_{{ $i }}" value="1" v-model="quantity_{{ $i }}">
                <input type="number" name="rate_{{ $i }}" class="rate" id="rate_{{ $i }}" value="10" v-model="rate_{{ $i }}">
                <?php $i ++;?>
                @endforeach
                @for($i;$i<=18;$i++)
                <input type="text" name="content_{{ $i }}" class="content" id="content_{{ $i }}" value="" v-model="content_{{ $i }}">
                <input type="number" name="unit_price_{{ $i }}" class="unit_price" id="unit_price_{{ $i }}" value="" v-model="unit_price_{{ $i }}">
                <input type="number" name="quantity_{{ $i }}" class="quantity" id="quantity_{{ $i }}" v-model="quantity_{{ $i }}">
                <input type="number" name="rate_{{ $i }}" class="rate" id="rate_{{ $i }}" v-model="rate_{{ $i }}">
                @endfor
            </div>
        </div>

        <div class="box">
            <label for="remarks">備考</label><textarea name="remarks" id="remarks" cols="30" rows="10" v-model="remarks">{{ $invoice -> remarks }}</textarea>
        </div>
        @endforeach

        <input type="submit" class="toPDF" value="PDF化・印刷">
    </form>
    <div class="hyoutyou">
        <h3>請求書</h3>
        <div class="box-1">
            <div class="box-left">
                <div class="for">@{{ FOr }}</div>
                <div class="subject">件名：@{{ Subject }}</div>
            </div>
            <div class="box-right">
                <div class="number">請求No.@{{ Number }}</div> 
                <div class="date">請求日 @{{ Date }}</div>
                <div class="from">@{{ From }}</div>
            </div>
        </div>
        <div class="box-2">
            <div class="all-total">
                合計金額 @{{ TotalAmount }}
            </div>
            <div class="deadline">
                有効期限：@{{ Deadline }}
            </div>
        </div>
        <div class="box-3">
            <table>
                <tr>
                    <th>品目</th>
                    <th>単価</th>
                    <th>数量</th>
                    <th>税率</th>
                    <th>金額</th>
                </tr>
                <tr>
                    <td>@{{ Content1 }}</td>
                    <td>@{{ Unit_price1 }}</td>
                    <td>@{{ Quantity1 }}</td>
                    <td>@{{ Rate1 }}</td>
                    <td>@{{ Total1 }}</td>
                </tr>
                <tr>
                    <td>@{{ Content2 }}</td>
                    <td>@{{ Unit_price2 }}</td>
                    <td>@{{ Quantity2 }}</td>
                    <td>@{{ Rate2 }}</td>
                    <td>@{{ Total2 }}</td>
                </tr>
                <tr>
                    <td>@{{ Content3 }}</td>
                    <td>@{{ Unit_price3 }}</td>
                    <td>@{{ Quantity3 }}</td>
                    <td>@{{ Rate3 }}</td>
                    <td>@{{ Total3 }}</td>
                </tr>
                <tr>
                    <td>@{{ Content4 }}</td>
                    <td>@{{ Unit_price4 }}</td>
                    <td>@{{ Quantity4 }}</td>
                    <td>@{{ Rate4 }}</td>
                    <td>@{{ Total4 }}</td>
                </tr>
                <tr>
                    <td>@{{ Content5 }}</td>
                    <td>@{{ Unit_price5 }}</td>
                    <td>@{{ Quantity5 }}</td>
                    <td>@{{ Rate5 }}</td>
                    <td>@{{ Total5 }}</td>
                </tr>
                <tr>
                    <td>@{{ Content6 }}</td>
                    <td>@{{ Unit_price6 }}</td>
                    <td>@{{ Quantity6 }}</td>
                    <td>@{{ Rate6 }}</td>
                    <td>@{{ Total6 }}</td>
                </tr>
                <tr>
                    <td>@{{ Content7 }}</td>
                    <td>@{{ Unit_price7 }}</td>
                    <td>@{{ Quantity7 }}</td>
                    <td>@{{ Rate7 }}</td>
                    <td>@{{ Total7 }}</td>
                </tr>
                <tr>
                    <td>@{{ Content8 }}</td>
                    <td>@{{ Unit_price8 }}</td>
                    <td>@{{ Quantity8 }}</td>
                    <td>@{{ Rate8 }}</td>
                    <td>@{{ Total8 }}</td>
                </tr>
                <tr>
                    <td>@{{ Content9 }}</td>
                    <td>@{{ Unit_price9 }}</td>
                    <td>@{{ Quantity9 }}</td>
                    <td>@{{ Rate9 }}</td>
                    <td>@{{ Total9 }}</td>
                </tr>
                <tr>
                    <td>@{{ Content10 }}</td>
                    <td>@{{ Unit_price10 }}</td>
                    <td>@{{ Quantity10 }}</td>
                    <td>@{{ Rate10 }}</td>
                    <td>@{{ Total10 }}</td>
                </tr>
                <tr>
                    <td>@{{ Content11 }}</td>
                    <td>@{{ Unit_price11 }}</td>
                    <td>@{{ Quantity11 }}</td>
                    <td>@{{ Rate11 }}</td>
                    <td>@{{ Total11 }}</td>
                </tr>
                <tr>
                    <td>@{{ Content12 }}</td>
                    <td>@{{ Unit_price12 }}</td>
                    <td>@{{ Quantity12 }}</td>
                    <td>@{{ Rate12 }}</td>
                    <td>@{{ Total12 }}</td>
                </tr>
                <tr>
                    <td>@{{ Content13 }}</td>
                    <td>@{{ Unit_price13 }}</td>
                    <td>@{{ Quantity13 }}</td>
                    <td>@{{ Rate13 }}</td>
                    <td>@{{ Total13 }}</td>
                </tr>
                <tr>
                    <td>@{{ Content14 }}</td>
                    <td>@{{ Unit_price14 }}</td>
                    <td>@{{ Quantity14 }}</td>
                    <td>@{{ Rate14 }}</td>
                    <td>@{{ Total14 }}</td>
                </tr>
                <tr>
                    <td>@{{ Content15 }}</td>
                    <td>@{{ Unit_price15 }}</td>
                    <td>@{{ Quantity15 }}</td>
                    <td>@{{ Rate15 }}</td>
                    <td>@{{ Total15 }}</td>
                </tr>
                <tr>
                    <td>@{{ Content16 }}</td>
                    <td>@{{ Unit_price16 }}</td>
                    <td>@{{ Quantity16 }}</td>
                    <td>@{{ Rate16 }}</td>
                    <td>@{{ Total16 }}</td>
                </tr>
                <tr>
                    <td>@{{ Content17 }}</td>
                    <td>@{{ Unit_price17 }}</td>
                    <td>@{{ Quantity17 }}</td>
                    <td>@{{ Rate17 }}</td>
                    <td>@{{ Total17 }}</td>
                </tr>
                <tr>
                    <td>@{{ Content18 }}</td>
                    <td>@{{ Unit_price18 }}</td>
                    <td>@{{ Quantity18 }}</td>
                    <td>@{{ Rate18 }}</td>
                    <td>@{{ Total18 }}</td>
                </tr>
            </table>
            <div class="joo">
                <div class="j">
                    小計
                </div>
                <div class="jo">
                    @{{ Subtotal }}
                </div>
            </div>
            <div class="joo">
                <div class="j">
                    消費税
                </div>
                <div class="jo">
                    @{{ TaxAmount }}
                </div>
            </div>
            <div class="joo">
                <div class="j">
                    合計金額
                </div>
                <div class="jo">
                    @{{ TotalAmount }}
                </div>
            </div>

        </div>
        <div class="remarks">備考<div class="remarks-box">@{{ Remarks }}</div></div>
    </div>

    </div>


@endsection
