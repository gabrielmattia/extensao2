<script setup></script>

<template>
  <NuxtLayout name="basic">
    <template #main-content>
      <div class="presentation-wrapper">
        <div class="">
          <img
            src="../assets/images/cityvogue_img1.jpg"
            alt="Edificio Residencial City Vogue"
            class="w-full h-full max-w-full rounded-lg"
          />
        </div>
        <div class="">
          <MainProjects />
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>

<style scoped>
  .presentation-wrapper {
    @apply grid grid-cols-1 xl:grid-cols-2 gap-5 content-center;
  }
</style>
