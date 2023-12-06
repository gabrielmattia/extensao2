<script setup>
  defineProps({
    projectId: {
      type: Number,
      required: true,
    },
    projectTitle: {
      type: String,
      required: true,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    year: {
      type: String,
    },
    author: {
      type: String,
    },
    imageFileName: {
      type: String,
    },
    imgAltText: {
      type: String,
    },
  })
 
</script>

<template>
  <div class="card-wrapper">
    <NuxtLink :to="`/p/${projectId}`">
      <div class="card-model">
        <div class="card-content">
          <div class="card-image">
            <img
              :src="`${imageFileName}`"
              :alt="imgAltText"
            />
          </div>

          <div class="card-box-info">
            <h3>{{ projectTitle }} {{ year ? `(${year})` : '' }}</h3>
            <p class="author-text">{{ author ? `${author}` : '' }}</p>
            <p class="text-xs">
              {{ country ? `${country} - ` : '' }}
              {{ city ? `${city}, ` : '' }}
              {{ state ? `${state}` : '' }}
            </p>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
  .author-text {
    @apply text-sm max-w-full text-ellipsis overflow-hidden whitespace-nowrap;
  }
  .card-wrapper {
    @apply min-h-[320px] max-h-[320px] min-w-[280px] max-w-[280px] rounded-lg border transition-all duration-300 ease-linear delay-0;
  }
  .card-wrapper:hover {
    box-shadow:
      rgba(0, 0, 0, 0.12) 0px 8px 18px -6px,
      rgba(0, 0, 0, 0.12) 0px 12px 42px -4px;
  }
  .card-wrapper a {
    @apply hover:no-underline;
  }
  .card-model {
    @apply flex min-w-full min-h-full h-full;
  }
  .card-content {
    @apply flex flex-col justify-between w-full rounded-lg;
  }
  .card-image {
    @apply h-[70%];
  }
  .card-image img {
    @apply min-h-[224px] max-h-[224px] w-full mx-auto rounded-t-lg;
  }
  .card-box-info {
    @apply h-[30%] px-3 py-2 flex flex-col gap-0;
  }
  .card-box-info p {
    @apply md:leading-5;
  }
  .card-box-info h3 {
    @apply text-base leading-5;
  }
</style>
