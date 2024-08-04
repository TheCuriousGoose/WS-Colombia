<script setup lang="ts">
import router from '@/router';

const hasHistory = () => { return window.history.length > 2 }
</script>

<template>
  <nav>
    <div class="prev-btn" @click="hasHistory() ? router.back() : router.push('/')">
      <img src="@/assets/imgs/ico-prev.svg" alt="">
    </div>
    <img src="@/assets/imgs/logo-sm-white.png" alt="">
  </nav>
  <main class="container">
    <h1 id="title">
      <slot name="title"></slot>
    </h1>
    <slot></slot>
  </main>
</template>