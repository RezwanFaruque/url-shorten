<?php

namespace App\Http\Controllers\Url;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Url;

class UrlController extends Controller
{
    
    //get json response for all short url
    public function index(Request $request){

        $urls = Url::all();
        if(count($urls) > 0){
            $data = [
                'status' => 'success',
                'message' => 'urls found',
                'data' => $urls,
            ];
        }else{
            $data = [
                'status' => 'empty',
                'message' => 'No url found!',
            ];
        }

        return response()->json($data);
    }


    // Get long url and store shorten and long url in database and 
    // give json response to saved data

    public function saveShortenUrl(Request $request){

        
        $request->validate([
             'long_url' => 'required',
         ]);

         $url = new Url();

         $code = Str::random(6);
         $url->long_url = $request->long_url;
         $url->code = $code;
         $url->short_url = url('').'/'.$code;
         $url->user_ip_address = $request->ip();


         $url->save();

         $data = [
             'status' => 'success',
             'message' => 'Url successfully shorten!',
             'data' => $url,
         ];

         return response()->json($data);

    }

}
