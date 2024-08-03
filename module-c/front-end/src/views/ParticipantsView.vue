<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { vueFetch } from '@/utils/vueFetch';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;


const participants = ref<object>({});
participants.value = await vueFetch(`participants/list/${id}`);

const events = await vueFetch('events/list');
const event = events.find((event) => event.id == id);

async function deleteParticipant(participantId: number) {
    vueFetch(`participants/delete/${participantId}`, 'DELETE');

    alert('Deleted participant');
    participants.value = await vueFetch(`participants/list/${id}`);

}
</script>

<template>
        <div class=" bg-slate-300 w-[800px] flex flex-col p-4 rounded-ee rounded-bl">
            <div class="w-full flex justify-between">
                <h2 class="text-slate-800 text-2xl font-semibold">Participant List - Event: {{ event.name }}</h2>
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
            <div class="overflow-x-auto">
                <table class="table text-slate-600 mt-4">
                    <thead>
                        <tr class="text-slate-900">
                            <th>Id</th>
                            <th>FullName</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Cancel Event</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="participant in participants" :key="participant.id">
                            <th>{{ participant.id }}</th>
                            <td>{{ participant.fullname }}</td>
                            <td>{{ participant.email }}</td>
                            <td>{{ participant.phone }}</td>
                            <td>
                                <button @click="deleteParticipant(participant.id)"
                                    class="btn btn-xs text-slate-400 bg-slate-900 border-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
</template>