<?php

namespace App\Http\Controllers;

use App\models\SuperHeroe;
use Illuminate\Http\Request;

class SuperHeroesController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(){
        //
    }

    public function getSuperHeroes(Request $request){
        $page=$request->input('page');
        return response()->json(SuperHeroe::offset($page)->limit(9)->get());
    }

    public function getTotalSuperHeroes(Request $request){
        $total=array('total' => SuperHeroe::count());
        return response()->json($total);
    }


    public function showOneSuperHeroe($id){
        return response()->json(SuperHeroe::find($id));
    }



    //
}
