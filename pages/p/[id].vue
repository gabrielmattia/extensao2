<template>
  <LoadingIcon v-if="isLoading" />
  <div v-else class="container mx-auto my-8">
    <BtnGoBack />
    <div class="content-wrapper flex flex-col items-center">
      <div class="carousel carousel-center max-w-[450px] space-x-4 bg-transparent rounded-box items-center">
        <div class="carousel-item w-full items-center justify-center" v-for="(image, index) in projeto.imagens"
          :key="index">
          <img :src="`/../${image.file}`" :alt="`${image.name}`" class="rounded-lg" />
        </div>
      </div>

      <div class="flex items-center py-8">
        <h3 class="self-baseline capitalize">{{ projeto?.nome_oficial }}</h3>
        <div v-if="projeto?.ano" class="border-1 w-[5px] h-[6px] bg-slate-700 m-2"></div>
        <h4 class="self-baseline text-skin-black-mute font-medium">{{ projeto?.ano }}</h4>
      </div>

      <div class="lg:columns-2">
        <span>endereço</span>
        <p>{{ projeto?.endereco }} - {{ projeto?.cidade }} - {{ projeto?.estado }}.</p>
        <p>{{ projeto?.cep }} - {{ projeto?.pais }}.</p>
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

<script setup>
const route = useRoute()

const { data: projeto, isLoading } = await useFetch(() => `/api/projetos/${route.params.id}`)



</script>


<style scoped>
span {
  @apply tracking-widest text-base uppercase;
}

p {
  @apply text-sm leading-4;
}

p:not(:first-of-type) {
  @apply mb-4;
}
</style>