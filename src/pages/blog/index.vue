<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { formatDate } from '../../logic'
const lang = ref('en')
const router = useRouter()
const routes = router.getRoutes()
const posts = computed(() =>
  routes.filter(i => !i.path.endsWith('.html') && i.meta.frontmatter?.lang === lang.value),
)
</script>

<template>
  <ul class="text-left w-full">
    <router-link
      v-for="route in posts"
      :key="route.path"
      class="item block font-normal mb-6 mt-2 no-underline"
      :to="route.path"
    >
      <li class="no-underline flex space-x-8">
        <div class="">
          <Icon class="text-3xl opacity-50" :icon="route.meta.frontmatter.icon || 'carbon:unknown'" />
        </div>
        <div>
          <div class="title text-lg">
            {{ route.meta.frontmatter.title }}
          </div>
          <div class="">
            {{ route.meta.frontmatter.description }}
          </div>
          <div class="time opacity-50 text-sm -mt-1">
            {{ route.meta.frontmatter.date }} <span v-if="route.meta.frontmatter.duration">· {{ route.meta.frontmatter.duration }}</span>
          </div>
        </div>
      </li>
    </router-link>
  </ul>
</template>
