<script setup></script>

<template>
  <header>
    <div class="wrapper flex flex-col justify-center">
      <div class="flex flex-col items-center sm:flex-row sm:items-baseline">
        <h1 class="sm:me-2">PAHC</h1>
        <h2 class="text-center sm:text-left">Projetos Arquitetônicos de Habitação Coletiva</h2>
      </div>

      <nav class="join " > 
        <NuxtLink to="/"          class="btn join-item btn-outline btn-ghost btn-sm">Início</NuxtLink>
        <NuxtLink to="/projetos"  class="btn join-item btn-outline btn-ghost btn-sm">Projetos</NuxtLink>
        <NuxtLink to="/sobre-nos" class="btn join-item btn-outline btn-ghost btn-sm">Sobre</NuxtLink>
      </nav>

    </div>
    <div class="bg-black text-white self-end rounded-lg p-0.5 md:mb-1 md:hover:opacity-70">
      <a href="https://www.instagram.com/debates.habitacao.coletiva/?igshid=NzZlODBkYWE4Ng%3D%3D" target="_blank"
        rel="noopener noreferrer" class="md:hover:opacity-100">
        <img src="../assets/images/instagram-logo.svg" alt="instagram link" />
      </a>
    </div>
  </header>
</template>

<style scoped>
header {
  @apply flex justify-evenly items-center bg-base-300 p-8;
}

nav {
  @apply w-full flex justify-center lg:block pt-4;
}

/* nav a {
  @apply inline-block px-4 border-l border-solid border-nav-primary;
} */

/* nav a:first-of-type {
  @apply pr-4 pl-0;
}

nav a:first-of-type {
  @apply border-none;
} */
</style>
