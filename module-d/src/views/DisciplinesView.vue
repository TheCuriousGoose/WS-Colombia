<script setup lang="ts">
import PageContainer from '@/components/PageContainer.vue';
import router from '@/router';

const response = await fetch('http://localhost:3000/countries');
const countries = await response.json();

const disciplinesMap = new Map();

countries.forEach((country) => {
    country.disciplines.forEach((discipline) => {
        if (!disciplinesMap.has(discipline.name)) {
            disciplinesMap.set(discipline.name, {
                name: discipline.name,
                image: discipline.image
            });
        }
    });
});

const disciplines = Array.from(disciplinesMap.values());

function showPage(name: string){
 router.push(`/disciplines/${name.toLowerCase()}`)
}
</script>

<template>
    <PageContainer>
        <template #title>
            Disciplines
        </template>
        <button type="button" class="btn mb-1" v-for="(discipline, index) in disciplines" :key="index" @click="showPage(discipline.name)">
            <img :src="`/src/assets/${discipline.image}`" alt="" class="btn-img">
            {{ discipline.name }}
        </button>
    </PageContainer>
</template>