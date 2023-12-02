<script setup></script>

<template>
  <header>
    <div class="container lg:max-w-[1024px] mx-auto px-4 lg:px-14 xl:px-20">
      <div class="flex flex-col justify-center">
        <div class="flex flex-col items-center md:items-baseline">
          <h1 class="text-center md:text-left pl-2">DEBATES SOBRE HABITAÇÃO COLETIVA</h1>
          <p class="text-center md:text-left pl-3"> Debate e publicação de projetos arquitetônicos de habitação coletiva realizados no Brasil.</p>
        </div>

        <div class="navbar justify-between min-h-[3rem] p-0">
          <div class="flex">
            <NuxtLink to="/" class="btn btn-ghost btn-sm">
              Início
            </NuxtLink>
            <NuxtLink to="/projetos" class="btn btn-ghost btn-sm">
              Projetos
            </NuxtLink>
            <NuxtLink to="/sobre-nos" class="btn btn-ghost btn-sm">
              Sobre
            </NuxtLink>
          </div>
          <div class="flex-end ">
            <div class="bg-ig-logo text-white self-end rounded-lg p-0.5 md:mb-1 md:hover:opacity-70 m-2">
              <a href="https://www.instagram.com/debates.habitacao.coletiva/?igshid=NzZlODBkYWE4Ng%3D%3D" target="_blank"
                rel="noopener noreferrer" class="md:hover:opacity-100">
                <img src="../assets/images/instagram-logo.svg" alt="instagram link" />
              </a>
            </div>
            <div class="bg-yt-logo text-white self-end rounded-lg p-0.5 md:mb-1 md:hover:opacity-70 m-2">
              <a href="https://www.youtube.com/@debateshabitacaocoletiva" target="_blank"
                rel="noopener noreferrer" class="md:hover:opacity-100">
                <img src="../assets/images/youtube-logo.svg" alt="youtube link" />
              </a>
            </div>
          </div>
        </div>
      </div>
  </div>
  </header>
</template>

<style scoped>
header {
  @apply bg-base-300 py-4;

}

.bg-yt-logo {
  background: #F61C0D;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f09433', endColorstr='#bc1888', GradientType=1);
}

.bg-ig-logo {
  background: #f09433;
  background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  background: -webkit-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f09433', endColorstr='#bc1888', GradientType=1);
}

@media (max-width: 767px) {
  a {
    @apply min-h-[1rem] h-[1rem] max-h-[1rem];
  }
}
</style>
