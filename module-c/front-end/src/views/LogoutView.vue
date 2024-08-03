<script setup lang="ts">
import type { Auth } from '@/interfaces/AuthInterface';
import { useLocalStorage } from '@/utils/useLocal';
import { vueFetch } from '@/utils/vueFetch';

const auth = useLocalStorage<Auth>('auth', { loggedIn: false });
await vueFetch('logout', 'POST');

auth.value.loggedIn = false;
window.location.href = '/';

</script>
<template>
    <main></main>
</template>