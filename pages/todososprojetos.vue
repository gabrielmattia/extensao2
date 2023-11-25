<template>
  <div class="page">
    <h1>Todos os projetos</h1>
    <main>
      <p v-if="pending">
        <span class="loading"></span>
      </p>
      <p v-else-if="error">Error while fetching drafts 💔</p>
      <div v-else>
        <Post class="post" v-for="projeto in projetos" :key="projeto.id" :projeto="projeto" />
      </div>
    </main>
  </div>
</template>
<script setup>

const { data: projetos, error, pending } = await useFetch('/api/projetos')


</script>
<style scoped>
.post {
  background: white;
  transition: box-shadow 0.1s ease-in;
}

.post:hover {
  box-shadow: 1px 1px 3px #aaa;
}

.post+.post {
  margin-top: 2rem;
}
</style>
