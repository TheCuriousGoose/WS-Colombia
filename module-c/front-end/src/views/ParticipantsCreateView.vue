<script setup lang="ts">
import { vueFetch } from '@/utils/vueFetch';
import { ref } from 'vue';
  
const events = await vueFetch('events/list', 'GET');

let defaultForm = {
    fullname: '',
    email: '',
    phone: '',
    event_id: ''
}

const form = ref<object>(defaultForm);

async function save(){
    const participant = await vueFetch('participants/create', 'POST', {
        ...form.value
    })

    alert('Saved participant');
    form.value = defaultForm;
}

</script>

<template>
    <div class=" bg-slate-300 w-[800px] flex flex-col p-4 rounded-ee rounded-bl">
        <div class="w-full flex justify-between">
            <h2 class="text-slate-800 text-2xl font-semibold">Add Participant</h2>
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
                <label class="text-slate-600 font-semibold">FullName:</label>
                <input type="text" placeholder="fullname" v-model="form.fullname"
                    class="bg-slate-400 placeholder-slate-600 text-slate-600 input input-bordered w-full mb-2" />
                <label class="text-slate-600 font-semibold">Email:</label>
                <input type="text" placeholder="email" v-model="form.email"
                    class="bg-slate-400 placeholder-slate-600 text-slate-600 input input-bordered w-full mb-2" />
                <label class="text-slate-600 font-semibold">Phone:</label>
                <input type="text" placeholder="phone" v-model="form.phone"
                    class="bg-slate-400 placeholder-slate-600 text-slate-600 input input-bordered w-full mb-2" />
                <label class="text-slate-600 font-semibold">Event:</label>
                <select v-model="form.event_id"
                    class="select bg-slate-400 placeholder-slate-600 text-slate-600 input input-bordered w-full mb-2">
                    <option disabled selected>Select...</option>
                    <option v-for="event in events" :key="event.id" :value="event.id">{{ event.name }}</option>
                </select>
                <button class="btn mt-4 bg-slate-700 text-slate-400 w-full border-0">Add</button>
            </div>
        </form>
    </div>
</template>
