<script setup lang="ts">

</script>

<template>
  <main>
    <div class="container">
      <img src="@/assets/imgs/logo-white.png" alt="Olymic logo" class="mb-5">
      <img src="@/assets/imgs/frame.png" alt="App logo" class="mb-6">
      <RouterLink to="/countries" class="btn mb-2">
        <img src="@/assets/imgs/ico-countries.svg" alt="World">
        Countries
      </RouterLink>
      <RouterLink to="/disciplines"  class="btn">
        <img src="@/assets/imgs/ico-disciplines.svg" alt="Basketball">
        Disciplines
      </RouterLink>
    </div>
  </main>
</template>
