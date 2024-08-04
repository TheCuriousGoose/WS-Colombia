<script setup lang="ts">
import PageContainer from '@/components/PageContainer.vue';
import router from '@/router';

const response = await fetch('http://localhost:3000/countries');
const countries = await response.json();

function showPage(pageId: string){
  router.push(`/countries/${pageId}`);
}
</script>

<template>
  <PageContainer>
    <template #title>
      Countries
    </template>
    <button class="btn mb-1" v-for="country in countries" :key="country.name" @click="showPage(country.name)">
      <img :src="'/src/assets/' + country.flag" :alt="'Flag of ' + country.name" class="btn-img">
      {{ country.name }}
    </button>
  </PageContainer>
</template>