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
            return response()->json('Login successful', 200);
        }

        // Authentication failed
        return response()->json('Unauthorized: Authentication failed', 401);
    }

    public function logout(): JsonResponse
    {
        Auth::logout();
        return response()->json('Logout successful', 200);
    }
}
