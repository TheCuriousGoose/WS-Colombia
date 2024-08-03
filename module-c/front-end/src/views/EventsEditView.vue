<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { vueFetch } from '@/utils/vueFetch';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;

const events = await vueFetch('events/list');
const event = events.find((event) => event.id == id);

const form = ref<object>({
    name: event.name,
    date: event.date,
    venue_id: event.venue_id
});

async function save() {
    await vueFetch(`events/edit/${id}`, 'PUT', {
        ...form.value
    });

    alert('saved');
}

</script>
<template>
    <div class=" bg-slate-300 w-[800px] flex flex-col p-4 rounded-ee rounded-bl">
        <div class="w-full flex justify-between">
            <h2 class="text-slate-800 text-2xl font-semibold">Edit Event</h2>
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
                <input type="text" placeholder="name" value="Tennis"
                    class="bg-slate-400 placeholder-slate-600 text-slate-600 input input-bordered w-full mb-2" readonly
                    v-model="form.name" />
                <label class="text-slate-600 font-semibold">Date:</label>
                <input type="date" placeholder="date" value="2024-08-10"
                    class="bg-slate-400 placeholder-slate-600 text-slate-600 input input-bordered w-full mb-2"
                    v-model="form.date" />
                <label class="text-slate-600 font-semibold">Venue:</label>
                <select
                    class="select bg-slate-400 placeholder-slate-600 text-slate-600 input input-bordered w-full mb-2"
                    readonly v-model="form.venue_id">
                    <option disabled class="text-slate-600">Select...</option>
                    <option value="1" disabled>Stade de France</option>
                    <option value="2" disabled>Arena Bercy</option>
                    <option value="3" disabled>Roland Garros</option>
                    <option value="4" disabled>Vélodrome National</option>
                    <option value="5" disabled>Grand Palais</option>
                </select>
                <button class="btn mt-4 bg-slate-700 text-slate-400 w-full border-0">Edit</button>
            </div>
        </form>
    </div>
</template>