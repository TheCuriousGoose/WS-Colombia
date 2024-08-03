<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        $credentials = $request->only('username', 'password');

        if (Auth::attempt($credentials)) {
            // Add token to user and response random 128 characters
            $user = Auth::user();
            $token = $user->createToken();

            return response()->json([
                'message' => 'successfully logged in',
                'token' => $token
            ], 200);
        }

        // Authentication failed
        return response()->json('Unauthorized: Authentication failed', 401);
    }

    public function logout(): JsonResponse
    {
        Auth::logout();
        return response()->json('Logout successful', 200);
    }

    public function isLoggedIn()
    {
        return response()->json(Auth::check(), 200);
    }
}
