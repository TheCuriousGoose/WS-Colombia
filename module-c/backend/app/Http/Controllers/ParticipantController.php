<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Participant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ParticipantController extends Controller
{
    function index(Event $event)
    {
        $event->load('participants');
        $participants = $event->participants;

        return response()->json($participants, 200);
    }

    public function create(Request $request)
    {
        $rules = [
            'fullname' => ['required', 'string', 'max:64'],
            'email' => ['required', 'email', 'max:64'],
            'phone' => ['required', 'max:64'],
            'event_id' => ['required', 'exists:events,id']
        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Bad request: Request error',
                'errors' => $validator->errors()
            ], 400);
        }

        $participant = Participant::create($validator->validated());

        return response()->json($participant, 200);
    }

    public function delete(Participant $participant)
    {
        $participant->delete();

        return response()->json('', 204);
    }
}
