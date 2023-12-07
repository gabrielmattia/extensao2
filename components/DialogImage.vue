<template>
  <dialog id="my_modal_4" class="modal ">
    <div class="container modal-box min-w-fit min-h-fit m-2">
      <div class="images" v-viewer="{ movable: false }">
       

      </div>
      <div class="modal-action">
        <form method="dialog">

          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script  setup>

import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import { defineComponent } from 'vue'
import 'viewerjs/dist/viewer.css'
import { directive as viewer } from "v-viewer"


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
  directives: {
    viewer: viewer({
      debug: true
    })
  },
  methods: {
    show() {
      const viewer = this.$el.querySelector('.images').$viewer
      viewer.show()
    }
  }

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
  @apply
  /* max-h-[430px]
   w-full max-w-[580px] */
  bg-transparent rounded-lg;
}
</style>