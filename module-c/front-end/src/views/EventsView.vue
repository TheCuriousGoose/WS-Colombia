<script setup lang="ts">
import { vueFetch } from '@/utils/vueFetch';
import { RouterLink } from 'vue-router';

const events = await vueFetch('events/list', 'GET');

</script>

<template>
    <div class=" bg-slate-300 w-[800px] flex flex-col p-4 rounded-ee rounded-bl">
      <div class="w-full flex justify-between">
        <h2 class="text-slate-800 text-2xl font-semibold">Events List</h2>
        <div>
          <RouterLink to="/participants/create" class="btn btn-sm text-slate-400 bg-slate-900 border-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Participant
          </RouterLink>
          <RouterLink to="/events/create" class="btn btn-sm text-slate-400 bg-slate-900 border-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Event
          </RouterLink>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="table text-slate-600 mt-4">
          <thead>
            <tr class="text-slate-900">
              <th>Id</th>
              <th>Name</th>
              <th>Date</th>
              <th>Venue</th>
              <th>Edit</th>
              <th>Participants</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(event, index) in events" :key="index">
              <th>{{ event.id }}</th>
              <td>{{ event.name }}</td>
              <td>{{ event.date }}</td>
              <td>{{ event.venue.name }}</td>
              <td>
                <RouterLink :to="`/events/${event.id}/edit`" class="btn btn-xs text-slate-400 bg-slate-900 border-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                  Edit
                </RouterLink>
              </td>
              <td>
                <RouterLink :to="`/events/${event.id}/participants`" class="btn btn-xs text-slate-400 bg-slate-900 border-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                  Participants
                </RouterLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>
