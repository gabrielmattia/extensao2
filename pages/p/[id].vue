<script setup>
  import 'viewerjs/dist/viewer.css'
  import { directive as viewer } from 'v-viewer'
  import CustomCarousel from '../../components/CustomCarousel.vue'
  
  const vViewer = viewer({
    debug: false,
  })
  
  const route = useRoute()
  const { data: projeto, pending, error } = await useFetch(() => `/api/projetos/${route.params.id}`)
</script>

<template>
  <p v-if="error">Erro ao tentar acessar o projeto 💔</p>
  <NuxtLayout
    v-else
    name="basic"
  >
    <template #main-content>
      <ButtonGoBack />
      <div class="container mx-auto my-8">
        <div
          class="carousel-project-page flex flex-col items-center"
          v-viewer="{ movable: true, rotatable: false, scalable: false }"
        >
          <CustomCarousel
            :arrayImages="projeto?.imagens"
            custom-classes="flex flex-col bg-transparent rounded-box items-center"
          />
        </div>
        
      </div>

      <div class="container mx-auto my-8">
        <div class="flex flex-col items-center">
          <div class="flex items-center py-4">
            <h3 class="self-baseline capitalize">{{ projeto?.nome_oficial }}</h3>
            <div
              v-if="projeto?.ano"
              class="border-1 w-[5px] h-[6px] bg-slate-700 m-2"
            ></div>
            <h4 class="self-baseline text-skin-black-mute font-medium">{{ projeto?.ano }}</h4>
          </div>

          <div class="lg:columns-2">
            <span>endereço</span>
            <p>{{ projeto?.endereco }}</p>
            <span>autor(es)</span>
            <p>
              {{ projeto?.autor }}
            </p>
            <span>executor(es)</span>
            <p>
              {{ projeto?.executor }}
            </p>
            <span>ano da construcao</span>
            <p>
              {{ projeto?.ano_da_construcao }}
            </p>
            <span>area do terreno</span>
            <p>
              {{ projeto?.area_do_terreno }}
            </p>
            <span>area construida</span>
            <p>
              {{ projeto?.area_construida }}
            </p>
            <span>programa</span>
            <p>
              {{ projeto?.programa }}
            </p>
            <span>numero de pavimentos</span>
            <p>
              {{ projeto?.numero_de_pavimentos }}
            </p>
            <span>subsolo</span>
            <p>
              {{ projeto?.subsolo }}
            </p>
            <span>elevadores</span>
            <p>
              {{ projeto?.elevadores }}
            </p>
            <span>obras de arte</span>
            <p>
              {{ projeto?.obras_de_arte }}
            </p>
            <span>proprietario original</span>
            <p>
              {{ projeto?.proprietario_original }}
            </p>
            <span>fonte</span>
            <p>
              {{ projeto?.fonte }}
            </p>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>

<style scoped>
  span {
    @apply tracking-widest text-base uppercase;
  }

  p {
    @apply text-sm leading-4 m-1;
  }

  p:not(:first-of-type) {
    @apply mb-2;
  }
</style>
