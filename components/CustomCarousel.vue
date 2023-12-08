<script setup>
  import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'

  defineComponent({
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
  })

  defineProps({
    arrayImages: {
      type: Array,
      required: true,
    },
    hasNavigation: {
      type: Boolean,
      default: true,
    },
    hasPagination: {
      type: Boolean,
      default: true,
    },
    autoPlay: {
      type: Number,
      default: 0,
    },
    customClasses: {
      type: String,
    },
    wrapAround: {
      type: Boolean,
      default: false
    }
  })
</script>
<template>
  <Carousel
    :autoplay="autoPlay"
    :class="customClasses"
    :wrap-around="wrapAround"
  >
    <Slide
      v-for="slide in arrayImages"
      :key="slide"
    >
      <NuxtImg
        :src="`${slide.file}`"
        :alt="`${slide.name}`"
        class="carousel__item rounded-lg cursor-pointer"
      />
    </Slide>

    <template #addons="{ slidesCount }">
      <Navigation v-if="slidesCount > 1 && hasNavigation" />
      <Pagination v-if="hasPagination" />
    </template>
  </Carousel>
</template>

<style scoped>
  .carousel-project-page .carousel {
    @apply max-w-[80%] md:max-w-[60%];
  }

  .carousel-project-page .carousel__item {
    @apply min-h-[224px]
    max-h-[430px]
    w-full
    max-w-[580px]
    bg-transparent rounded-lg;
  }
</style>
