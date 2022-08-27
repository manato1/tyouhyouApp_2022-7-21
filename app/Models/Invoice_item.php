<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice_item extends Model
{
    use HasFactory;
    protected $fillable = ['invoice_item_id','invoice_id','user_id','content','unit_price','quantity','rate'];
}
