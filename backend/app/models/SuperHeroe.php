<?php

namespace App\models;

use Illuminate\Support\Facades\DB;
use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;


class SuperHeroe extends Model
{

    protected $table = 'superheroes';
    

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 
        'name',
        'picture',
        'publisher',
        'picture',
        'info'
    ];

    public function __construct(){
        $this->db = app('db');
    }

    public function getSuperheroes($page){
        $superheroes = $this->db->table('superheroes')->paginate($page)->limit(50);
        return $superheroes;
    }

}