<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Models\Invoice_item;
use App\Models\Invoice;
use App\Models\Quotation_item;
use App\Models\Quotation;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function home(){
        return view('home');
    }

    public function create_seikyusho(){
        return view('create_seikyusho');
    }

    public function create_mitumorisho(){
        return view('create_mitumorisho');
    }

    public function list_seikyusho(){
        $user_id = Auth::id();
        $invoices = Invoice::where('user_id',$user_id)->get();
        return view('list_seikyusho',compact('invoices'));
    }

    public function list_mitumorisho(){
        $user_id = Auth::id();
        $quotations = Quotation::where('user_id',$user_id)->get();
        return view('list_mitumorisho',compact('quotations'));
    }
    
    public function edit_seikyusho($id){
        $user_id = Auth::id();
        $invoice = Invoice::where('user_id',$user_id)->where('invoice_id',$id)->get();
        $invoice_items = Invoice_item::where('user_id',$user_id)->where('invoice_id',$id)->get();
        return view('edit_seikyusho',compact('invoice','invoice_items'));
    }
    
    public function edit_mitumorisho($id){
        $user_id = Auth::id();
        $quotation = Quotation::where('user_id',$user_id)->where('quotation_id',$id)->get();
        $quotation_items = Quotation_item::where('user_id',$user_id)->where('quotation_id',$id)->get();
        return view('edit_mitumorisho',compact('quotation','quotation_items'));
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
}
