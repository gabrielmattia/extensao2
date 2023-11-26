<script setup></script>

<template>
  <footer class="footer bg-neutral text-neutral-content">
    <div>
      <p class="footer-title opacity-90">Realização:</p>
      <div class="flex items-center justify-center gap-5 md:gap-8">
        <a
          href="https://www.ufms.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="Universidade Federal de Mato Grosso do Sul logo"
            class="rounded-lg"
            src="@/assets/images/ufms-logo.png"
            width="70"
            height="70"
          />
        </a>

        <a
          href="https://www.facom.ufms.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="Faculdade de Computação logo"
            src="@/assets/images/grafo_facom.png"
            width="80"
            height="80"
          />
          <p class="text-xs font-semibold pt-1">FACOM-UFMS</p>
        </a>

        <a
          href="https://faeng.ufms.br/graduacao/bacharelado/arquitetura-e-urbanismo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="rounded-md"
            alt="Curso de Arquitetura e Urbanismo logo"
            src="@/assets/images/cau-logo.jpeg"
            width="150"
            height="150"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  .footer {
    @apply flex p-4 md:grid md:place-content-center lg:p-10;
  }

  a {
    @apply hover:no-underline;
  }
</style>
