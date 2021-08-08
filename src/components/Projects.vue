<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({
  length: {
    type: Number,
    required: false,
  },
})
const router = useRouter()
const projects: any = router.getRoutes().filter((route: any) => route.meta.frontmatter?.tech)
  .sort((a: any, b: any) => a.meta.frontmatter.order - b.meta.frontmatter.order)
  .splice(0, props.length || router.getRoutes().filter((route: any) => route.meta.frontmatter?.tech).length)
</script>
<template>
  <div class="grid grid-cols-2 gap-1">
    <div
      v-for="project in projects"
      :key="project.meta.frontmatter.order"
      class="group col-span-1 cursor-pointer rounded-md flex-col flex space-y-4 p-4"
    >
      <div>
        <div class="font-semibold text-center flex space-x-4 pb-2 text-xl items-baseline">
          <Clown v-if="project.meta.frontmatter.icon === 'Clown'" />
          <DB v-else-if="project.meta.frontmatter.icon === 'DB'" />
          <VampireHover v-else-if="project.meta.frontmatter.icon === 'VampireHover'" />
          <Hadena v-else />
          <div>{{ project.meta.frontmatter.title }}</div>
        </div>
        <div class="text-sm pb-2">
          {{ project.meta.frontmatter.description }}
        </div>
        <div class="flex space-x-2">
          <Icon
            v-for="(tech, index) in project.meta.frontmatter.tech"
            :key="index"
            class="h-4 w-4 text-nosferatu dark:text-cullen"
            :class="'group-hover:text-' + tech.color"
            :icon="tech.icon"
          />
          <div class="flex items-center justify-end">
            <a
              rel="noopener noreferrer"
              target="_blank"
              class="icon-btn animate hover:animate-spin"
              :href="project.meta.frontmatter.link"
            >
              <bi-globe />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
