<script setup>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

  import 'vue3-carousel/dist/carousel.css'

  defineComponent({
    name: 'Basic',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
  })
  const route = useRoute()
  const { data: projeto, pending, error } = await useFetch(() => `/api/projetos/${route.params.id}`)
</script>
<template>
  <p v-if="error">Erro ao tentar acessar o projeto 💔</p>
  <NuxtLayout v-else name="basic">
    <template #main-content>
      <ButtonGoBack />
      <div class="container mx-auto my-8">
        <div class="content-wrapper flex flex-col items-center">
          <Carousel class="flex-col max-w-[550px] space-x-4 bg-transparent rounded-box items-center">
            <Slide
              v-for="slide in projeto.imagens"
              :key="slide"
            >
              <NuxtImg
                :src="`${slide.file}`"
                :alt="`${slide.name}`"
                class="carousel__item rounded-lg"
              />
            </Slide>

            <template #addons>
              <Navigation v-if="projeto?.imagens.length > 1" />
              <Pagination />
            </template>
          </Carousel>
        </div>
        
      </div>

      <div class="container mx-auto my-8">
        <div class="content-wrapper flex flex-col items-center">
          <div class="carousel carousel-center max-w-[450px] space-x-4 bg-transparent rounded-box items-center">
            <div
              class="carousel-item w-full items-center justify-center"
              v-for="(image, index) in projeto.imagens"
              :key="index"
            ></div>
          </div>
          <div class="flex items-center py-8">
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

  .carousel {
    @apply max-w-[80%] md:max-w-[60%];
  }
  .carousel__item {
    @apply min-h-[224px] max-h-[370px] w-full max-w-[580px] bg-transparent rounded-lg;
  }
</style>
