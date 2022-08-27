<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quotation_item extends Model
{
    use HasFactory;
    protected $fillable = ['quotation_item_id','quotation_id','user_id','content','unit_price','quantity','rate'];
}
