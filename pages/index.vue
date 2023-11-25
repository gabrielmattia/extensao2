<template>
  <div class="page">
    <h1>My Blog</h1>
    <main>
      <p v-if="pending">
        <span class="loading"></span>
      </p>
      <p v-else-if="error">Error while fetching feed 💔</p>
      <div v-else>
        <Post class="post" v-for="projeto in projetoFavorito" :key="projeto.id" v-bind:projeto="projeto" />
      </div>
    </main>
  </div>
</template>

<script setup>

const { data: projetoFavorito, error, pending } = await useFetch('/api/projetosFavoritos')


</script>

<style>
.post {
  background: white;
  transition: box-shadow 0.1s ease-in;
}

.post:hover {
  box-shadow: 1px 1px 3px #aaa;
}

.post,
.post {
  margin-top: 2rem;
}
</style>
