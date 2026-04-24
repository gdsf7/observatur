<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Operator extends Model
{
    protected $fillable = [
        'city_id',
        'name',
        'address',
        'type',
        'cnpj',
        'is_active',
    ];
}
