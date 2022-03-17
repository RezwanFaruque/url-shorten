<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    
    // user registration function
    public function userRegistration(Request $request){

        $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users,email',
            'password' => 'required|min:8',
        ]);


        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);


        $data = [
            'status' => 'success',
            'message' => 'User created successfully',
        ];


        return response()->json($data);


    }



    // user login function
    public function userLogin(Request $request){

        $request->validate([
            'email' => 'required',
            'password' => 'required|min:8',
        ]);


        $user = User::where('email' , $request->email)->first();
        $password = Hash::check($request->password, $user->password);

        if($user && $password){

            $token = $user->createToken('authToken')->accessToken;

            $data = [
                'status' => 'success',
                'message' => 'You logged in successfully!',
                'token' => $token
            ];
            

            return response()->json($data);

        }else{
            $data = [
                'status' => 'error',
                'message' => 'Log in failed please check your email and password!',
            ];


            return response()->json($data);
            
        }


    }
}
