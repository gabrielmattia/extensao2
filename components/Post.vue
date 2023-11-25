<template>
  <div @click="navigate(projeto)">
    <h2>{{ }}</h2>

    <small>{{ projeto.nome_oficial }}</small>

    <!-- <p v-html="post.content"></p> -->
  </div>
  <div v-for="imagem in projeto.imagens" :key="imagem.id">

    <small>{{ imagem.name }}</small>
    <br>

    <small>{{ imagem.file }}</small>
    <br>


    <NuxtImg :src="`${imagem.file}`" />
    <br>


  </div>
</template>

<script setup>

const { projeto } = defineProps({
  projeto: {
    type: Object,
  }
})
console.log(projeto)
const router = useRouter()

const navigate = (post) => router.push(`/p/${post.id}`)

</script>
<style scoped>
div {
  color: inherit;
  padding: 2rem;
}
</style>
