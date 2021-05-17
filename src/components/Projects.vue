<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import Clown from './Icons/Clown.vue'
import DB from './Icons/DB.vue'
import VampireHover from './Icons/VampireHover.vue'
import Hadena from './Icons/Hadena.vue'

const props = defineProps({
  length: {
    type: Number,
    required: false,
  },
})

const router = useRouter()
const projects = router.getRoutes().filter(route => route.meta.frontmatter?.tech)
  .sort((a, b) => a.meta.frontmatter.order - b.meta.frontmatter.order)
  .splice(0, props.length || router.getRoutes().filter(route => route.meta.frontmatter?.tech).length)

const carefulEval = (exp) => {
  return eval(exp)
}
</script>
<template>
  <ul class="grid grid-cols-4 gap-4">
    <div v-for="(project, index) in projects" :class="'col-span-' + project.meta.frontmatter.size" class="group cursor-pointer rounded-md dark:border-cullen border-nosferatu border-2 flex-col flex space-y-4 items-center justify-center p-4">
      <component :is="carefulEval(project.meta.frontmatter.icon)"></component>
      <div>
        <p class="font-semibold text-center">
          {{ project.meta.frontmatter.title }}
        </p>
        <p class="text-sm pb-2 text-center">
          {{ project.meta.frontmatter.description }}
        </p>
        <div class="flex space-x-2 items-center justify-center">
          <Icon v-for="(tech, index) in project.meta.frontmatter.tech" class="h-4 w-4 text-cullen" :class="'group-hover:text-' + tech.color" :icon="tech.icon" />
          <div class="flex items-center justify-end">
            <div class="p-1 rounded-full hover:bg-aro cursor-pointer flex items-center justify-center">
              <feather-arrow-up-right />
            </div>
            <div class="p-1 rounded-full hover:bg-aro cursor-pointer flex items-center justify-center">
              <bi-globe />
            </div>
          </div>
        </div>
      </div>
    </div>
  </ul>
</template>
