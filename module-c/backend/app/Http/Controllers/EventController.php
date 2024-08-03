<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EventController extends Controller
{
    public function index()
    {
        $events = Event::all();

        if (count($events) > 0) {
            return response()->json($events, 200);
        }

        return response()->json('Not found: Resource not found', 404);
    }

    public function create(Request $request)
    {
        $rules = [
            'name' => ['string', 'required', 'max:64'],
            'date' => ['date', 'required'],
            'venue_id' => ['integer', 'required', 'exists:venues,id']
        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return response()->json('Bad request: Request error', 400);
        }

        $event = Event::create($validator->validated());

        return response()->json($event, 200);
    }

    public function edit(Request $request, Event $event)
    {
        $rules = [
            'name' => ['string', 'max:64'],
            'date' => ['date',],
            'venue_id' => ['integer', 'exists:venues,id']
        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return response()->json('Bad request: Request error', 400);
        }

        $event->update($validator->validated());

        return response()->json($event, 200);
    }
}
