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
      <div class="home-wrapper">
        <div class="presentation-wrapper">
          <CustomCarousel
            class="lg:hidden xl:block"
            :array-images="favImages"
            :auto-play="3000"
            :has-navigation="false"
            :has-pagination="false"
            :wrap-around="true"
          />

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
      </div>
    </template>
  </NuxtLayout>
</template>

<style scoped>
  .home-wrapper {
    @apply flex flex-col justify-center min-h-[inherit];
  }

  .presentation-wrapper {
    @apply grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-8 content-center xl:max-h-custom-home-xl;
  }

  .welcome-content {
    @apply w-full pt-8 lg:pt-0 grid grid-cols-1 md:grid-cols-custom-2 justify-items-center md:place-content-center gap-4 md:gap-9;
  }
</style>
