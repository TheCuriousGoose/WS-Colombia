<script lang="ts" setup>
import PageContainer from '@/components/PageContainer.vue';
import router from '@/router';
import { useRoute } from 'vue-router';

const route = useRoute();
const disciplineName = route.params.discipline;

const response = await fetch('http://localhost:3000/countries');
const countries = await response.json();

let disciplines: any = [];

countries.forEach((country: any) => {
    const countryDisciplines = country.disciplines;
    const discipline = countryDisciplines.filter((discipline: any) => discipline.name.toLowerCase() == disciplineName)[0];

    if (discipline) {
        disciplines.push({
            country: country.name,
            medals: discipline.gold + discipline.silver + discipline.bronze,
            name: discipline.name,
            image: discipline.image,
        });
    }
});

function showPage(country: string){
    router.push(`/disciplines/${disciplineName}/${country}`)
}
</script>

<template>
    <PageContainer>
        <template #title>
            {{ disciplines[0].name }}
        </template>
        <div class="text-center mb-5">
            <img :src="`/src/assets/${disciplines[0].image}`" alt="" class="w-50">
        </div>
        <table>
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Medals</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(discipline, index) in disciplines" :key="index">
                    <td @click="showPage(discipline.country)" class="text-decoration-underline text-start">{{ discipline.country }}</td>
                    <td>{{ discipline.medals }}</td>
                </tr>
            </tbody>
        </table>
    </PageContainer>
</template>