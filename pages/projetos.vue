<script setup>
  // import LoadingIcon from '@/components/LoadingIcon.vue'
  import CardProject from '@/components/CardProject.vue'
  import { PROJECT_FILTER_OPTIONS, FILTER_TYPES, FILTER_TYPES_MAPPING } from '../constants/filters'

  const selectedOption = ref(0)
  const searchText = ref(null)

  const { data: projectsData, pending, error } = await useFetch(() => '/api/projetos')

  const selectOption = (event) => {
    selectedOption.value = Number(event.target.value)
  }

  const findProjects = (filterParam, searchTextValue) => {
    return projectsData.value.filter((project) => {
      if (filterParam === FILTER_TYPES.localidade) {
        return (
          project.cidade?.toLowerCase().includes(searchTextValue) ||
          project.estado?.toLowerCase().includes(searchTextValue) ||
          project.pais?.toLowerCase().includes(searchTextValue)
        )
      }
      return project[FILTER_TYPES_MAPPING[filterParam]]?.toLowerCase().includes(searchTextValue)
    })
  }

  const filteredProjects = computed(() => {
    return searchText.value ? findProjects(selectedOption.value, searchText.value.toLowerCase()) : projectsData.value
  })
</script>

<template>
  <NuxtLayout name="allprojects">
    <template #main-content>
      <!-- <LoadingIcon v-if="pending" /> -->
      <p v-if="error">Erro ao tentar listar projetos 💔</p>

      <CardProject
        v-else
        v-for="(project, index) in filteredProjects"
        :key="index"
        :projectId="project.id"
        :projectTitle="project.nome_oficial"
        :year="project?.ano"
        :author="project?.autor"
        :country="project?.pais"
        :state="project?.estado"
        :city="project?.cidade"
        :imageFileName="project.imagens[0]?.file"
        :imgAltText="project.imagens[0]?.name"
      />
    </template>
    <template #aside-content>
      <div class="filter-types">
        <h5>Procurando um projeto?</h5>

        <form @submit.prevent>
          <select
            ref="filterType"
            id="select-filter-type"
            v-model="selectedOption"
            @change="selectOption"
            class="select"
          >
            <option
              disabled
              selected
              :value="0"
            >
              Selecione um filtro
            </option>
            <option
              class="radio-wrapper"
              v-for="option in PROJECT_FILTER_OPTIONS"
              :key="option.id"
              :value="option.id"
            >
              {{ option.label }}
            </option>
          </select>

          <div class="flex flex-col">
            <input
              type="text"
              :placeholder="
                selectedOption === 0
                  ? 'Buscar projeto por...'
                  : `Buscar projeto por ${PROJECT_FILTER_OPTIONS[selectedOption - 1]?.name}`
              "
              v-model="searchText"
              class="input"
              :class="{
                'border-red-300': searchText && filteredProjects?.length === 0,
                'focus:outline-red-400': searchText && filteredProjects?.length === 0,
                'focus:border-red-400': searchText && filteredProjects?.length === 0,
              }"
              :disabled="selectedOption === 0"
            />
						<span
							v-if="searchText && filteredProjects?.length === 0"
							class="text-red-500 text-xs pt-2 font-normal"
						>
							Não foram econtrados projetos com o(a) {{ PROJECT_FILTER_OPTIONS[selectedOption - 1]?.name }} fornecido(a).
						</span>
          </div>
        </form>
      </div>
    </template>
    <!-- 
    <template #pagination>
			<div v-if="filteredProjects.length > 0" class="join">
					<button class="join-item btn btn-active">1</button>
					<button class="join-item btn">2</button>
					<button class="join-item btn">3</button>
					<button class="join-item btn">4</button>
			</div>
		</template>
		-->
    </NuxtLayout>
</template>

<style scoped>
  .filter-types {
    @apply flex flex-col;
  }
  h5 {
    @apply leading-5;
  }
  .select {
    @apply select-bordered w-full max-w-xs my-3 min-h-[2.5rem] max-h-[2.5rem] text-sm;
  }
  .input {
    @apply input-bordered w-full h-[2.5rem] px-2 w-full max-w-xs text-sm;
  }
</style>
