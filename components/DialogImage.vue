<template>
  <dialog id="my_modal_4" class="modal ">
    <div class="modal-box w-11/12 max-w-5xl">
      <div class="container mx-auto my-8">
        <div class="content-wrapper flex flex-col items-center">
          <Carousel class="flex-col space-x-4 bg-transparent rounded-box items-center">
            <Slide v-for="slide in imagens" :key="slide">
              <NuxtImg :src="`${slide.file}`" :alt="`${slide.name}`" class="carousel__item rounded-lg" />
            </Slide>

            <template #addons>
              <Navigation v-if="imagens.length > 1" />
              <Pagination />
            </template>
          </Carousel>

        </div>
      </div>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script  setup>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
defineProps({
  imagens: {
    type: Array,
    required: true,
  },
})
defineComponent({
  name: 'Basic',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
})
</script>

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
  @apply min-h-[224px] 
  /* max-h-[430px]
   w-full max-w-[580px] */
    bg-transparent rounded-lg;
}
</style>