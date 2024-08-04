<script setup lang="ts">
import PageContainer from '@/components/PageContainer.vue';
import MedalsTable from '@/components/MedalsTable.vue';
import { useRoute } from 'vue-router';
import router from '@/router';

const route = useRoute();
const countryName = route.params.country;

const response = await fetch('http://localhost:3000/countries');
const countries = await response.json();

const country = countries.filter((country: any) => country.name == countryName)[0];

function showMedals(medal: string){
    router.push(`/countries/${countryName}/${medal}`)
}

</script>
<template>
    <PageContainer>
        <template #title>
            {{ country.name }}
        </template>
        <div class="text-center mb-2">
            <img :src="'/src/assets/' + country.flag" alt="" class="w-50">
        </div>
        <div class="mb-5">
            <MedalsTable :medals="country.medals"></MedalsTable>
        </div>
        <button type="button" class="btn mb-1" v-for="(amount, name) in country.medals" :key="name" @click="showMedals(`${name}`)">
            <img :src="`/src/assets/imgs/medals/${name}.png`" alt="" class="btn-img">
            Medals
        </button>
    </PageContainer>
</template>