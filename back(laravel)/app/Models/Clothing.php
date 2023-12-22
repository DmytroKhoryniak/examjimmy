<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Clothing extends Model
{
    use HasFactory;
    protected $table = 'clothings';
    protected $fillable=[
        'name',
        'source' => 'required|string',
        'price' => 'required|integer',
    ];
}
