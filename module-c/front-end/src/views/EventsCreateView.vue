<script setup lang="ts">
import { vueFetch } from '@/utils/vueFetch';
import { ref } from 'vue';

const form = ref({
    name: '',
    date: '',
    venue_id: ''
})

async function save(){
    const event = vueFetch('events/create', 'POST', {
        ...form.value
    });

    alert('Event created');
}

</script>

<template>
    <div class=" bg-slate-300 w-[800px] flex flex-col p-4 rounded-ee rounded-bl">
        <div class="w-full flex justify-between">
            <h2 class="text-slate-800 text-2xl font-semibold">Add Event</h2>
            <div>
                <RouterLink to="/events" class="btn btn-sm text-slate-400 bg-slate-900 border-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Back to
                </RouterLink>
            </div>
        </div>
        <form @submit.prevent="save">
            <div class=" bg-slate-300 w-[380px] flex flex-col p-4 rounded-ee rounded-bl">
                <label class="text-slate-600 font-semibold">Name:</label>
                <input type="text" placeholder="name" v-model="form.name" required
                    class="bg-slate-400 placeholder-slate-600 text-slate-600 input input-bordered w-full mb-2" />
                <label class="text-slate-600 font-semibold">Date:</label>
                <input type="date" placeholder="date" v-model="form.date" required
                    class="bg-slate-400 placeholder-slate-600 text-slate-600 input input-bordered w-full mb-2" />
                <label class="text-slate-600 font-semibold">Venue:</label>
                <select v-model="form.venue_id" required
                    class="select bg-slate-400 placeholder-slate-600 text-slate-600 input input-bordered w-full mb-2">
                    <option disabled selected>Select...</option>
                    <option value="1">Stade de France</option>
                    <option value="2">Arena Bercy</option>
                    <option value="3">Roland Garros</option>
                    <option value="4">Vélodrome National</option>
                    <option value="5">Grand Palais</option>
                </select>
                <button class="btn mt-4 bg-slate-700 text-slate-400 w-full border-0">Add</button>
            </div>
        </form>
    </div>
</template>