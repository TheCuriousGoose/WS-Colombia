<script setup lang="ts">
import PageContainer from '@/components/PageContainer.vue';
import MedalsDisplayTable from '@/components/MedalsDisplayTable.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const countryName = route.params.country;
const medal = route.params.medal;

const response = await fetch('http://localhost:3000/countries');
const countries = await response.json();

const country = countries.filter((country: any) => country.name == countryName)[0];


</script>
<template>
    <PageContainer>
        <template #title>
            {{ country.name }}
        </template>
        <div class="text-center mb-2">
            <img :src="'/src/assets/' + country.flag" alt="" class="w-50">
        </div>
        <div class="text-center mb-5">
            <h2 class="uppercase">{{ medal }} medals</h2>
            <span class="display-1">{{ country.medals[medal] }}</span>
        </div>
        <MedalsDisplayTable :country="country" :medal="medal"></MedalsDisplayTable>
    </PageContainer>
</template>