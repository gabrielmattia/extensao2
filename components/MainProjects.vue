<script setup>
  const { data } = await useFetch('/api/projetosFavoritos')
  let favoriteProjects = []
  if(data.value) favoriteProjects = data?.value
</script>

<template>
  <div
    v-if="favoriteProjects.length"
    class="welcome-content"
  >
    <CardProject
      v-for="fav in favoriteProjects"
      :key="fav.id"
      :projectId="fav.id"
      :projectTitle="fav.nome_oficial"
      :year="fav?.ano"
      :author="fav?.autor"
      :country="fav?.pais"
      :state="fav?.estado"
      :city="fav?.cidade"
      :imageFileName="fav.imagens[0]?.file"
      :imgAltText="fav.imagens[0]?.name"
    />
  </div>
</template>

<style scoped>
  .welcome-content {
    @apply w-full grid grid-cols-1 md:grid-cols-custom-2 lg:grid-cols-custom-3 xl:grid-cols-custom-4 2xl:grid-cols-custom-5 place-content-between justify-items-center gap-4;
  }
</style>
