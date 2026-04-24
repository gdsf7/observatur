<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Spot extends Model
{
    protected $fillable = [
        'city_id',
        'name',
        'type',
        'address',
        'latitude',
        'longitude',
        'image',
    ];
}
