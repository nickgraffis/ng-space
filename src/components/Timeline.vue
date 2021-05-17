<script setup lang="ts">
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'
import { formatDate } from '../logic'
import Icon from '../components/Icons/Icon.vue'

const props = defineProps({
  length: {
    type: Number,
    required: false,
  },
})

const router = useRouter()
const events = router.getRoutes().filter(route => route.meta.frontmatter?.color)
  .sort((a, b) => +new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date))
  .splice(0, props.length || router.getRoutes().filter(route => route.meta.frontmatter?.color).length)

</script>
<template>
  <ul class="w-full space-y-12">
    <li v-for="(event, index) in events" class="relative">
      <div style="z-index: 1;" class="absolute w-0.5 dark:bg-cullen bg-nosferatu rounded-sm mt-1 left-4 -ml-px h-24 " :class="[index === events.length - 1 ? 'hidden': '']"></div>
      <div style="z-index: 1;" class="flex w-full items-center relative space-x-4">
        <div :class="event.meta.frontmatter.color" class="text-aro rounded-full h-8 w-8 flex items-center justify-center">
          <Icon :icon="event.meta.frontmatter.icon" />
        </div>
        <p class="flex-grow mx-4 text-sm text-nosferatu dark:text-cullen">
          {{ event.meta.frontmatter.description }}
        </p>
        <p class="text-sm text-nosferatu dark:text-cullen">
          {{ formatDate(event.meta.frontmatter.date) }}
        </p>
      </div>
    </li>
  </ul>
</template>
