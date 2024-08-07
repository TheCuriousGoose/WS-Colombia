<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'date',
        'venue_id'
    ];

    public function participants(): HasMany
    {
        return $this->hasMany(Participant::class);
    }

    public function venue()
    {
        return $this->belongsTo(Venue::class);
    }
}
