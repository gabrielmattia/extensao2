<script setup></script>

<template>
  <NuxtLayout name="basic">
    <template #main-content>
      <div class="presentation-wrapper">
        <div class="pb-4 lg:max-h-[90%]">
          <img
            src="../assets/images/cityvogue.jpg"
            alt="Edificio Residencial City Vogue"
            class="w-full h-full max-w-full rounded-lg"
          />
        </div>
        <div class="presentation">
          <h2>Apresentação</h2>
          <p>
            Debate e publicação de projetos arquitetônicos de habitação coletiva realizados no Brasil.
          </p>

        </div>
      </div>
      <MainProjects />
    </template>
  </NuxtLayout>
</template>

<style scoped>
  .presentation-wrapper {
    @apply grid grid-cols-1 lg:grid-cols-2 gap-6 py-8;
  }
  .presentation p {
    @apply py-2;
  }
</style>
