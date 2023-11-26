<script setup>
import LoadingIcon from '@/components/LoadingIcon.vue'
import CardProject from '@/components/CardProject.vue'
const { data: projetos, isLoading, error } = await useFetch(() => '/api/projetos')

</script>

<template>
    <NuxtLayout name="basic">
        <template #main-content>

            <LoadingIcon v-if="isLoading" />
            <p v-else-if="error">Error while fetching feed 💔</p>


            <CardProject v-else v-for="(project, index) in projetos" :key="index" :projectId="project.id"
                :projectTitle="project.nome_oficial" :year="project?.ano" :author="project?.autor" :country="project?.pais"
                :state="project?.estado" :city="project?.cidade" :imageFileName="project.imagens[0]?.file"
                :imgAltText="project.imagens[0]?.name" />


        </template>
        <template #aside-content>
            <div class="filter-types">
                <h5>Procurando um projeto?</h5>


                <form @submit.prevent>
                    <select class="select select-bordered w-full max-w-xs">
                        <option disabled selected>Buscar por:</option>
                        <option>Nome</option>
                        <option>Autor</option>
                        <option>Endereço</option>
                    </select>

                <div>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
            </form>
        </div>
    </template>
    <!-- <template #pagination>
            <span v-if="filteredProjects.length === 0" class="font-semibold text-lg leading-5 pb-8">
                Não foram econtrados projetos com o parâmetro fornecido.
            </span>
                        <div v-if="filteredProjects.length > 0" class="join">
                            <button class="join-item btn btn-active">1</button>
                            <button class="join-item btn">2</button>
                            <button class="join-item btn">3</button>
                            <button class="join-item btn">4</button>
                        </div>
                    </template> -->
    </NuxtLayout>
</template>

<style scoped>
.filter-types {
    @apply flex flex-col;
}

.radio-wrapper {
    @apply flex items-center py-1;
}

.filter-types label {
    @apply text-sm ps-2 font-normal;
}

h5 {
    @apply leading-5;
}

input[type='radio'] {
    @apply cursor-pointer;
}

.input {
    @apply h-[2.5rem] px-2 w-full max-w-xs mt-3 text-sm;
}
</style>