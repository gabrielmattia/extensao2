<script setup>
  import CustomCarousel from '../components/CustomCarousel.vue'
  import { favImages } from '../constants/data-images'
  
  const { data: projectsData, pending, error } = await useFetch(() => '/api/projetos')

  const mainProjects = computed(() => {
    let randomProjects = []
    while (randomProjects.length < 4) {
      const item = projectsData.value[Math.floor(Math.random() * projectsData.value.length)]
      randomProjects.push(projectsData.value.find((p) => p?.id === item.id))
      const index = projectsData.value.indexOf(item)
      projectsData.value.splice(index, 1)
    }

    return randomProjects
  })
</script>

<template>
  <NuxtLayout name="basic">
    <template #main-content>
      <div class="presentation-wrapper">
        <CustomCarousel :array-images="favImages" :auto-play="3000" :has-navigation="false" :has-pagination="false" />
        
        <div
          v-if="mainProjects.length > 0"
          class="welcome-content"
        >
          <ClientOnly>
            <CardProject
              v-for="proj in mainProjects"
              :key="proj.id"
              :projectId="proj.id"
              :projectTitle="proj.nome_oficial"
              :year="proj?.ano"
              :author="proj?.autor"
              :country="proj?.pais"
              :state="proj?.estado"
              :city="proj?.cidade"
              :imageFileName="proj.imagens[0]?.file"
              :imgAltText="proj.imagens[0]?.name"
            />
          </ClientOnly>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>

<style scoped>
  .presentation-wrapper {
    @apply grid grid-cols-1 xl:grid-cols-2 xl:pt-8 gap-5 content-center;
  }
  .welcome-content {
    @apply w-full grid grid-cols-1 md:grid-cols-custom-2 justify-items-center md:place-content-center gap-4;
  }
</style>
