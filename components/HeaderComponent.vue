<script setup></script>

<template>
  <header>
    <div class="wrapper flex flex-col justify-center">
      <div class="flex flex-col items-center sm:flex-row sm:items-baseline">
        <!-- <h1 class="sm:me-2">PAHC</h1> -->
        <h1 class="text-center sm:text-left">Projetos Arquitetônicos de Habitação Coletiva</h1>
      </div>

      <nav class="join">
        <NuxtLink
          to="/"
          class="btn btn-ghost btn-sm"
        >
          Início
        </NuxtLink>
        <NuxtLink
          to="/projetos"
          class="btn btn-ghost btn-sm"
        >
          Projetos
        </NuxtLink>
        <NuxtLink
          to="/sobre-nos"
          class="btn btn-ghost btn-sm"
        >
          Sobre
        </NuxtLink>
      </nav>
    </div>
    <div class="bg-ig-logo text-white self-end rounded-lg p-0.5 md:mb-1 md:hover:opacity-70">
      <a
        href="https://www.instagram.com/debates.habitacao.coletiva/?igshid=NzZlODBkYWE4Ng%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        class="md:hover:opacity-100"
      >
        <img
          src="../assets/images/instagram-logo.svg"
          alt="instagram link"
        />
      </a>
    </div>
  </header>
</template>

<style scoped>
  header {
    @apply flex justify-evenly items-center bg-base-300 py-8 px-4 md:p-8;
  }

  nav {
    @apply w-full flex justify-center lg:block pt-4;
  }

  .bg-ig-logo {
    background: #f09433; 
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  }

  @media (max-width: 767px) {
    a {
      @apply min-h-[1rem] h-[1rem] max-h-[1rem];
    }
  }
</style>
