<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Citie extends Model
{
    protected $fillable = [
        'name',
        'population',
        'region',
        'populational_growth',
        'populational_density',
        'area',
        'image',
        'index_uri',
    ];
}
