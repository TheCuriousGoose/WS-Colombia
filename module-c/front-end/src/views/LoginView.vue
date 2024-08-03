<script setup lang="ts">
import type { Auth } from '@/interfaces/AuthInterface';
import { useLocalStorage } from '@/utils/useLocal';
import { vueFetch } from '@/utils/vueFetch';
import { ref } from 'vue'

const form = ref({
    username: '',
    password: ''
})

async function login() {
    const auth = await vueFetch('login', 'POST', {
        username: form.value.username,
        password: form.value.password
    });

    if (auth.token) {
        const auth = useLocalStorage<Auth>('auth', { loggedIn: false });
        auth.value.loggedIn = true;

        window.location.href = '/events';
    } else {
        alert('Login failed');

        form.value = {
            username: '',
            password: ''
        }
    }
}
</script>

<template>
    <div class=" bg-slate-300 w-[380px] flex flex-col p-4 rounded-ee rounded-bl">
        <label class="text-slate-600 font-semibold">Username:</label>
        <input type="text" placeholder="username"
            class="bg-slate-400 placeholder-slate-600 text-slate-600 input input-bordered w-full mb-2"
            v-model="form.username" />
        <label class="text-slate-600 font-semibold">Password:</label>
        <input type="password" placeholder="password"
            class="bg-slate-400 placeholder-slate-600 text-slate-600 input input-bordered w-full mb-2"
            v-model="form.password" />
        <button class="btn mt-4 bg-slate-700 text-slate-400 w-full border-0" @click="login">Login</button>
    </div>
</template>