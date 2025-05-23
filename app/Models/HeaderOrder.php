<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HeaderOrder extends Model
{
    use HasFactory;

    protected $table = 'header_order';

    protected $fillable = [
        'title',
        'description',
        'image_url',
    ];
}
