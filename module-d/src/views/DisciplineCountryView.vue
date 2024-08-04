<script setup lang="ts">
import PageContainer from '@/components/PageContainer.vue';
import MedalsTable from '@/components/MedalsTable.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const disciplineName = route.params.discipline;
const countryName = route.params.country;

const response = await fetch('http://localhost:3000/countries');
const countries = await response.json();

const country = countries.filter((country: any) => country.name.toLowerCase() === countryName.toLowerCase())[0];
const discipline = country.disciplines.filter((discipline: any) => discipline.name.toLowerCase() == disciplineName.toLowerCase())[0];

const medals = {
    gold: discipline.gold,
    silver: discipline.silver,
    bronze: discipline.bronze
}
</script>

<template>
    <PageContainer>
        <template #title>
            {{ discipline.name }}
        </template>
        <div class="text-center mb-5">
            <img :src="`/src/assets/${discipline.image}`" alt="" class="w-50">
        </div>
        <div class="text-center mb-2">
            <h2 class="display-2">{{ country.name }}</h2>
        </div>
        <MedalsTable :medals="medals"></MedalsTable>
    </PageContainer>
</template>